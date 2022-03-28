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


                <p>
                  Expert Advisors (EA Forex) หรือที่บางคนเรียกว่า Bot คือโปรแกรมช่วยการเทรดอัตโนมัติ
                  ที่เราสามารถติดตั้งลงไปบน MT4
                  เสมือนว่าเป็นตัวของเราที่ทำการเทรดเองแต่จริงๆแล้วเป็นการใช้เครื่องมือในการเทรดต่างหาก ถือว่า Expert
                  Advisors (EA) เป็นตัวช่วยที่สำคัญมากๆ โดยเฉพาะสำหรับคนที่มีเวลาในการเทรด forex ค่อนข้างน้อย EA
                  คือการให้ระบบหรือสคริปต์ ซึ่งได้ถูกกำหนดไว้ตามหลักทฤษฎีการเทรดให้ซื้อขายแทนเรา
                  โดยที่บางคนต้องไปทำงานประจำ ไม่มีเวลานั่งเฝ้าหน้าจอ หรือแม้แต่ไปเที่ยวพักผ่อนก็ใช้ EA
                  ช่วยทำงานแทนให้ได้ โดยมากแล้วสามารถช่วยทำกำไรได้(ถ้า EA ดีพอ) แต่ก็ไม่ร้อนแรงมากนักเท่าเทรดด้วยตัวเอง
                </p>

                <apexchart width="500" type="line" :options="options" :series="series"></apexchart>

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
    data() {
      return {
        options: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }],
      }
    },

    components: {
      Leftsidebar,
      Header,
      Footer,
    },

  }

</script>
