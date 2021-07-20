const service = {
  title: 'Serviços',
  name: 'service',
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
      key: 'name', // nome que vai para o bacno de dados
      type: 'textInput',
      mask: '',
      label: 'Nome do Serviço',
      rules: [(v) => !!v || 'Nome é obrigatorio'], // *regras especificas do tipo do componente*
      value: '',
    },
    {
      key: 'image', // vai ter que sofrer alterações para o tipo de save que a ecomp faz
      type: 'upload',
      label: 'Imagem do serviço',
      rules: [(v) => !!v || 'Descrição é obrigatorio'],
      value: '',
    },
    {
      key: 'note',
      type: 'inputArea',
      label: 'Descrição do serviço',
      extension: '.pdf', // Extensões que o input pode aceitar.
      colorChip: 'orange',
      rules: [(v) => !!v || 'O arquivo é obrigatorio'],
      value: '',
    },
    {
      key: 'items',
      type: 'vSelect',
      label: 'selecione o item',
      isMultiple: false,
      dataCameFromOtside: false,
      items: [
        {
          label: 'teste',
          value: 1,
        },
        {
          label: 'teste2',
          value: 2,
        }, // pode ser preenchido pelo back caso necessário
      ],
      rules: [(v) => !!v || 'O arquivo é obrigatorio'],
      value: '',
    },
  ],
}

export default service
