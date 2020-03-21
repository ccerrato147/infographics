export default [
  {
    path: "/projects/sunk/",
    component: () => import(/* webpackChunkName: "page--src-templates-project-post-vue" */ "C:\\Users\\eduar\\Documents\\axolotech\\infographics\\src\\templates\\ProjectPost.vue")
  },
  {
    path: "/projects/ios-concept/",
    component: () => import(/* webpackChunkName: "page--src-templates-project-post-vue" */ "C:\\Users\\eduar\\Documents\\axolotech\\infographics\\src\\templates\\ProjectPost.vue")
  },
  {
    path: "/projects/3d-graff/",
    component: () => import(/* webpackChunkName: "page--src-templates-project-post-vue" */ "C:\\Users\\eduar\\Documents\\axolotech\\infographics\\src\\templates\\ProjectPost.vue")
  },
  {
    path: "/contact/",
    component: () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "C:\\Users\\eduar\\Documents\\axolotech\\infographics\\src\\pages\\Contact.vue")
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

