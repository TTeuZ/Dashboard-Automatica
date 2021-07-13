const home = {
  title: 'Home',
  sideBarItem: {
    icon: 'mdi-home',
    text: 'Home',
    path: '/',
  },
  breadcrumbs: [
    {
      text: 'Home',
      disabled: false,
      href: '/',
    },
  ],
  table: {
    headers: [],
    items: [],
    search: '',
    itemsPerPage: 0,
    multiSort: false,
    mobileBreakPoint: 600,
    noDataText: 'sem items',
    noResultText: 'sem resultados',
    dense: false,
  }, // solução temporaria pq nao sei ainda como fazer o loading de carregamento do vuex bugar o data-table
}

export default home
