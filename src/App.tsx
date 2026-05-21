import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import ServicesPage from '@/pages/ServicesPage'
import CatalogPage from '@/pages/CatalogPage'
import ContactPage from '@/pages/ContactPage'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="servicios" element={<ServicesPage />} />
            <Route path="catalogo" element={<CatalogPage />} />
            <Route path="contacto" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
