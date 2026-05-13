import SectorPage from '../components/SectorPage/SectorPage'
import { getRelated } from '../data/sectors'

const data = {
  num: '02',
  title: 'Investment\nNetworking',
  shortTitle: 'Investment Networking',
  tagline: 'Connecting capital with verified, curated opportunities across infrastructure, technology, agriculture, and emerging East African sectors.',
  heading: 'Capital Finds Its\nHighest Purpose Here',
  lead: 'The most lucrative investment opportunities in Africa are not listed on exchanges. They are shared in private conversations between trusted parties — and Peter Mushi is that trusted party.',
  body: [
    'With over a decade of engagement across East African business ecosystems, Peter has cultivated relationships with entrepreneurs, project developers, government stakeholders, and institutional fund managers who are actively seeking qualified capital.',
    'The role here is not simply introductory. Peter provides context, background intelligence, and strategic framing so that every investor connection is made with full understanding of the landscape, the risks, and the potential returns.',
    'Whether you are deploying USD 50,000 or USD 50 million, the network is available to those who come with clarity of purpose and seriousness of intent.',
  ],
  offers: [
    'Access to vetted, high-potential investment opportunities',
    'Direct introductions to founders and project developers',
    'Sector intelligence briefings before any engagement',
    'Co-investment network facilitation',
    'Connection to fund managers and family offices',
    'Deal structuring and term sheet advisory support',
  ],
  related: getRelated('/investment'),
}

export default function Investment() {
  return <SectorPage sector={data} />
}
