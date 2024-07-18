import { defineClientConfig } from '@vuepress/client'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { MTable } from 'el-table-jsx'

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus)
    app.component('MTable', MTable)
  },
  setup() {},
  rootComponents: [],
})
