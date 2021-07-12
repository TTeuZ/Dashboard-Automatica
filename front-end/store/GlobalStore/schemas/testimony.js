const testimony = {
  title: 'Testemunhos',
  showAdd: true,
  showSearch: false,
  sideBarItem: {
    icon: 'mdi-archive',
    text: 'service',
    path: '/content',
    query: { entity: 'service' },
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
    search: '',
  },
}

export default testimony
