export default [
  {
    path: '/',
    name: 'home',
    meta: { icon: 'home', title: 'Home' },
    component: () => import(/* webpackChunkName: "home" */ './pages/Home.vue')
  }
];
