<template>
  <div id="id_botflix_area">
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content">
        <Header />
        <Leftsidebar />
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-11 panel-page">
              <div class="support-panel-heading">
                <h3>Guide Tutorials</h3>
              </div>
              <div class="row support-panel-body ">
                <ul class="postsList">
                  <a href="#" class="styles_item">
                    <div class="styles_postContent">
                      <div class="styles_content-img ">
                        <img src="@/assets/images/icon-guide-1.svg" class="" width="100" height="80" />
                      </div>
                      <div class="styles_content-text ">
                        <p>การยืนยันตัวตน</p>
                      </div>
                    </div>
                  </a>
                  <a href="" class="styles_item">
                    <div class="styles_postContent">
                      <div class="styles_content-img ">
                        <img src="@/assets/images/icon-guide-2.svg" class="" width="100" height="80" />
                      </div>
                      <div class="styles_content-text ">
                        <p>การใช้งาน EA bot</p>
                      </div>
                    </div>
                  </a>
                  <a href="" class="styles_item">
                    <div class="styles_postContent">
                      <div class="styles_content-img ">
                        <img src="@/assets/images/icon-guide-3.svg" class="" width="100" height="80" />
                      </div>
                      <div class="styles_content-text ">
                        <p>ขั้นตอนการจ่ายเงิน</p>
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
                    <a href="#" class="">
                      <p>ใช้เวลาเท่าไหร่ในการยืนยันตัวตน</p>
                    </a>
                  </div>
                  <div class="col-3">
                    <a href="#" class="">
                      <p>การอัพเดทแพ็คเกจ</p>
                    </a>
                  </div>
                  <div class="col-3">
                    <a href="#" class="">
                      <p>บัญชี MT4/MT5</p>
                    </a>
                    </div>
                  <div class="col-3">
                    <a href="#" class="">
                      <p>เปลี่ยนข้อมูลส่วนตัว</p>
                    </a></div>
                  <div class="col-3">
                    <a href="#" class="">
                      <p>เปลี่ยนรหัสผ่าน</p>
                    </a></div>
                  <div class="col-3">
                    <a href="#" class="">
                      <p>ไฟล์ MQL4 EA bot</p>
                    </a></div>
                  <div class="col-3">
                    <a href="#" class="">
                      <p>จ่ายเงินแล้วไม่ได้รับของ</p>
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
      </main>
    </div>
  </div>
</template>


<script>
  import Leftsidebar from '@/components/nav-slide'
  import Header from '@/components/header'
  export default {
    components: {
      Leftsidebar,
      Header,
    },

  }

</script>
<style>

</style>
