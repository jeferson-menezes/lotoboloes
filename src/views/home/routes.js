export default [
  {
    path: '/',
    name: 'home',
    meta: { icon: 'fa-cogs', title: 'Login' },
    component: () => import(/* webpackChunkName: "home" */ './pages/Home.vue')
  }
];
