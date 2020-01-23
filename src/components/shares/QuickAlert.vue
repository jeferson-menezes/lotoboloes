<template>
  <mdb-container v-show="show" zindex-modal>
    <mdb-alert
      class="zindex-modal"
      :color="tipo"
      dismiss
      enterAnimatrion="flipInX"
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
    show: true,
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
