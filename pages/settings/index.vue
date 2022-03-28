<template>
  <div id="id_botflix_area">
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content">
        <Header />
        <Leftsidebar />
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 panel-page">
              <div class="settings_tab">
                <b-card no-body>
                  <b-tabs card>
                    <b-tab title="ข้อมูลส่วนบุคคล" active>
                      <TabSetting1 />
                    </b-tab>
                    <b-tab title="ความปลอดภัย" class="Set-notificat">
                      <TabSetting2 />
                    </b-tab>
                    <b-tab title="MetaTrader 4 / MetaTrader 5">
                      <TabSetting3 />
                    </b-tab>
                    <b-tab title="แพ็กเกจปัจจุบัน">
                      <TabSetting4 />
                    </b-tab>
                    <b-tab title="การตั้งค่าการแจ้งเตือน" class="Set-notificat">
                      <TabSetting5 />
                    </b-tab>
                  </b-tabs>
                </b-card>
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
  import TabSetting1 from '@/components/tab_setting/tab1'
  import TabSetting2 from '@/components/tab_setting/tab2'
  import TabSetting3 from '@/components/tab_setting/tab3'
  import TabSetting4 from '@/components/tab_setting/tab4'
  import TabSetting5 from '@/components/tab_setting/tab5'
  import MT4 from '@/components/MetaTrader/mt4'
  import MT5 from '@/components/MetaTrader/mt5'
  export default {
    components: {
      Leftsidebar,
      Footer,
      Header,
      TabSetting1,
      TabSetting2,
      TabSetting3,
      TabSetting4,
      TabSetting5,
      MT4,
      MT5,
    },

  }

</script>
<style scoped>



</style>
