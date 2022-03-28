<template>
  <div>

    <div class="notificat_formgroup">
      <h5 class="notificat_title">การแจ้งเตือนอีเมล</h5>
      <div class="row">
        <div class="col-9">
          <p>รับอีเมลเกี่ยวกับคุณสมบัติแพลตฟอร์มใหม่และเหตุการณ์สำคัญ</p>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">โปรโมชั่น</label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">ข่าวสารของระบบ</label>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">รายงานการวิเคราะห์</label>
          </div>
        </div>
        <div class="col-3 switch-box">
          <input type="checkbox" id="switch1" checked /><label for="switch1"></label></div>
      </div>
    </div>

    <div class="notificat_formgroup">
      <h5 class="notificat_title">การแจ้งเตือนแบบพุช</h5>
      <div class="row">
        <div class="col-9">
          <p>รับการแจ้งเตือนแบบพุชเกี่ยวกับข่าวการเทรดล่าสุด</p>
        </div>
        <div class="col-3 switch-box">
          <input type="checkbox" id="switch2" /><label for="switch2"></label></div>
      </div>
    </div>

    <div class="notificat_formgroup">
      <h5 class="notificat_title">โทรศัพท์</h5>
      <div class="row">
        <div class="col-9">
          <p>รับสายจากบริการลูกค้าสัมพันธ์ของเราสำหรับข้อเสนอพิเศษ</p>
        </div>
        <div class="col-3 switch-box">
          <input type="checkbox" id="switch3" /><label for="switch3"></label></div>
      </div>
    </div>

    <div class="notificat_formgroup">
      <h5 class="notificat_title">ข้อมูลการสื่อสาร</h5>
      <div class="row">
        <div class="col-9">
          <p>ฉันยินยอมให้หน่วยงานที่เกี่ยวข้องประมวลผลข้อมูลส่วนบุคคลของฉัน
            เพื่อวัตถุประสงค์ทางการตลาด
            ซึ่งรวมถึงการสื่อสารกับฉันเพื่อแจ้งให้ทราบเกี่ยวกับผลิตภัณฑ์และ/หรือบริการและ/หรือข้อเสนอตามที่อธิบายไว้ข้างต้นในแง่ของการปรับแต่งประสบการณ์ด้านการตลาดให้เหมาะสมยิ่งขึ้น
          </p>
        </div>
        <div class="col-3 switch-box">
          <input type="checkbox" id="switch4" /><label for="switch4"></label></div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
<script>
  export default {

  }

</script>
