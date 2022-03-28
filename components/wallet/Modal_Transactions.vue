<template>
  <div>

    <!-- ต่ออายุ -->
    <b-modal id="package-1" title="Teader plan" hide-footer>
      <div class="package_body">
        <p>แพ็กเกจปัจจุบันที่คุณใช้</p>
        <h5>Teader plan <span class="small text-black">(ค่าบริการรายเดือน $ 29.99/Month )</span></h5>
        <!-- date of use -->
        <div class="date_use">
          <p><b>วันที่ใช้งาน</b></p>
          <dl>
            <dt><i class="far fa-clock"></i> วันที่เริ่มต้น :</dt>
            <dd>11-11-2022</dd>
          </dl>
          <dl>
            <dt><i class="far fa-clock"></i> วันที่หมดอายุ :</dt>
            <dd>12-12-2022</dd>
          </dl>
          <p class="text-war">ระยะเวลาใช้ Teader plan Package เหลืออีก <span class="text-day">15</span> วัน </p>

        </div>
        <!--  -->
      </div>
      <div class="card-package_bottom styles_item-more ">
      <a href="#" class="btn btn-more-1 " role="button"><i class="fas fa-undo-alt"></i> Extend Now</a>
      </div>
    </b-modal>
    <!-- ต่ออายุ -->
    <!-- ยกเลิก -->
    <!-- ยกเลิก -->
    <!-- เปลี่ยนแพ็กเกจ -->
        <b-modal id="package-2" title="Invester plan" hide-footer>
      <div class="package_body">
        <p>โปรโมชั่นแพ็กเกจ</p>
        <h5>Invester plan <span class="small text-black">(ค่าบริการรายเดือน <strike>$99.99</strike> <span class="updateprice"> $70</span> /Month )</span></h5>
        <p class="saveprice">SAVE $29.99</p>
        <!-- date of use -->
        <!--  -->
      </div>
      <div class="card-package_bottom styles_item-more ">
      <a href="#" class="btn btn-more-3 " role="button"> Update Now</a>
      </div>
    </b-modal>
    <!-- เปลี่ยนแพ็กเกจ -->



  </div>
</template>

<style scoped>





</style>

<script>
  export default {

  }

</script>
