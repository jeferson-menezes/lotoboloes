export default [
  {
    path: '/',
    name: 'home',
    meta: { icon: 'eye', title: 'Home' },
    component: () => import(/* webpackChunkName: "home" */ './pages/Home.vue')
  }
];
