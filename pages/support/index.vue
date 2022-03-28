<template>
  <div id="id_botflix_area">
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content">
        <Header />
        <Leftsidebar />
        <ModalGuide />

        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-11 panel-page">
              <div class="support-panel-heading">
                <h3>Guide Tutorials</h3>
              </div>
              <div class="row support-panel-body ">
                <ul  class="postsList">
                  <a href="#" class="styles_item" v-b-modal.SupportModal1 >
                    <div class="styles_postContent">
                      <div class="styles_content-img ">
                        <img src="@/assets/images/icon-guide-1.svg" class="" width="90" height="75" />
                      </div>
                      <div class="styles_content-text ">
                        <p>วิธีการการยืนยันตัวตน</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="styles_item" v-b-modal.SupportModal2 >
                    <div class="styles_postContent">
                      <div class="styles_content-img ">
                        <img src="@/assets/images/icon-guide-3.svg" class="" width="90" height="75" />
                      </div>
                      <div class="styles_content-text ">
                        <p>วิธีการเติมงานซื้อแพ็กเกจ</p>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="styles_item" v-b-modal.SupportModal3>
                    <div class="styles_postContent">
                      <div class="styles_content-img ">
                        <img src="@/assets/images/icon-guide-2.svg" class="" width="90" height="75" />
                      </div>
                      <div class="styles_content-text ">
                        <p>ขั้นตอนการเปิดใช้งาน Robot</p>
                      </div>
                    </div>
                  </a>

                </ul>
              </div>

              


              <div class="support-panel-heading">
                <h3>Popular Articles</h3>
              </div>
              <div class="support-panel-body ">
                <div class="row">
                  <div class="col-3">
                    <a href="/support/faq-detail" class="">
                      <p>ใช้เวลาเท่าไหร่ในการยืนยันตัวตน</p>
                    </a>
                  </div>
                  <div class="col-3">
                    <a href="/support/faq-detail" class="">
                      <p>การอัพเดทแพ็คเกจ</p>
                    </a>
                  </div>
                  <div class="col-3">
                    <a href="/support/faq-detail" class="">
                      <p>บัญชี MT4/MT5</p>
                    </a>
                  </div>
                  <div class="col-3">
                    <a href="/support/faq-detail" class="">
                      <p>เปลี่ยนข้อมูลส่วนตัว</p>
                    </a></div>
                  <div class="col-3">
                    <a href="/support/faq-detail" class="">
                      <p>เปลี่ยนรหัสผ่าน</p>
                    </a></div>
                  <div class="col-3">
                    <a href="/support/faq-detail" class="">
                      <p>ไฟล์ MQL4 EA bot</p>
                    </a></div>
                  <div class="col-3">
                    <a href="/support/faq-detail" class="">
                      <p>จ่ายเงินแล้วไม่ได้รับของ</p>
                    </a></div>
                                      <div class="col-3">
                    <a href="/support/faq" class="">
                      <p>ดูทั้งหมด</p>
                    </a></div>
                </div>
              </div>

              <div class="support-panel-heading">
                <h3>Contact Support</h3>
              </div>
              <div class="row support-panel-body ">
                <ul class="postsList">
                  <a href="" class="styles_item">
                    <div class="styles_postContent">
                      <div class="styles_content-img ">
                        <img src="@/assets/images/icon-guide-4.svg" class="" width="100" height="80" />
                      </div>
                      <div class="styles_content-text ">
                        <p>Chat bot</p>
                      </div>
                    </div>
                  </a>
                  <a href="" class="styles_item">
                    <div class="styles_postContent">
                      <div class="styles_content-img ">
                        <img src="@/assets/images/icon-guide-5.svg" class="" width="100" height="80" />
                      </div>
                      <div class="styles_content-text ">
                        <p>Messaging</p>
                      </div>
                    </div>
                  </a>
                  <a href="" class="styles_item">
                    <div class="styles_postContent">
                      <div class="styles_content-img ">
                        <img src="@/assets/images/icon-guide-6.svg" class="" width="100" height="80" />
                      </div>
                      <div class="styles_content-text ">
                        <p>Cal center</p>
                      </div>
                    </div>
                  </a>
                </ul>
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
  import ModalGuide from '@/components/modal/supportmodal'
  export default {
    components: {
      Leftsidebar,
      Footer,
      Header,
      ModalGuide
    },

  }

</script>
<style>

</style>
