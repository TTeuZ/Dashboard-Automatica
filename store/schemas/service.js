const service = {
  title: 'Serviço',
  name: 'service',
  showAdd: true,
  showSearch: true,
  sideBarItem: {
    icon: 'mdi-archive',
    text: 'Serviços',
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
        text: 'Serviço',
        value: 'name',
        sortable: true,
        align: 'start',
        slot: false,
      },
      {
        text: 'Descrição',
        value: 'note',
        sortable: true,
        align: 'start',
        slot: false,
      },
      {
        text: 'Situação',
        value: 'array-situation', // precisa mandar o 'array-' para o slot reconhcer
        externalFont: false,
        sortable: true,
        align: 'start',
        slot: true,
      },
      {
        text: 'Ramo',
        value: 'array-ramo',
        externalFont: true,
        externalEntity: 'sections',
        externalLabel: 'name',
        sortable: true,
        align: 'start',
        slot: true,
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
    noDataText: 'Sem serviços',
    noResultText: 'Não existe esse serviço',
    dense: false,
  },
  form: [
    {
      key: 'name',
      type: 'textInput',
      label: 'Nome do Serviço',
      rules: [(v) => !!v || 'Nome é obrigatorio'],
      value: '',
    },
    {
      key: 'situation',
      type: 'checkbox',
      items: [
        {
          label: 'Disponível',
          value: 'disponivel',
          color: 'green',
        },
        {
          label: 'Indisponível',
          value: 'indisponível',
          color: 'red',
        },
      ],
      value: '',
    },
    {
      key: 'image',
      type: 'upload',
      label: 'Imagem do serviço',
      multiple: true,
      extension: '.png, .jpg, .jpeg',
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
      key: 'ramo',
      type: 'vSelect',
      label: 'selecione o item',
      isMultiple: true,
      dataCameFromOtside: true,
      dataFont: 'sections',
      dataLabel: 'name',
      rules: [(v) => !!v || 'O ramo é obrigatorio'],
      value: '',
    },
  ],
}

export default service
