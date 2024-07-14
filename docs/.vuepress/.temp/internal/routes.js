export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"111222"} }],
  ["/components/MTable/", { loader: () => import(/* webpackChunkName: "components_MTable_index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx-docs/docs/.vuepress/.temp/pages/components/MTable/index.html.js"), meta: {"title":"table"} }],
  ["/components/Table/", { loader: () => import(/* webpackChunkName: "components_Table_index.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx-docs/docs/.vuepress/.temp/pages/components/Table/index.html.js"), meta: {"title":"Mtable"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/User/Desktop/table-jsx/vue3-eltable-jsx-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
