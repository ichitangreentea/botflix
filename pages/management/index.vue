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
                  <ul class="accoutEA">
                    <div class="accoutList">
                      <li class="styles_item-accout">
                        <div class="styles_postContent">
                          <p class="text-name">Jos sorost</p>
                          <p class="text-price ">340 $</p>
                          <p class="text-status text-success"><i class="fas fa-caret-up"></i> 50,2%</p>
                          <p class="text-user">Peeratat</p>
                        </div>
                        <div class="accout-circle-up"></div>
                      </li>
                    </div>
                    <div class="accoutList">
                      <li class="styles_item-accout">
                        <div class="styles_postContent">
                          <p class="text-name">Jos sorost</p>
                          <p class="text-price ">340 $</p>
                          <p class="text-status text-danger"><i class="fas fa-caret-down"></i> 10%</p>
                          <p class="text-user">Peeratat</p>
                        </div>
                        <div class="accout-circle-down"></div>
                      </li>
                    </div>
                  </ul>
                </div>
                <div class="col-lg-12 section-management">
                  <div class="row">
                    <div class="col-lg-9">
                      <h5>Bot EA</h5>
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
      </main>
    </div>
  </div>
</template>

<script>
  import Leftsidebar from '@/components/nav-slide'
  import Header from '@/components/header'
  import PopularRight from '@/components/Popular_articles/ea-popular-posts'
  import BotManage from '@/components/bot/BotEa_Manage'

  export default {
    components: {
      Leftsidebar,
      Header,
      PopularRight,
      BotManage
    },
  }

</script>

<style>

</style>
