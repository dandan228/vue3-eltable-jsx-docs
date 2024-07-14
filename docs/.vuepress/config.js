import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: "/vue3-eltable-jsx-docs/",
  lang: 'en-US',

  title: 'el-table-jsx文档',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: [
      {
        text: '指南',
        link: "/guide/README.md",
      },
      {
        text: '组件',
        link: '/components/README.md'
      }
    ],
    sidebar: {
      "/guide/": [
        // {
        //   text: '为什么用el-table-jsx',
        //   link: 'reason/README.md',
        // },
        {
          text: '使用方法',
          link: 'use/README.md',
        },
      ],
      "/components/": [
        {
          text: 'MTable',
          link: 'MTable/README.md',
        },
        {
          text: 'Table',
          link: 'Table/README.md',
        },
        {
          text: 'Form',
          link: 'Form/README.md',
        },
        {
          text: 'Pageinate',
          link: 'Pageinate/README.md',
        },
        {
          text: 'Dialog',
          link: 'Dialog/README.md',
        },
        {
          text: 'Descriptions',
          link: 'Descriptions/README.md',
        },
        {
          text: 'Tooltip',
          link: 'Tooltip/README.md',
        },
      ],
    },
    markdown: {
      extendMarkdown: md => {
        md.use(require("markdown-it-disable-url-encode"));
      }
    }
  }),

  plugins: ['demo-container-v2'],

  bundler: viteBundler(),
})
