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
                <div class="col-lg-12 accout-panel-body">
                  <h5>Accout</h5>
                  <BotAcc />
                </div>
                <div class="col-lg-12 section-management">
                  <div class="row">
                    <div class="col-lg-9">
                      <h5>Bot EA</h5>
                      <div class="add-account">
                        <b-link href="/openAccount" class="btn btn-md edit-profile"><i class="fas fa-plus-circle"></i> Add Account</b-link>
                      </div>
                      <!--  -->
                      <BotManage />
                      <!--  -->
                    </div>
                    <div class="col-lg-3">
                      <PopularRight />
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
  import PopularRight from '@/components/Popular_articles/ea-popular-posts'
  import BotManage from '@/components/managebot/BotEa_Manage'
  import BotAcc from '@/components/managebot/account'

  export default {
    components: {
      Leftsidebar,
      Footer,
      Header,
      PopularRight,
      BotManage,
      BotAcc,
    },
  }

</script>

<style>

</style>
