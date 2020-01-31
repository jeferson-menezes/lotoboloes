export default [
  {
    path: '/login',
    name: 'login',
    meta: { icon: 'fa-cogs', title: 'Login' },
    component: () => import(/* webpackChunkName: "login" */ './pages/Login.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    meta: { icon: 'sign-in-alt', title: 'SignIn' },
    component: () => import(/* webpackChunkName: "signin" */ './pages/Signin.vue')
  }
];
