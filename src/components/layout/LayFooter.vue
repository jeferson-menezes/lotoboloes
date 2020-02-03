<template>
  <!-- Footer -->
  <mdb-footer color="indigo" class="font-small pt-0">
    <mdb-container>
      <mdb-row>
        <mdb-col md="12">
          <div class="mb-5 flex-center">
            <a class="gplus-ic">
              <i class="fab fa-google-plus fa-lg white-text mr-md-4"></i>
            </a>
            <a class="li-ic">
              <i class="fab fa-linkedin-in fa-lg white-text mr-md-4"></i>
            </a>
            <a class="ins-ic">
              <i class="fab fa-instagram fa-lg white-text mr-md-4"></i>
            </a>
            <a class="pin-ic">
              <i class="fab fa-pinterest fa-lg white-text"></i>
            </a>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright:
        <a href="https://www.MDBootstrap.com">Jeferson Menezes</a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
export default {
  name: 'LayFooter',
  components: {
    mdbContainer,
    mdbFooter,
    mdbRow,
    mdbCol
  }
};
</script>
<style >
.page-footer {
  position: fixed;
  width: 100%;
}
</style>
