import { Routes, Route } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Home from '../pages/Home'
import Listings from '../pages/Listings'
import PropertyDetails from '../pages/PropertyDetails'
import About from '../pages/About'
import Contact from '../pages/Contact'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="listings" element={<Listings />} />
        <Route path="properties/:id" element={<PropertyDetails />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={
          <div className="min-h-[60vh] flex flex-col items-center justify-center pt-24 px-4">
            <h1 className="font-display text-4xl text-black mb-4">Page Not Found</h1>
            <p className="text-gray-muted font-body">The page you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        } />
      </Route>
    </Routes>
  )
}
