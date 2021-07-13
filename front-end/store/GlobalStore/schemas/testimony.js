const testimony = {
  title: 'Testemunhos',
  showAdd: true,
  showSearch: false,
  sideBarItem: {
    icon: 'mdi-comment-text-outline',
    text: 'Testemunhos',
    path: '/content',
    query: { entity: 'testimony' },
  },
  breadcrumbs: [
    {
      text: 'Home',
      disabled: false,
      href: '/',
    },
    {
      text: 'Testemunhos',
      disabled: true,
    },
  ],
  table: {
    headers: [],
    items: [],
    search: '',
    itemsPerPage: 15,
    multiSort: true,
    mobileBreakPoint: 900,
    noDataText: 'sem testemunhos',
    noResultText: 'Não existe esse testemunho',
    dense: false,
  },
}

export default testimony
