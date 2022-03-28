<template>
  <div id="id_botflix_area">
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content">
        <Header />
        <Leftsidebar />
        <div class="container-fluid">
          <div class="row">
            <div id="id_botflix_shop" class="col-lg-12 panel-page">
              <div class="shop-panel-heading">
                <h3>SHOP</h3>
              </div>
              <div class="row" style="justify-content: center;">
                <div class="col-lg-10">
                  <div class="row">
                    <div class="col-lg-4">
                      <b-img src="@/assets/images/img-shop-1.png" fluid alt="Responsive image"></b-img>
                      <div class="btn-text">
                        <a href="#" class="btn btn-Shop-1" role="button">1 Coupon</a>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <b-img src="@/assets/images/img-shop-2.png" fluid alt="Responsive image"></b-img>
                      <div class="btn-text">
                        <a href="#" class="btn btn-Shop-2" role="button">BUY NOW</a>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <b-img src="@/assets/images/img-shop-3.png" fluid alt="Responsive image"></b-img>
                      <div class="btn-text">
                        <a href="#" class="btn btn-Shop-3" role="button">BUY NOW</a>
                      </div>
                    </div>
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

<style>

</style>
