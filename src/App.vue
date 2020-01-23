<template>
  <div id="app">
    <!--Navbar-->
    <!-- <mdb-navbar position="top" dark color="primary" scrolling>
      <mdb-navbar-brand href="#">Your Logo</mdb-navbar-brand>
      <mdb-navbar-nav center>
        <mdb-nav-item href="#" icon="code-branch" waves-fixed>Home</mdb-nav-item>
        <mdb-nav-item href="#" icon="google-plus-g" waves-fixed>Features</mdb-nav-item>
        <mdb-nav-item href="#" icon="code-branch" waves-fixed>Pricing</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar>-->
    <!-- Navbar-->
    <!--Navbar-->
    <quick-alert></quick-alert>

    <nav class="navbar navbar-expand-lg navbar-dark teal">
      <div class="container">
        <!-- Collapse button -->
        <button
          class="navbar-toggler float-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Collapsible content -->
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <!-- Links -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <!-- Links -->
        </div>
        <!-- CTA -->
      </div>
    </nav>
    <!--/.Navbar-->
    <router-view></router-view>
  </div>
</template>
<script>
// import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarBrand } from 'mdbvue';
import QuickAlert from './components/shares/QuickAlert';

export default {
  name: 'App',
  components: {
    QuickAlert
  }
};
</script>
