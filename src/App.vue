<template>
  <div id="app">
    <quick-alert></quick-alert>

    <lay-navbar></lay-navbar>

    <mdb-container fluid>
      <router-view></router-view>
    </mdb-container>

    <lay-footer></lay-footer>
  </div>
</template>
<script>
import store from './store';

import QuickAlert from './components/shares/QuickAlert';
import LayFooter from './components/layout/LayFooter';
import LayNavbar from './components/layout/LayNavbar';

import { mdbContainer } from 'mdbvue';

export default {
  name: 'App',
  data: () => ({
    toggle: false
  }),
  components: {
    LayFooter,
    QuickAlert,
    LayNavbar,
    mdbContainer
  },
  methods: {
    isLogado () {
      return store.getters['auth/hasUid'];
    }
  }
};
</script>
