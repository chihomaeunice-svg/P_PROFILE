import SectorPage from '../components/SectorPage/SectorPage'
import { getRelated } from '../data/sectors'

const data = {
  num: '05',
  title: 'Corporate\nConnections',
  shortTitle: 'Corporate Connections',
  tagline: 'Direct access to C-suite executives, board-level decision makers, and institutional partners across East African and international business sectors.',
  heading: 'The Right Room\nChanges Everything',
  lead: 'In high-value business, the most important question is rarely "what do you know?" It is "who do you know — and who trusts you enough to open their door?"',
  body: [
    'Peter Mushi has spent over a decade building a network that spans corporate boardrooms, government offices, financial institutions, and international business associations across East Africa and beyond. That network is not for sale — but it is accessible to the right people with the right intent.',
    'Corporate connections facilitated here range from introductions to CEOs of regional conglomerates, to direct engagement with decision-makers at banks, telecoms, logistics firms, and energy companies. Each introduction is made with full context provided on both sides, ensuring that every meeting has purpose and mutual relevance.',
    'If there is a specific organization, sector, or decision-maker you have been unable to reach through conventional channels, Peter may be the bridge you need.',
  ],
  offers: [
    'C-suite and board-level executive introductions',
    'Financial institution and banking relationship access',
    'Telecommunications and technology sector connections',
    'Regional conglomerate and holding company engagement',
    'Government ministry and parastatal relationship access',
    'International chamber and trade body introductions',
  ],
  related: getRelated('/corporate'),
}

export default function Corporate() {
  return <SectorPage sector={data} />
}
