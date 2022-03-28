<template>
  <div id="id_botflix_promotion">
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content">
        <Header />
        <Leftsidebar />
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 promotion-panel">
              <div class="promotion__panel-heading">
                <h3>CHOOSE YOUR PLAN</h3>
              </div>
              <div class="row">
                <div class="col-lg-3 rerow">
                      <b-img src="@/assets/images/img-promotion-choose-1.png" fluid alt="Responsive image"></b-img>
                        <a href="#" class="btn-footer  text-footer" role="button">BUY NOW</a>

                </div>
                <div class="col-lg-3 rerow">
                      <b-img src="@/assets/images/img-promotion-choose-2.png" fluid alt="Responsive image"></b-img>
                        <a href="#" class="btn-footer  text-footer" role="button">BUY NOW</a>
                </div>
                <div class="col-lg-3 rerow">
                      <b-img src="@/assets/images/img-promotion-choose-3.png" fluid alt="Responsive image"></b-img>
                        <a href="#" class="btn-footer  text-footer" role="button">BUY NOW</a>
                </div>
                <div class="col-lg-3 rerow">
                   <b-img src="@/assets/images/img-promotion-choose-4.png" fluid alt="Responsive image"></b-img>
                        <a href="#" class="btn-footer  text-footer" role="button">BUY NOW</a>
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
      Header,
      Footer,
    },

  }

</script>

<style>

</style>
