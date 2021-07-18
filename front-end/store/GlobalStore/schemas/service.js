const service = {
  title: 'Serviços',
  name: 'Serviço',
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
    search: '',
    itemsPerPage: 15,
    multiSort: true,
    mobileBreakPoint: 900,
    noDataText: 'sem serviços',
    noResultText: 'Não existe esse serviço',
    dense: false,
  },
  form: [
    {
      key: 'name',
      type: 'textInput',
      mask: '',
      label: 'Nome do Serviço',
      rules: [(v) => !!v || 'Nome é obrigatorio'], // *regras especificas do tipo do componente*
      value: '',
    },
    {
      key: 'note',
      type: 'inputArea',
      label: 'Descrição do serviço',
      rules: [], // *regras especificas do tipo do componente*
      value: '',
    },
    {
      key: 'image', // vai ter que sofrer alterações para o tipo de save que a ecomp faz
      type: 'upload',
      label: 'Imagem do serviço',
      rules: [], // *regras especificas do tipo do componente*
      value: '',
    },
  ],
}

export default service
