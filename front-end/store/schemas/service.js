// Schema mais atualizado

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
      // Field de texto
      key: 'name',
      type: 'textInput',
      label: 'Nome do Serviço',
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
      // Field de textArea
      key: 'note',
      type: 'inputArea',
      label: 'Descrição do serviço',
      rules: [(v) => !!v || 'Descrição é obrigatorio'],
      value: '',
    },
    {
      // Field de seletor com infos de api externa
      key: 'itemsExterno',
      type: 'vSelect',
      label: 'selecione o item',
      isMultiple: true,
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

export default service

// Funcionamento dos slots:
// no componente de table, todas as colunas estão com slots, usando a booelana 'slot' eu identifico se eu quero renderizar um slot ou se apenas quero renderizar o texto
// nos casos que eu quero renderizar o slot, o value no header precisa seguir o padro indicado:
// '<NomeDoSlot>-<NomeDoCampoNoBack>', pois desta maneira, dentro do v-table, o componente ira pegar a posição [0] do split deste value para mandar na renderização dinâmica de componentes
// ou seja, vai mandar o <NomeDoSlot>, e irá envia a porição [1] do value como props, ou seja 'item[<NomeDoCampoNoBack]', o que resultará nos valores corretas da coluna, renderizando assim
// de maneira 100% dinamica, slots nas colunas com informaçôes corretas.
