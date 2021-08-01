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
  form: [
    {
      key: 'name', // nome que vai para o bacno de dados
      type: 'textInput',
      mask: '',
      label: 'Nome do Testemunho',
      rules: [(v) => !!v || 'Nome é obrigatorio'], // *regras especificas do tipo do componente*
      value: '',
    },
    {
      key: 'note',
      type: 'inputArea',
      label: 'Descrição do Testemunho',
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

export default testimony
