const sections = {
  title: 'Seções',
  name: 'sections',
  showAdd: true,
  showSearch: true,
  sideBarItem: {
    icon: 'mdi-office-building-outline',
    text: 'Seções',
    path: '/content',
    query: { entity: 'sections' },
  },
  breadcrumbs: [
    {
      text: 'Home',
      disabled: false,
      href: '/',
    },
    {
      text: 'Seções',
      disabled: true,
    },
  ],
  table: {
    headers: [
      {
        text: 'Seção',
        value: 'name',
        sortable: true,
        align: 'start',
        slot: false,
      },
    ],
    search: '',
    itemsPerPage: 15,
    multiSort: true,
    mobileBreakPoint: 900,
    noDataText: 'Sem serviços',
    noResultText: 'Não existe esse serviço',
    dense: false,
  },
  form: [
    {
      key: 'name',
      type: 'textInput',
      label: 'Nome da seção',
      rules: [(v) => !!v || 'Nome é obrigatorio'],
      value: '',
    },
  ],
}

export default sections
