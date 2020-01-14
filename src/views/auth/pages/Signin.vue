<template>
  <mdb-container class="special-color">
    <section class="my-5">
      <h2 class="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
      <mdb-row>
        <mdb-col lg="5" class="lg-0 mb-4">
          <mdb-card>
            <mdb-card-body>
              <div class="form-header blue-gradient">
                <h3 class="mt-2">
                  <mdb-icon icon="envelope" />Write to us:
                </h3>
              </div>
              <div class="md-form">
                <mdb-input
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div class="md-form">
                <mdb-input
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div class="md-form">
                <mdb-input
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div class="md-form">
                <mdb-textarea
                  icon="pencil"
                  label="Icon Prefix"
                  iconClass="grey-text"
                  id="form-text"
                />
              </div>
              <div class="text-center">
                <mdb-btn class="blue-gradient">Submit</mdb-btn>
              </div>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbIcon,
  mdbInput,
  mdbTextarea,
  mdbCard,
  mdbCardBody
} from 'mdbvue';

export default {
  name: 'Signin',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbIcon,
    mdbInput,
    mdbTextarea,
    mdbCard,
    mdbCardBody
  }
};
</script>
