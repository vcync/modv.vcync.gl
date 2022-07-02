module.exports = {
  evergreen: true,
  serviceWorker: false,

  title: 'modV',
  description: 'modular audio visualisation powered by JavaScript',

  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/2xaa/modV/' },
      {
        text: 'Version',
        items: [
          { text: 'v3', link: '/v3/guide/' },
          { text: 'v2', link: '/v2/guide/' },
        ]
      }
    ],

    sidebar: {
      '/v3/guide/': [
        {
          title: 'Guide',
          path: '/v3/guide/',
          collapsable: false,
          children: [
            '/v3/guide/',
            '/v3/guide/shortcuts',
            '/v3/guide/media',
            '/v3/guide/modules',
            '/v3/guide/groups',
            '/v3/guide/audioReactivity',
            '/v3/guide/inputLinks',
            '/v3/guide/tweens',
            '/v3/guide/expressions',
            '/v3/guide/writingA2dModule',
            '/v3/guide/writingAnIsfModule',
          ],
        },

        {
          title: 'Development',
          path: '/v3/development/'
        }
      ],


      '/v3/development/': [
        {
          title: 'Guide',
          path: '/v3/guide/'
        },
        {
          title: 'Development',
          path: '/v3/development/',
          collapsable: false,
          children: [
            '/v3/development/',
            '/v3/development/directives',
          ],
        },
      ],

      '/v2/': [
        {
          title: 'Guide',
          path: '/v2/guide/',
          collapsable: false,
          children: [
            '/v2/guide/',
            '/v2/guide/audioRouting',
            '/v2/guide/coreConcepts',
            '/v2/guide/mediaManager',
            '/v2/guide/usingTheExpressionEditor',
            '/v2/guide/writingA2DModule',
            '/v2/guide/writingAShaderModule',
            '/v2/guide/writingAnIsfModule',
          ],
        },
        {
          title: 'API Reference',
          path: '/v2/api/',
          collapsable: false,
          children: [
            '/v2/api/module',
            '/v2/api/renderer',
            '/v2/api/plugin',
            '/v2/api/control',
            '/v2/api/palette',
            '/v2/api/contextMenu',
            '/v2/api/mediaManager',
            '/v2/api/mediaManagerClient',
          ],
        },
      ],
    },
  },
};
