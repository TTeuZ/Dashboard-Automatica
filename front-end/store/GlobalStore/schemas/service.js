const service = {
  title: 'Serviços',
  showAdd: true,
  showSearch: true,
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
      text: 'Serviços',
      disabled: true,
    },
  ],
  table: {
    headers: [
      {
        text: 'Nome',
        value: 'name',
        sorteable: true,
        align: 'start',
      },
      {
        text: 'Email',
        value: 'email',
        sorteable: true,
        align: 'start',
      },
      {
        text: 'mensagem',
        value: 'message',
        sorteable: true,
        align: 'start',
      },
    ],
    items: [
      {
        name: 'teste',
        email: 'teste@teste.com',
        message: 'teste teste',
      },
      {
        name: 'teste',
        email: 'teste@teste.com',
        message: 'teste teste',
      },
      {
        name: 'teste',
        email: 'teste@teste.com',
        message: 'teste teste',
      },
    ],
    search: '',
    itemsPerPage: 15,
    multiSort: true,
    mobileBreakPoint: 900,
    noDataText: 'sem serviços',
    noResultText: 'Não existe esse serviço',
    dense: false,
  },
}

export default service
