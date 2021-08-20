const testimony = {
  title: 'Testemunho',
  name: 'testimony',
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
    headers: [
      {
        text: 'Nome',
        value: 'name',
        sorteable: true,
        align: 'start',
        slot: false,
      },
      {
        text: 'Descrição',
        value: 'note',
        sorteable: true,
        align: 'start',
        slot: false,
      },
      {
        text: 'Items',
        value: 'only-items',
        sorteable: true,
        align: 'start',
        slot: true,
      },
    ],
    search: '',
    itemsPerPage: 15,
    multiSort: true,
    mobileBreakPoint: 900,
    noDataText: 'Sem testemunhos',
    noResultText: 'Não existe esse testemunho',
    dense: false,
  },
  form: [
    {
      key: 'name',
      type: 'textInput',
      mask: '',
      label: 'Nome do Testemunho',
      rules: [(v) => !!v || 'Nome é obrigatorio'],
      value: '',
    },
    {
      key: 'note',
      type: 'inputArea',
      label: 'Descrição do Testemunho',
      extension: '.pdf',
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
        },
      ],
      rules: [(v) => !!v || 'O arquivo é obrigatorio'],
      value: '',
    },
  ],
}

export default testimony
