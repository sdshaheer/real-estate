import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { properties } from '../data/properties'

const ITEMS_PER_PAGE = 9

const defaultFilters = {
  search: '',
  city: '',
  type: '',
  minPrice: 0,
  maxPrice: 50000000,
  bedrooms: '',
  bathrooms: '',
}

export function usePropertyFilters() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)

  const filters = useMemo(() => ({
    search: searchParams.get('search') || defaultFilters.search,
    city: searchParams.get('city') || searchParams.get('location') || defaultFilters.city,
    type: searchParams.get('type') || defaultFilters.type,
    minPrice: Number(searchParams.get('minPrice')) || defaultFilters.minPrice,
    maxPrice: Number(searchParams.get('maxPrice')) || defaultFilters.maxPrice,
    bedrooms: searchParams.get('bedrooms') || defaultFilters.bedrooms,
    bathrooms: searchParams.get('bathrooms') || defaultFilters.bathrooms,
  }), [searchParams])

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      if (filters.search) {
        const q = filters.search.toLowerCase()
        const match =
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.city.toLowerCase().includes(q)
        if (!match) return false
      }
      if (filters.city && p.city.toLowerCase() !== filters.city.toLowerCase()) return false
      if (filters.type && p.type !== filters.type) return false
      if (p.price < filters.minPrice || p.price > filters.maxPrice) return false
      if (filters.bedrooms && p.bedrooms < Number(filters.bedrooms)) return false
      if (filters.bathrooms && p.bathrooms < Number(filters.bathrooms)) return false
      return true
    })
  }, [filters])

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE)
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const updateFilters = (newFilters) => {
    const params = new URLSearchParams()
    Object.entries({ ...filters, ...newFilters }).forEach(([key, value]) => {
      if (value && value !== defaultFilters[key]) {
        params.set(key, String(value))
      }
    })
    setSearchParams(params)
    setCurrentPage(1)
  }

  const resetFilters = () => {
    setSearchParams({})
    setCurrentPage(1)
  }

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return {
    filters,
    filteredProperties,
    paginatedProperties,
    currentPage,
    totalPages,
    totalCount: filteredProperties.length,
    updateFilters,
    resetFilters,
    goToPage,
  }
}
