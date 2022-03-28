<template>
  <div id="id_botflix_area">
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content">
        <Header />
        <Leftsidebar />
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 panel-page">
              <div class="row">
                <div class="account-content">
                  <div class="title-account">
                    <h3><i class="fas fa-list"></i> Open A New Account</h3>
                  </div>
                  <div class="col-md-6 mt-4">
                    <form>
                      <div class="form-group row">
                        <label for="static" class="col-sm-5 col-form-label">Withdrawal Method :</label>
                        <div class="col-sm-7">
                          <select class=" form-select" id="exampleFormControlSelect1">
                            <option>China Union Pay Details</option>
                            <option>Bank Details</option>
                            <option>Thai Internet Banking Details</option>
                            <option>Vietnamese Internet Banking Details</option>
                            <option>PlusDebit THB</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="static" class="col-sm-5 col-form-label">Beneficiary Name :</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control text" id="fname" name="fname">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="static" class="col-sm-5 col-form-label">Bank account number :</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control text" id="fname" name="fname">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="static" class="col-sm-5 col-form-label">Bank Name :</label>
                        <div class="col-sm-7">
                                        <select class=" form-select" id="exampleFormControlSelect1">
                <option>BANGKOK BANK</option>
                <option>BANK OF AYUDHYA</option>
                <option>KASIKORNBANK</option>
                <option>TMB BANK</option>
                <option>SIAM COMMERCIAL BANK</option>

              </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="static" class="col-sm-5 col-form-label">Bank Branch :</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control text" id="fname" name="fname">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="static" class="col-sm-5 col-form-label">Province :</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control text" id="fname" name="fname">
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="static" class="col-sm-5 col-form-label">City :</label>
                        <div class="col-sm-7">
                          <input type="text" class="form-control text" id="fname" name="fname">
                        </div>
                      </div>

                      <div class="form-group account-btn row">
                        <label for="static" class="col-sm-5 col-form-label"></label>
                        <div class="col-sm-7">
                          <button type="submit" class="btn btn-sub">SAVE  </button>

                        </div>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  </div>
</template>



<script>
  import Leftsidebar from '@/components/nav-slide'
  import Header from '@/components/header'
  import Footer from '@/components/footer'
  export default {
    components: {
      Leftsidebar,
      Footer,
      Header,
    },

  }

</script>
<style scoped>
  input.text {
    height: 38px;
    border-radius: 0;
    border: solid 1px rgba(0, 0, 0, 0.2);
    line-height: 34px;
    font-size: 12px;
    min-width: 60px;
    margin-bottom: 5px;
  }

</style>
