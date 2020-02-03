<template>
  <mdb-navbar
    dark
    color="success-color"
    class="darken-2"
    :toggler="false"
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
      <lay-logout />
    </mdb-navbar-nav>
  </mdb-navbar>
</template>

<script>
import LayLogout from './LayLogout';
import { mdbNavbar, mdbNavItem, mdbNavbarNav } from 'mdbvue';

export default {
  name: 'LayNavbar',
  data: () => ({
    toggle: false
  }),
  components: {
    LayLogout,
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
  }
};
</script>
