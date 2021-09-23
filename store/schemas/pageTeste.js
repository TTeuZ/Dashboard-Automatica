// Schema mais atualizado

const pageTeste = {
  title: 'Pagina de testes',
  name: 'pageTeste',
  showAdd: true,
  showSearch: true,
  sideBarItem: {
    icon: 'mdi-archive',
    text: 'Página de teste',
    path: '/content',
    query: { entity: 'pageTeste' },
  },
  breadcrumbs: [
    {
      text: 'Home',
      disabled: false,
      href: '/',
    },
    {
      text: 'Testes',
      disabled: true,
    },
  ],
  table: {
    headers: [
      {
        text: 'Arquivos',
        value: 'file-files', // precisa mandar o 'file-' para o slot reconhcer
        sortable: false,
        align: 'start',
        slot: true,
      },
      {
        text: 'Items Externos',
        value: 'only-itemsExterno', // precisa mandar o 'array-' para o slot reconhcer
        externalFont: true, // indica se a fonte do seletor é externa
        externalEntity: 'testimony', // indica a entity responsavel pelas informaçoes
        externalLabel: 'name', // Nome do valor da fonte externa que será exibido
        sortable: true,
        align: 'start',
        slot: true,
      },
      {
        text: 'Checkbox',
        value: 'array-checkbox', // precisa mandar o 'array-' para o slot reconhcer
        externalFont: false,
        sortable: true,
        align: 'start',
        slot: true,
      },
      {
        text: 'Items Internos',
        value: 'only-itemsInterno',
        externalFont: false,
        sortable: true,
        align: 'start',
        slot: true,
      },
      {
        text: 'Radio',
        value: 'radio',
        sortable: true,
        align: 'start',
        slot: false,
      },
      {
        text: 'Switch',
        value: 'switch-switch',
        sortable: true,
        align: 'start',
        slot: true,
      },
      {
        text: 'Numero',
        value: 'numero',
        sortable: true,
        align: 'start',
        slot: false,
      },
      {
        text: 'Nome',
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
      // Field de texto
      key: 'name',
      type: 'textInput',
      label: 'Nome do Teste',
      rules: [(v) => !!v || 'Nome é obrigatorio'],
      value: '',
    },
    {
      // Field de numero
      key: 'numero',
      type: 'numberInput',
      mask: '###',
      label: 'Numero',
      rules: [(v) => !!v || 'Numero é obrigatorio'],
      value: '',
    },
    {
      // Field de switch
      key: 'switch',
      type: 'switchField',
      label: 'Switch',
      value: '',
    },
    {
      // Field de radio
      key: 'radio',
      type: 'radio',
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
      color: 'orange',
      rules: [(v) => !!v || 'Radio é obrigatorio'],
      value: '',
    },
    {
      // Field de checkbox
      key: 'checkbox',
      type: 'checkbox',
      items: [
        {
          label: 'teste check',
          value: 1,
          color: 'orange',
        },
        {
          label: 'teste check2',
          value: 2,
          color: 'red',
        },
      ],
      value: '',
    },
    {
      // Field de arquivos
      key: 'files',
      type: 'upload',
      label: 'Imagem do teste',
      multiple: true,
      extension: '.*',
      colorChip: 'orange',
      rules: [(v) => !!v || 'O arquivo é obrigatorio'],
      value: '',
    },
    {
      // Field de textArea
      key: 'note',
      type: 'inputArea',
      label: 'Descrição do teste',
      rules: [(v) => !!v || 'Descrição é obrigatorio'],
      value: '',
    },
    {
      // Field de seletor com infos de api externa
      key: 'itemsExterno',
      type: 'vSelect',
      label: 'selecione o testemunho',
      isMultiple: false,
      dataCameFromOtside: true,
      dataFont: 'testimony',
      dataLabel: 'name',
      items: null,
      rules: [(v) => !!v || 'O item é obrigatorio'],
      value: '',
    },
    {
      // Field de seletor com infos internas
      key: 'itemsInterno',
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

export default pageTeste
