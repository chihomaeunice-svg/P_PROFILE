const allSectors = [
  { num: '01', title: 'Real Estate Opportunities',  shortTitle: 'Real Estate',         path: '/real-estate'  },
  { num: '02', title: 'Investment Networking',       shortTitle: 'Investment',          path: '/investment'   },
  { num: '03', title: 'International Trade',         shortTitle: 'International Trade', path: '/trade'        },
  { num: '04', title: 'Project Facilitation',        shortTitle: 'Project Facilitation',path: '/facilitation' },
  { num: '05', title: 'Corporate Connections',       shortTitle: 'Corporate',           path: '/corporate'    },
]

export const getRelated = (currentPath) =>
  allSectors.filter(s => s.path !== currentPath)

export default allSectors
