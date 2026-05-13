import SectorPage from '../components/SectorPage/SectorPage'
import { getRelated } from '../data/sectors'

const data = {
  num: '01',
  title: 'Real Estate\nOpportunities',
  shortTitle: 'Real Estate',
  tagline: 'Access to premium land, commercial developments, and high-value property investments across strategic East African markets.',
  heading: 'Where Capital Meets\nStrategic Land',
  lead: 'East Africa is experiencing one of the most significant real estate transformations in the world. Peter Mushi positions investors and buyers at the front of that opportunity.',
  body: [
    'From prime residential plots in rapidly developing urban corridors to large-scale commercial parcels in key economic zones, the opportunities facilitated here are carefully vetted and strategically positioned for strong long-term returns.',
    'Peter works directly with landowners, developers, county authorities, and financial institutions to ensure every transaction is structured with clarity, legal soundness, and mutual benefit. Whether you are an individual buyer, a real estate syndicate, or an institutional investor — this is where access begins.',
    'Discretion is standard. Every opportunity is shared with qualified parties only, and every engagement is handled with the professionalism that high-value property transactions demand.',
  ],
  offers: [
    'Curated land and property listings across East Africa',
    'Introduction to verified landowners and developers',
    'Due diligence coordination and legal structuring guidance',
    'Off-market deals unavailable on public platforms',
    'Investment analysis and market positioning advisory',
    'Connection to financiers and development partners',
  ],
  related: getRelated('/real-estate'),
}

export default function RealEstate() {
  return <SectorPage sector={data} />
}
