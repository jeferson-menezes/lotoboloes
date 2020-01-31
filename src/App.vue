<template>
  <div id="app">
    <quick-alert></quick-alert>

    <mdb-navbar
      position="top"
      dark
      color="success-color"
      class="darken-2"
      :toggler="false"
      v-if="isLogado()"
    >
      <mdb-navbar-nav left class="side-toggler">
        <mdb-nav-item href="#" waves-fixed>Loto bolões</mdb-nav-item>
      </mdb-navbar-nav>
      <mdb-navbar-nav class="nav-flex-icons">
        <mdb-nav-item
          href="#"
          v-for="(item, index) in routerLinks"
          :key="index"
          :to="item.path"
          :icon="item.meta.icon"
        >{{item.meta.title}}</mdb-nav-item>
      </mdb-navbar-nav>
      <mdb-navbar-nav class="nav-flex-icons" right>
        <mdb-nav-item href="#" waves-fixed icon="user-circle"></mdb-nav-item>
        <logout />
      </mdb-navbar-nav>
    </mdb-navbar>

    <router-view></router-view>
  </div>
</template>
<script>
import store from './store';
import { mdbNavbar, mdbNavItem, mdbNavbarNav } from 'mdbvue';
import QuickAlert from './components/shares/QuickAlert';
import Logout from './components/layout/Logout';

export default {
  name: 'App',
  data: () => ({
    toggle: false
  }),
  components: {
    Logout,
    QuickAlert,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav
  },
  computed: {
    routerLinks () {
      return this.$router.options.routes.filter(
        r => r.name !== 'login' && r.name !== 'signin'
      );
    }
  },
  methods: {
    isLogado () {
      return store.getters['auth/hasUid'];
    }
  }
};
</script>
