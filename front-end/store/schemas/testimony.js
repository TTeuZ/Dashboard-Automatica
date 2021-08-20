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
        text: 'Imagens',
        value: 'file-image',
        sortable: false,
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
      key: 'image',
      type: 'upload',
      label: 'Imagem da testemunha',
      multiple: true,
      extension: '.png, .jpg, .jpeg',
      colorChip: 'orange',
      rules: [(v) => !!v || 'O arquivo é obrigatorio'],
      value: '',
    },
  ],
}

export default testimony
