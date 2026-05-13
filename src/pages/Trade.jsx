import SectorPage from '../components/SectorPage/SectorPage'
import { getRelated } from '../data/sectors'

const data = {
  num: '03',
  title: 'International\nTrade',
  shortTitle: 'International Trade',
  tagline: 'Facilitating cross-border trade relationships, market entry strategies, and bilateral commercial engagements between East Africa and global markets.',
  heading: 'East Africa Is Open\nFor Serious Business',
  lead: 'East Africa sits at a strategic crossroads of global commerce — and Peter Mushi helps international businesses and local enterprises unlock that bilateral potential.',
  body: [
    'Whether you are an international company seeking to enter the East African market, or a local business looking to export products and services to global buyers, Peter provides the connections, context, and credibility needed to make those relationships work.',
    'Trade facilitation here goes beyond basic introductions. It includes understanding regulatory environments, identifying the right local partners, navigating customs and compliance nuances, and ensuring that both sides of any transaction are properly represented and protected.',
    'Past engagements have covered commodities, manufactured goods, agricultural exports, technology services, and professional consulting — spanning markets across Africa, the Middle East, Europe, and Asia.',
  ],
  offers: [
    'Market entry strategy for international businesses',
    'Export facilitation for East African enterprises',
    'Buyer and supplier introductions across global markets',
    'Trade compliance and regulatory navigation guidance',
    'Government and trade authority relationship access',
    'Cross-border deal structuring and negotiation support',
  ],
  related: getRelated('/trade'),
}

export default function Trade() {
  return <SectorPage sector={data} />
}
