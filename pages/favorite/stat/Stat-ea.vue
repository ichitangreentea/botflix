<template>
  <div id="id_botflix_area" class="">
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content ">
        <Header />
        <Leftsidebar />
        <div class="container-fluid bg-Stat-EA">
          <div class="row">
            <div class="col-lg-12 mt-lg-5">
              <div class="row" style="justify-content: center;">
                <div class="col-lg-4">
                  <div class="card card-Stat-EA">
                    <div class="card-body">
                      <div class="header-ea">
                        <h5>Metawise V.56
                          <span class="favorite-right"> <i class="fas fa-heart heart"></i>
                            <label>
                              <b-img center src="@/assets/images/icon-plus-user.png" fluid alt="Responsive Center image"
                                class=""></b-img> 12
                            </label>
                          </span>
                        </h5>
                        <div class="starEa">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star rating"></i>
                        </div>
                      </div>
                      <div class="stat-button ">
                        <nuxt-link to="#" class="btn btn-star gradient-left">
                          <div class="border-line"> AutoCopy </div>
                        </nuxt-link>
                        <nuxt-link to="#" class="btn btn-star gradient-right">
                          <div class="border-line-blue">Follow </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>

                  <div class="card card-body-Stat-EA">
                    <div class="card-body">
                      <div class="item-stat-completed">
                        <!--  -->
                        <div class="form-completed">
                          <label class="text-order">ระยะเวลาถือออเดอร์</label>
                          <div class="dot-score">
                            <i class="fas fa-circle color-green"></i>
                            <i class="fas fa-circle color-green"></i>
                            <i class="fas fa-circle color-gay"></i>
                            <i class="fas fa-circle color-gay"></i>
                            <i class="fas fa-circle color-gay"></i>
                          </div>
                          <div>2.2</div>
                        </div>
                        <!--  -->
                        <!--  -->
                        <div class="form-completed">
                          <label class="text-order">จำนวนการเทรด</label>
                          <div class="dot-score">
                            <i class="fas fa-circle color-green"></i>
                            <i class="fas fa-circle color-green"></i>
                            <i class="fas fa-circle color-green"></i>
                            <i class="fas fa-circle color-gay"></i>
                            <i class="fas fa-circle color-gay"></i>
                          </div>
                          <div>5 per Month</div>
                        </div>
                        <!--  -->
                        <!--  -->
                        <div class="form-completed">
                          <label class="text-order">Risk Return Ratio</label>
                          <div class="dot-score">
                            <i class="fas fa-circle color-green"></i>
                            <i class="fas fa-circle color-green"></i>
                            <i class="fas fa-circle color-green"></i>
                            <i class="fas fa-circle color-gay"></i>
                            <i class="fas fa-circle color-gay"></i>
                          </div>
                          <div>3.2</div>
                        </div>
                        <!--  -->
                        <!--  -->
                        <div class="form-completed">
                          <label class="text-order">Profit Factor</label>
                          <div class="dot-score">
                            <i class="fas fa-circle color-green"></i>
                            <i class="fas fa-circle color-green"></i>
                            <i class="fas fa-circle color-green"></i>
                            <i class="fas fa-circle color-green"></i>
                            <i class="fas fa-circle color-gay"></i>
                          </div>
                          <div>3.51</div>
                        </div>
                        <!--  -->
                        <!--  -->
                        <div class="form-completed">
                          <label class="text-order">% การชนะ</label>
                          <div class="dot-score">
                            <i class="fas fa-circle color-green"></i>
                            <i class="fas fa-circle color-green"></i>
                            <i class="fas fa-circle color-green"></i>
                            <i class="fas fa-circle color-green"></i>
                            <i class="fas fa-circle color-green"></i>
                          </div>
                          <div>95% (180/188)</div>
                        </div>
                        <!--  -->
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">

                  <!--  -->
                  <!--  -->

                  <!--  -->
                  <b-tabs>
                    <b-tab title="Discription" active>
                      <div v-for="i of itemstab" :key="i.id">
                        <div class="card-discription-stat-ea">

                          <div class="item-stat-completed">
                            <div class="form-completed"><label class="text-order">{{i.Name}}</label>
                              <div>{{i.Detail}}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-tab>
                    <b-tab title="Reviews">
                      <div class="card card-body-Stat-EA">
                        <div class="card-body">
                          <p>I'm the second tab</p>
                        </div>
                      </div>

                    </b-tab>

                  </b-tabs>
                  <!--  -->



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
      Header
    },
    data() {
      return {
        itemstab: [{
            id: 1,
            Name: "ชื่อ EA",
            Detail: "Metawise V.56",
          },
          {
            id: 2,
            Name: "ชื่อผู้ให้บริการ",
            Detail: "Botflix",
          },
          {
            id: 3,
            Name: "ประเภท",
            Detail: "Scalpping",
          },
          {
            id: 4,
            Name: "DD จากผลTest",
            Detail: "20 %",
          },
          {
            id: 5,
            Name: "DD ที่เกิดขึ้นจริง",
            Detail: "5 %",
          },
          {
            id: 6,
            Name: "Indicator ที่ใช้",
            Detail: "Bollinger Band, ATR",
          },
          {
            id: 7,
            Name: "หลักการคิด",
            Detail: "Break out - Trend follow",
          },
          {
            id: 8,
            Name: "ข้อแนะนำ",
            Detail: "EA ตัวนี้มีช่วงขาดทุน เมื่อตลาดเป็น Sideway",
          },

        ],

      }
    }
  }

</script>
<style scoped>


</style>
