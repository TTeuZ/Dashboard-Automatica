const service = {
  title: 'Serviços',
  showAdd: true,
  showSearch: true,
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
      text: 'Serviços',
      disabled: true,
    },
  ],
  table: {
    search: '',
  },
}

export default service
