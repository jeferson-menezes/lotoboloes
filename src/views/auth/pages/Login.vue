<template>
  <mdb-container>
    <div class="classic-form-page login mt-5">
      <mdb-mask>
        <mdb-container>
          <mdb-row>
            <mdb-col md="6" xl="5" class="mb-4 animated fadeInRight">
              <mdb-card id="classic-card">
                <mdb-card-body class="z-depth-2">
                  <form @submit.prevent="submit()">
                    <h3 class="text-center">Login</h3>
                    <hr class="hr-light" />
                    <mdb-input
                      label="Seu e-mail"
                      labelColor="gray"
                      icon="envelope"
                      v-model="form.email"
                    />
                    <mdb-input
                      label="Sua senha"
                      labelColor="gray"
                      icon="lock"
                      type="password"
                      v-model="form.password"
                    />
                    <div class="text-center mt-4 black-text">
                      <mdb-btn class="peach-gradient">Logar</mdb-btn>
                      <hr class="hr-light" />
                      <div class="text-center d-flex justify-content-center white-label">
                        <a class="p-2 m-2">
                          <mdb-icon fab icon="twitter" class="gray-text" />
                        </a>
                        <a class="p-2 m-2">
                          <mdb-icon fab icon="linkedin" class="gray-text" />
                        </a>
                        <a class="p-2 m-2">
                          <mdb-icon fab icon="instagram" class="gray-text" />
                        </a>
                      </div>
                    </div>
                  </form>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </mdb-mask>
    </div>
  </mdb-container>
</template>

<script>
import { mapActions } from 'vuex';

import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbMask,
  mdbBtn,
  mdbCard,
  mdbCardBody,
  mdbInput,
  mdbIcon
} from 'mdbvue';
import { trataErro } from '../../../helper/error';

export default {
  name: 'Login',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbMask,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbInput,
    mdbIcon
  },
  data: () => ({
    form: {
      name: undefined,
      email: undefined,
      password: undefined
    }
  }),
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    async submit () {
      try {
        await this.ActionDoLogin(this.form);

        this.$router.push({ name: 'home' });
      } catch (error) {
        console.log('Error login ', error);

        const { code } = error;

        this.$root.$emit('Notification::show', {
          tipo: 'danger',
          message: trataErro(code)
        });
      }
    }
  }
};
</script>

<style >
.login {
  background-image: url("../../../assets/images/undraw_sign_in_e6hj.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
  height: calc(50vh);
}
</style>
