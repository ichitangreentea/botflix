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
                  <div class="account_warning">
                    <p>
                      To open a demo trading account you must complete the form below nominating your trading platform,
                      account type, currency, leverage and initial deposit amount. Once complete an email with your demo
                      trading account login details will be automatically sent to you. Please remember to check your
                      email.
                    </p>
                  </div>
                  <div class="col-md-5 ">
                    <form>
                      <div class="form-group row">
                        <label for="static" class="col-sm-4 col-form-label">Platform :</label>
                        <div class="col-sm-8">
                          <select class=" form-select" id="exampleFormControlSelect1">
                            <option>Please select</option>
                            <option>MT4</option>
                            <option>MT5</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="static" class="col-sm-4 col-form-label">Account Type :</label>
                        <div class="col-sm-8">
                          <select class=" form-select" id="exampleFormControlSelect1">
                            <option>Standard Account</option>
                            <option>Raw Spread</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="static" class="col-sm-4 col-form-label">Currency: :</label>
                        <div class="col-sm-8">
                          <select class=" form-select" id="exampleFormControlSelect1">
                            <option>AUD</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>GBP</option>
                            <option>CHF</option>
                            <option>NZD</option>
                            <option>JPY</option>
                            <option>SGD</option>
                            <option>CAD</option>
                            <option>HKD</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="static" class="col-sm-4 col-form-label">Leverage :</label>
                        <div class="col-sm-8">
                          <select class=" form-select" id="exampleFormControlSelect1">
                            <option>1:500</option>
                            <option>1:1</option>

                          </select>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="static" class="col-sm-4 col-form-label">Initial Deposit :</label>
                        <div class="col-sm-8">
                          <select class=" form-select" id="exampleFormControlSelect1">
                            <option>0</option>
                            <option>200</option>
                            <option>400</option>
                            <option>600</option>
                            <option>800</option>
                            <option>1000</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group account-btn row">
                        <label for="static" class="col-sm-4 col-form-label"></label>
                        <div class="col-sm-8">
                          <button type="submit" class="btn btn-sub">Submit <i class="fas fa-arrow-right"></i> </button>

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



</style>
