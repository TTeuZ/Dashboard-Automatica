const service = {
  title: 'Serviço',
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
        slot: false,
      },
      {
        text: 'Arquivos',
        value: 'file-files', // precisa mandar o 'file-' para o slot reconhcer
        sorteable: true,
        align: 'start',
        slot: true,
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
        value: 'select-items', // precisa mandar o 'select-' para o slot reconhcer
        sorteable: true,
        align: 'start',
        slot: true,
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
      mask: '',
      label: 'Nome do Serviço',
      rules: [(v) => !!v || 'Nome é obrigatorio'],
      value: '',
    },
    {
      key: 'file',
      type: 'upload',
      label: 'Imagem do serviço',
      multiple: true,
      extension: '.png, .jpg',
      colorChip: 'orange',
      rules: [(v) => !!v || 'O arquivo é obrigatorio'],
      value: '',
    },
    {
      key: 'note',
      type: 'inputArea',
      label: 'Descrição do serviço',
      rules: [(v) => !!v || 'Descrição é obrigatorio'],
      value: '',
    },
    {
      key: 'items',
      type: 'vSelect',
      label: 'selecione o item',
      isMultiple: true,
      dataCameFromOtside: true,
      dataFont: 'testimony',
      dataLabel: 'name',
      items: null,
      rules: [(v) => !!v || 'O arquivo é obrigatorio'],
      value: '',
    },
  ],
}

export default service
