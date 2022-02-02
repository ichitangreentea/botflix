<template>
  <div id="id_botflix_area">
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content">
        <Header />
        <Leftsidebar />
        <!-- sidebar-wrapper  -->
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 panel-page">
              <div class="row">
                <div class="col-lg-9 ">
                  <h5>Bot EA</h5>
                  <!--  -->
                  <BotEa />
                  <!--  -->
                </div>
                <div class="col-lg-3">
                  <PopularRight />
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- page-content" -->
      </main>
    </div>
  </div>
</template>
<script>
  import Leftsidebar from '@/components/nav-slide'
  import Header from '@/components/header'
  import PopularRight from '@/components/Popular_articles/ea-popular-posts'
  import BotEa from '@/components/bot/BotEa'
  export default {
    components: {
      Leftsidebar,
      Header,
      PopularRight,
      BotEa
    },
  }

</script>
