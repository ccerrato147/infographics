export default [
  {
    path: "/graphics/aislamiento-social/",
    component: () => import(/* webpackChunkName: "page--src-templates-graphic-vue" */ "C:\\Users\\eduar\\Documents\\axolotech\\infographics\\src\\templates\\Graphic.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\eduar\\Documents\\axolotech\\infographics\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\eduar\\Documents\\axolotech\\infographics\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\eduar\\Documents\\axolotech\\infographics\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

