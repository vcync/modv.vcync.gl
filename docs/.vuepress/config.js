module.exports = {
  evergreen: true,
  serviceWorker: false,

  title: "modV",
  description: "modular audio visualisation powered by JavaScript",

  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    [
      "meta",
      {
        name: "keywords",
        content: "vj software, audio visualiser, open source, vj",
      },
    ],
  ],

  themeConfig: {
    docsRepo: "vcync/modv.vcync.gl",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "Help us improve this page",

    nav: [
      { text: "Patreon", link: "https://patreon.com/vcync" },
      { text: "Forum", link: "https://github.com/vcync/modV/discussions" },
      { text: "GitHub", link: "https://github.com/2xaa/modV" },
      {
        text: "Version",
        items: [
          { text: "v3", link: "/v3/learn/" },
          { text: "v2", link: "/v2/guide/" },
        ],
      },
    ],

    sidebar: {
      "/v3/learn/": [
        {
          title: "Learn",
          path: "/v3/learn/",
          collapsable: false,
          children: [
            "/v3/learn/",
            "/v3/learn/video-tutorials",
            "/v3/learn/writingA2dModule",
            "/v3/learn/writingAnIsfModule",
          ],
        },

        {
          title: "Documentation",
          path: "/v3/documentation/shortcuts",
        },

        {
          title: "Development",
          path: "/v3/development/",
        },
      ],

      "/v3/documentation/": [
        {
          title: "Learn",
          path: "/v3/learn/",
        },

        {
          title: "Documentation",
          path: "/v3/documentation/shortcuts",
          collapsable: false,
          children: [
            "/v3/documentation/shortcuts",
            "/v3/documentation/modules",
            "/v3/documentation/groups",
            "/v3/documentation/media",
            "/v3/documentation/audioReactivity",
            "/v3/documentation/inputLinks",
            "/v3/documentation/tweens",
            "/v3/documentation/expressions",
          ],
        },

        {
          title: "Development",
          path: "/v3/development/",
        },
      ],

      "/v3/development/": [
        {
          title: "Learn",
          path: "/v3/learn/",
        },

        {
          title: "Documentation",
          path: "/v3/documentation/shortcuts",
        },

        {
          title: "Development",
          path: "/v3/development/",
          collapsable: false,
          children: ["/v3/development/", "/v3/development/directives"],
        },
      ],

      "/v2/": [
        {
          title: "Guide",
          path: "/v2/guide/",
          collapsable: false,
          children: [
            "/v2/guide/",
            "/v2/guide/audioRouting",
            "/v2/guide/coreConcepts",
            "/v2/guide/mediaManager",
            "/v2/guide/usingTheExpressionEditor",
            "/v2/guide/writingA2DModule",
            "/v2/guide/writingAShaderModule",
            "/v2/guide/writingAnIsfModule",
          ],
        },
        {
          title: "API Reference",
          path: "/v2/api/",
          collapsable: false,
          children: [
            "/v2/api/module",
            "/v2/api/renderer",
            "/v2/api/plugin",
            "/v2/api/control",
            "/v2/api/palette",
            "/v2/api/contextMenu",
            "/v2/api/mediaManager",
            "/v2/api/mediaManagerClient",
          ],
        },
      ],
    },
  },
};
