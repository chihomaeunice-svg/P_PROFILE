import Hero      from '../components/Hero/Hero'
import Marquee   from '../components/Marquee/Marquee'
import About     from '../components/About/About'
import Statement from '../components/Statement/Statement'
import Sectors   from '../components/Sectors/Sectors'
import Network   from '../components/Network/Network'
import Values    from '../components/Values/Values'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Statement />
      <Sectors />
      <Network />
      <Values />
    </>
  )
}
