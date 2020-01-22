<template>
  <mdb-container>
    <div class="signin">
      <section class="my-5">
        <h2 class="h1-responsive text-center my-5">LOTO BOLÕES</h2>
        <mdb-row>
          <mdb-col lg="5" class="lg-0 mb-4 animated fadeInLeft">
            <mdb-card>
              <mdb-card-body>
                <form @submit.prevent="doSignin()">
                  <div class="form-header blue-gradient">
                    <h3 class="mt-2">cadastrar</h3>
                  </div>
                  <div class="md-form">
                    <mdb-input
                      icon="user"
                      label="Seu nome"
                      iconClass="grey-text"
                      type="text"
                      v-model="form.name"
                    />
                  </div>
                  <div class="md-form">
                    <mdb-input
                      label="Seu e-mail"
                      iconClass="grey-text"
                      type="text"
                      icon="envelope"
                      v-model="form.email"
                    />
                  </div>
                  <div class="md-form">
                    <mdb-input
                      label="Sua senha"
                      labelColor="gray"
                      icon="lock"
                      iconClass="grey-text"
                      type="password"
                      v-model="form.password"
                    />
                  </div>
                  <div class="md-form">
                    <mdb-input
                      label="Repita a senha"
                      labelColor="gray"
                      icon="user-lock"
                      iconClass="grey-text"
                      type="password"
                      v-model="form.password2"
                    />
                  </div>
                  <div class="text-center">
                    <mdb-btn class="blue-gradient">Submit</mdb-btn>
                    <hr class="hr-light" />
                    <div class="text-center white-label">
                      <a class="p-2 m-2">
                        <mdb-icon fab icon="facebook-f" class="gray-text" />
                        <small>cadastrar com facebook</small>
                      </a>
                      <br />
                      <a class="p-2 m-2">
                        <mdb-icon fab icon="envelope-open" class="gray-text" />
                        <small>cadastrar com gmail</small>
                      </a>
                    </div>
                  </div>
                </form>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </div>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbInput,
  mdbCard,
  mdbCardBody,
  mdbIcon
} from 'mdbvue';
import { mapActions } from 'vuex';
import { Login } from '../../../model/Login';

export default {
  name: 'Signin',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbInput,
    mdbCard,
    mdbCardBody,
    mdbIcon
  },
  data: () => ({
    form: {
      name: undefined,
      email: undefined,
      password: undefined,
      password2: undefined
    }
  }),
  methods: {
    ...mapActions('auth', ['ActionDoSignin']),
    async doSignin () {
      if (this.password !== this.password2) {
        console.error('Senhas diferentes');
        return;
      }

      const { email, password } = this.form;

      const login = new Login(email, password);

      try {
        const res = await this.ActionDoSignin(login);

        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
<style>
.signin {
  background-image: url("../../../assets/images/undraw_treasure_of9i.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right top;
  height: calc(50vh);
}
</style>
