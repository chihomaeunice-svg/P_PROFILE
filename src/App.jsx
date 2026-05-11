import Navbar    from './components/Navbar/Navbar'
import Hero      from './components/Hero/Hero'
import About     from './components/About/About'
import Statement from './components/Statement/Statement'
import Sectors   from './components/Sectors/Sectors'
import Network   from './components/Network/Network'
import Values    from './components/Values/Values'
import Contact   from './components/Contact/Contact'
import Footer    from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Statement />
        <Sectors />
        <Network />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
