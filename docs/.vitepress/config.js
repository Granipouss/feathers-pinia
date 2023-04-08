import pkg from '../../package.json'

export default {
  title: 'Feathers-Pinia',
  description: 'Connect Vue to Feathers',
  lang: 'en-US',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/marshallswain/feathers-pinia',
      },
    ],
    footer: {
      message:
        'Many thanks go to the Vue and FeathersJS communities for keeping software development FUN!',
      copyright: 'MIT Licensed',
    },
    nav: [
      { text: 'Setup', link: '/setup/' },
      { text: 'API Guides', link: '/guide/' },
      {
        text: pkg.version,
        items: [
          {
            text: 'Release Notes',
            link: 'https://github.com/marshallswain/feathers-pinia/releases',
          },
          {
            text: 'Docs v2',
            link: 'https://v2.feathers-pinia.pages.dev/',
          },
          {
            text: 'Docs v1',
            link: 'https://v1.feathers-pinia.pages.dev/',
          },
          {
            text: 'Docs v0',
            link: 'https://v0.feathers-pinia.pages.dev/',
          },
        ]
      },
    ],
    sidebar: {
      '/setup/': getSetupSidebar(),
      '/migrate/': getSetupSidebar(),
      '/guide/': getGuideSidebar(),
      '/app/': getGuideSidebar(),
      '/': getGuideSidebar(),
    },
  },
}

function getSetupSidebar() {
  return [
    {
      text: 'Start a Project',
      items: [
        { text: 'Overview', link: '/setup/' },
        { text: 'Install', link: '/setup/install' },
        {
          text: 'Setup',
          items: [
            { text: 'Vite', link: '/setup/vite' },
            { text: 'Nuxt 3', link: '/setup/nuxt3' },
            // { text: 'Quasar 🚧', link: '/setup/quasar' },
          ]
        },
        { text: 'Example Apps', link: '/setup/example-apps' },
        { text: 'Other Setup Examples', link: '/setup/other' },
      ],
    },
    {
      text: 'Migration Guides',
      items: [
        { text: 'Models to Services', link: '/migrate/models' },
        { text: 'Clone Handling', link: '/migrate/handle-clones' },
        { text: 'Store Customization', link: '/migrate/store-customization' },
        { text: 'from Vuex', link: '/migrate/from-feathers-vuex' },
        { text: 'from 0.x', link: '/migrate/from-v0' },
      ],
    },
  ]
}

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      items: [
        { text: "What's New 🎁", link: '/guide/whats-new' },
        { text: 'Introduction', link: '/guide/' },
        { text: 'Module Overview', link: '/guide/module-overview' },
      ],
    },
    {
      text: 'Feathers-Pinia Client',
      link: '/guide/create-pinia-client',
    },
    {
      text: 'Feathers-Pinia Services',
      items: [
        {
          text: 'Service Overview',
          link: '/services/',
          items: [
            { text: 'The "new" Method', link: '/services/the-new-method' },
            { text: 'API Methods', link: '/services/api-methods' },
            { text: 'Store Methods', link: '/services/store-methods' },
            { text: 'Hybrid Methods', link: '/services/hybrid-methods' },
            { text: 'Event Methods', link: '/services/event-methods' },
          ]
        },
        { text: 'Querying Data', link: '/services/querying-data' },
        { text: 'Modeling', link: '/services/modeling' },
      ]
    },
    {
      text: 'Data Stores',
      items: [
        {
          text: 'useDataStore Overview',
          link: '/guide/modeling',
          items: [
            { text: 'The "new" Method', link: '/services/the-new-method' },
            { text: 'Store Methods', link: '/services/store-methods' },
             
          ]
        },
        {
          text: 'Model Instances',
          link: '/guide/model-instances',
          items: [
            { text: 'BaseModel Instances', link: '/guide/use-base-model-instances' },
            { text: 'FeathersModel Instances', link: '/guide/use-feathers-model-instances' },
          ],
        },
        // {
        //   text: 'Model Associations',
        //   link: '/guide/model-associations',
        //   items: [
        //     { text: 'associateFind', link: '/guide/associate-find' },
        //     { text: 'associateGet', link: '/guide/associate-get' },
        //   ],
        // },
        // { text: 'Common Patterns', link: '/guide/common-patterns' },
      ],
    },
    // {
    //   text: 'Stores',
    //   items: [
    //     { text: 'Overview', link: '/guide/stores-overview' },
    //     {
    //       text: 'Model Stores',
    //       link: '/guide/model-stores',
    //       items: [
    //         { text: 'BaseModel Stores', link: '/guide/use-base-model-stores' },
    //         { text: 'FeathersModel Stores', link: '/guide/use-feathers-model-stores' },
    //       ],
    //     },
    //     {
    //       text: 'Pinia Stores',
    //       link: '/guide/pinia-stores',
    //       items: [
    //         { text: 'useDataStore - Data Stores', link: '/guide/use-data-store' },
    //         { text: 'useAuth - Auth Stores', link: '/guide/use-auth' },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   text: 'Common Tools',
    //   items: [
    //     { text: 'useFind', link: '/guide/use-find' },
    //     { text: 'useGet', link: '/guide/use-get' },
    //   ],
    // },
    {
      text: 'Other Tools',
      items: [
        { text: 'Auto-Imports', link: '/guide/auto-imports' },
        { text: 'Nuxt Module', link: '/guide/nuxt-module' },
        { text: 'OFetch', link: '/guide/ofetch' },
        // { text: 'syncWithStorage', link: '/guide/storage-sync' },
      ],
    },
  ]
}
