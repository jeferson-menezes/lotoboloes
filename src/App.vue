<template>
  <div id="app">
    <!--Navbar-->
    <mdb-navbar position="top" dark color="primary" scrolling>
      <mdb-navbar-brand href="#">Your Logo</mdb-navbar-brand>
      <mdb-navbar-nav center>
        <mdb-nav-item href="#" icon="code-branch" waves-fixed>Home</mdb-nav-item>
        <mdb-nav-item href="#" icon="google-plus-g" waves-fixed>Features</mdb-nav-item>
        <mdb-nav-item href="#" icon="code-branch" waves-fixed>Pricing</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar>
    <!-- Navbar-->
    <router-view></router-view>
  </div>
</template>
<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarBrand
} from 'mdbvue';

export default {
  name: 'App',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarBrand
  }
};
</script>
