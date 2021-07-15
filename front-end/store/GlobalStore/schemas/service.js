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
      label: 'Nome do Serviço',
      value: '',
      component: {
        type: 'textInput',
        componentConfig: {
          rules: 'regras de validação do componente',
          // *regras especificas do tipo do componente*
        },
      },
    },
    {
      key: 'note',
      label: 'Descrição do serviço',
      value: '',
      component: {
        type: 'inputArea',
        componentConfig: {
          rules: 'regras de validação do componente',
          // *regras especificas do tipo do componente*
        },
      },
    },
    {
      key: 'image', // vai ter que sofrer alterações para o tipo de save que a ecomp faz
      label: 'Imagem do serviço',
      value: '',
      component: {
        type: 'upload',
        componentConfig: {
          rules: 'regras de validação do componente',
          // *regras especificas do tipo do componente*
        },
      },
    },
  ],
}

export default service
