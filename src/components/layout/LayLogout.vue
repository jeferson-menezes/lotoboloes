<template>
  <div>
    <mdb-nav-item @click="logout()" href="#" waves-fixed icon="sign-out-alt"></mdb-nav-item>
  </div>
</template>
<script>
import { mdbNavItem } from 'mdbvue';
import { mapActions } from 'vuex';
export default {
  name: 'LayLogout',
  components: {
    mdbNavItem
  },
  methods: {
    ...mapActions('auth', ['ActionLogout']),
    async logout () {
      await this.ActionLogout();

      this.$router.push({ name: 'login' });
    }
  }
};
</script>
