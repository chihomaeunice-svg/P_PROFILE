import SectorPage from '../components/SectorPage/SectorPage'
import { getRelated } from '../data/sectors'

const data = {
  num: '04',
  title: 'Project\nFacilitation',
  shortTitle: 'Project Facilitation',
  tagline: 'End-to-end coordination of complex multi-stakeholder projects — from initial concept and stakeholder alignment through to execution and successful delivery.',
  heading: 'Complex Projects\nDeserve Precise Hands',
  lead: 'Large-scale projects in East Africa require more than good ideas. They require someone who understands the ecosystem, commands respect across stakeholder groups, and can hold the process together from start to finish.',
  body: [
    'Peter Mushi has played the facilitation role in projects spanning infrastructure development, public-private partnerships, community development programmes, and large commercial ventures. The common thread in each is the need for a trusted, neutral party who can bridge gaps between government bodies, investors, developers, local communities, and technical teams.',
    'Facilitation here means active involvement — managing communication, resolving friction between parties, keeping timelines accountable, and ensuring that every stakeholder\'s objectives are understood and respected throughout the process.',
    'If you have a project that requires someone of credibility, experience, and genuine investment in the outcome — Peter is available to engage.',
  ],
  offers: [
    'Multi-stakeholder alignment and relationship management',
    'Government liaison and public sector engagement',
    'Project timeline and accountability coordination',
    'Investor-developer-community bridge facilitation',
    'Risk identification and stakeholder communication',
    'End-to-end project monitoring and reporting',
  ],
  related: getRelated('/facilitation'),
}

export default function Facilitation() {
  return <SectorPage sector={data} />
}
