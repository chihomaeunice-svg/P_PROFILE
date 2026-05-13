import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import RealEstate from './pages/RealEstate'
import Investment from './pages/Investment'
import Trade from './pages/Trade'
import Facilitation from './pages/Facilitation'
import Corporate from './pages/Corporate'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/real-estate"   element={<RealEstate />} />
          <Route path="/investment"    element={<Investment />} />
          <Route path="/trade"         element={<Trade />} />
          <Route path="/facilitation"  element={<Facilitation />} />
          <Route path="/corporate"     element={<Corporate />} />
          <Route path="/contact"       element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
