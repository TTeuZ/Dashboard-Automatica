# Dashboard Automática

### Made by Paulo Mateus Luza Alves (TTeuZ)

## Ferramentas utilizadas

Os frameworks utilzidos para a cosntrução do front foram:
- Nuxt.js;
- Vue.js (Juntamente com o Vuex).

Os frameworks utilizados no back foram:
- Firebase.

## O projeto

A dashboard automática consiste em um sistema que tem suas páginas criadas 'automaticamente' a partir de um json de configuração.

- Os dados são exibidos em uma data table

As funcioanlidades existentes são básicas, consistindo em:
- criar;
- editar;
- deletar itens.

## O json de configuração

Como a idea deste projeto é criar as páginas de maneira dinâmica, neste json temos todas as configurações que são necessárias para a construção da pagina.

Json Exemplo:
```
const service = {
  title: 'Serviço', // Titulo da página, é exibido nos modais e no header
  name: 'service', // valor utilziado para realizar as requests ao firebase
  showAdd: true, // controla a exibição do botão e adição de items
  showSearch: true, // controla a exibição do input de seatch
  sideBarItem: { // Este objeto e puxado pela side bar, adicionando o item nas opções de navegação do sistema
    icon: 'mdi-archive',
    text: 'service',
    path: '/content',
    query: { entity: 'service' },
  },
  breadcrumbs: [ // Este item configura o breadcrumb de navegação da página
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
    headers: [ // Headers que serão exibidos na table da página
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
    search: '', // variável que armazena o texto escrito na busca
    itemsPerPage: 15, // variável que configura quantos itens por pagina serão exibidos na table
    multiSort: true, // variável que indica se o sort da table pode ser multiplo
    mobileBreakPoint: 900, // variável que indica o valor que a table irá 'quebrar' para a mobile view
    noDataText: 'Sem serviços', // variável de texto para quando não houver itens cadastrados
    noResultText: 'Não existe esse serviço', // variável para quando a pesquisa resultar em nenhum item
    dense: false,
  },
  form: [ // neste objeto temos as configurações dos campos da formularios de cadstro de itens
    {
      key: 'name', // nome que vai para o banco de dados
      type: 'textInput', // Indica o componente que vai ser renderizado
      mask: '', // mascara de exibição
      label: 'Nome do Serviço', // label exibido no componente
      rules: [(v) => !!v || 'Nome é obrigatorio'], // regras especificas do tipo do componente
      value: '', // valor inputado no form
    },
    {
      key: 'file',
      type: 'upload',
      label: 'Imagem do serviço',
      multiple: true, // variável que indica se poderão ser armazenado multiplos arquivos
      extension: '.png, .jpg', // Extensões que o input pode aceitar. // extenções habilitadas
      colorChip: 'orange', // coloração do 'chip' que apresenta o nome do arquivo adicionado
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
       isMultiple: false, // variável que indica se poderão ser armazenado multiplos items
       dataCameFromOtside: false, // variável que indica se as informações do imput serão adivindas do back
       items: [ // caso as informações nao sejam do back, neste item serão escritas os items do seletor
         {
           label: 'teste', // nome exibido
           value: 1, // valor enviado ao back
         },
         {
           label: 'teste2',
           value: 2,
         }, // pode ser preenchido pelo back caso necessário
       ],
       rules: [(v) => !!v || 'O arquivo é obrigatorio'],
       value: '',
    },
    {
      key: 'items',
      type: 'vSelect',
      label: 'selecione o item',
      isMultiple: false,
      dataCameFromOtside: true, // indica que as infos vão vir de uma rota
      dataFont: 'testimony', // nome da entity que vai ser chamada
      dataLabel: 'name', // valor que vai ser apresentado no label das opções
      items: null,
      rules: [(v) => !!v || 'O arquivo é obrigatorio'],
      value: '',
    },
  ],
}
```

OBS:  Para o correto funcionamento da renderização dos seletores e inputs de textos, é necessário enviar as keys deles da seguinte maneira:

- Select = 'key: items'
- files = 'key: files'

isso ocorre por conta do funcionamento do v-data-table, o qual permite o bind de slots por meio do value indicado no header. Porem, isto faz com que não seja possível adicionar mais de um seletor/fileInput por entity.