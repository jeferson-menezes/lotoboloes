<template>
  <mdb-container  class="fixed-top" v-show="show" zindex-modal>
    <mdb-alert
      class="zindex-modal"
      :color="tipo"
      dismiss
      enterAnimatrion="flipInX"
      @closeAlert="show = false"
    >{{ message }}</mdb-alert>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbAlert } from 'mdbvue';

export default {
  name: 'QuickAlert',
  components: {
    mdbAlert,
    mdbContainer
  },
  data: () => ({
    show: false,
    message: '',
    tipo: 'danger'
  }),
  created () {
    this.$root.$on('Notification::show', payload => {
      this.show = true;
      this.tipo = payload.tipo;
      this.message = payload.message;

      setTimeout(() => {
        this.close();
      }, payload.tipeout || 5000);
    });
  },
  methods: {
    close () {
      this.message = '';
      this.type = 'danger';
      this.show = false;
    }
  }
};
</script>
