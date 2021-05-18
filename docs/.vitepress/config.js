const buildNavChildren = (name) => ({
  text: name,
  link: `/components/${name}/index`,
});

const sidebar = [
  {
    text: "介绍",
    link: "/guide",
  },
  {
    text: "基础组件",
    children: [
      // process.env.NODE_ENV === 'production'
      "Test", // 测试
      "Barrage",
    ].map(buildNavChildren),
  },

  {
    text: "展示组件",
    children: [
      //
      "Skeleton",
    ].map(buildNavChildren),
  },
  // {
  //   text: "表单组件",
  //   children: ["Input"].map(buildNavChildren),
  // },
];

module.exports = {
  lang: "zh-CN",
  title: "v-tricks",
  description: "组件库",
  base: "/v-tricks/",
  themeConfig: {
    logo: "/logo.svg",
    docsDir: "docs",

    editLinks: false,
    editLinkText: "在Github上编辑此页面",

    editLinks: false,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "最近更新",

    algolia: {
      apiKey: "c57105e511faa5558547599f120ceeba", // TODO
      indexName: "vitepress",
    },

    nav: [
      { text: "首页", link: "/" },
      { text: "介绍", link: "/guide" },
      { text: "组件", link: "/components/Skeleton/" },
      {
        text: "更新日志",
        link: "https://github.com/imjeen/v-tricks/blob/master/CHANGELOG.md",
      },
      { text: "GitHub", link: "https://github.com/imjeen/v-tricks" },
    ],
    sidebar,
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      // use more markdown-it plugins
      // md.use(require('markdown-it-xxx'))
      md.use(require("markdown-it-vuese"));
      const { demoBlock, demoCode } = require("./plugins/md-loader");
      demoBlock(md);
      demoCode(md); // 代码高亮的语言默认为vue，可传入第二个参数自定义语言 demoCode(md, 'html')
    },
  },
};
