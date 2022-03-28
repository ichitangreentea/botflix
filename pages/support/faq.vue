<template>
  <div id="id_botflix_area">
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content">
        <Header />
        <Leftsidebar />

        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 panel-page">

              <div class="faq-panel-heading">
                <h3>FAQ General</h3>
              </div>

              <div class="section-tree">
                <section class="section">
                  <ul>
                    <li class="article-list-item ">
                      <span data-title="บทความที่โปรโมท"><i class="fas fa-star"></i></span> 
                      <a href="/support/faq-detail" class="article-list-link">ใช้เวลาเท่าไหร่ในการยืนยันตัวตน</a>
                    </li>
                    <li class="article-list-item ">
                      <span data-title="การอัพเดทแพ็คเกจ"><i class="fas fa-star"></i></span> 
                      <a href="/support/faq-detail" class="article-list-link">การอัพเดทแพ็คเกจ</a>
                    </li>
                    <li class="article-list-item ">
                      <a href="/support/faq-detail" class="article-list-link">บัญชี MT4/MT5</a>
                    </li>
                    <li class="article-list-item ">
                      <a href="/support/faq-detail" class="article-list-link">เปลี่ยนข้อมูลส่วนตัว</a>
                    </li>
                    <li class="article-list-item ">
                      <a href="/support/faq-detail" class="article-list-link">เปลี่ยนรหัสผ่าน</a>
                    </li>
                    <li class="article-list-item ">
                      <a href="/support/faq-detail" class="article-list-link">ไฟล์ MQL4 EA bot</a>
                    </li>
                    <li class="article-list-item ">
                      <a href="/support/faq-detail" class="article-list-link">จ่ายเงินแล้วไม่ได้รับของ</a>
                    </li>

                  </ul>
                </section>
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
