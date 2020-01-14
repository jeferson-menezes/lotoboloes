<template>
  <div class="classic-form-page">
    <view-wrapper>
      <mdb-mask class="d-flex gradient justify-content-center align-items-center">
        <mdb-container>
          <mdb-row>
            <mdb-col md="6" xl="5" class="mb-4 animated fadeInRight">
              <mdb-card id="classic-card">
                <mdb-card-body class="z-depth-2 white-text">
                  <h3 class="text-center">
                    <mdb-icon icon="user" />Register:
                  </h3>
                  <hr class="hr-light" />
                  <mdb-input label="Your name" labelColor="white" icon="user" />
                  <mdb-input label="Your email" labelColor="white" icon="envelope" />
                  <mdb-input label="Your password" labelColor="white" icon="lock" type="password" />
                  <div class="text-center mt-4 black-text">
                    <mdb-btn color="indigo">Sign Up</mdb-btn>
                    <hr class="hr-light" />
                    <div class="text-center d-flex justify-content-center white-label">
                      <a class="p-2 m-2">
                        <mdb-icon fab icon="twitter" class="white-text" />
                      </a>
                      <a class="p-2 m-2">
                        <mdb-icon fab icon="linkedin" class="white-text" />
                      </a>
                      <a class="p-2 m-2">
                        <mdb-icon fab icon="instagram" class="white-text" />
                      </a>
                    </div>
                  </div>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </mdb-mask>
    </view-wrapper>
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  ViewWrapper,
  mdbMask,
  mdbBtn,
  mdbCard,
  mdbCardBody,
  mdbInput,
  mdbIcon
} from 'mdbvue';

export default {
  name: 'Login',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    ViewWrapper,
    mdbMask,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbInput,
    mdbIcon
  }
};
</script>
