import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: "/vue3-eltable-jsx-docs/",
  lang: 'en-US',

  title: 'vue3-eltable-jsx-docs',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: [],
    sidebar: [
      {
        text: 'MTable',
        link: '/components/MTable/README.md',
      },
      {
        text: 'Table',
        link: '/components/Table/README.md',
      },
    ],
  }),

  bundler: viteBundler(),
})
