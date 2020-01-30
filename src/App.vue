<template>
  <div id="app">
    <quick-alert></quick-alert>

    <mdb-navbar position="top" dark color="success-color" class="darken-2" :toggler="false" v-if="isLogado()">
      <mdb-navbar-nav class="nav-flex-icons" center>
        <mdb-nav-item href="#" waves-fixed v-for="(item, index) in routerLinks" :key="index" :to="item.path" :icon="item.meta.icon">{{item.meta.title}}</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar>

    <router-view></router-view>
  </div>
</template>
<script>
import store from './store';
import { mdbNavbar, mdbNavItem, mdbNavbarNav } from 'mdbvue';
import QuickAlert from './components/shares/QuickAlert';
import {} from 'vuex';

export default {
  name: 'App',
  data: () => ({
    toggle: false
  }),
  components: {
    QuickAlert,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav
  },
  computed: {
    routerLinks () {
      return this.$router.options.routes.filter(r => r.name !== 'login');
    }
  },
  methods: {
    isLogado () {
      return store.getters['auth/hasUid'];
    }
  }
};
</script>
