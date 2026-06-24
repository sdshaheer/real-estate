import PageHero from '../components/ui/PageHero'
import FilterSidebar from '../components/listings/FilterSidebar'
import ListingsGrid from '../components/listings/ListingsGrid'
import Pagination from '../components/listings/Pagination'
import { usePropertyFilters } from '../hooks/usePropertyFilters'

export default function Listings() {
  const {
    filters,
    paginatedProperties,
    filteredProperties,
    currentPage,
    totalPages,
    totalCount,
    updateFilters,
    resetFilters,
    goToPage,
  } = usePropertyFilters()

  return (
    <div className="bg-cream min-h-screen">
      <PageHero
        eyebrow="Portfolio"
        title="Our Collection"
        subtitle={`${totalCount} exceptional properties awaiting your discovery`}
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=800&fit=crop"
      />

      <section className="sticky top-[5.5rem] z-30 bg-cream/90 nav-blur border-b border-black/[0.04]">
        <div className="container-premium py-4">
          <input
            type="text"
            placeholder="Search by name or location..."
            value={filters.search}
            onChange={(e) => updateFilters({ search: e.target.value })}
            className="input-premium !bg-white/80"
          />
        </div>
      </section>

      <section className="section-padding-sm">
        <div className="container-premium">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            <aside className="lg:w-72 shrink-0">
              <FilterSidebar
                filters={filters}
                onUpdate={updateFilters}
                onReset={resetFilters}
              />
            </aside>
            <div className="flex-1 min-w-0">
              {filteredProperties.length === 0 ? (
                <div className="text-center py-24 card-premium">
                  <p className="font-display text-2xl md:text-3xl text-black mb-3">No properties found</p>
                  <p className="text-gray-muted font-body text-[15px] mb-8">Try adjusting your filters to discover more listings.</p>
                  <button
                    onClick={resetFilters}
                    className="text-gold text-[11px] uppercase tracking-[0.15em] font-medium hover:text-gold-dark transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <>
                  <ListingsGrid properties={paginatedProperties} />
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={goToPage}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
