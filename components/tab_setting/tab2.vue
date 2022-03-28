<template>
  <div>
    <div class="col-md-12 securitytab">
      <h3 class="security__title">ความปลอดภัย</h3>

      <div class="security__formgroup">
        <div class="security__labelgroup">
          <label class="security__label">
            <font>เปลี่ยนรหัสผ่าน</font>
          </label>
          <label class="security__desc">
            <font>หากคุณสังเกตเห็นกิจกรรมที่น่าสงสัย เราแนะนำให้เปลี่ยนรหัสผ่านของคุณ</font>
          </label>

          <a href="#collapse1" class="security-link nav-toggle">เปลี่ยนรหัสผ่าน</a>
          <div id="collapse1" class="security-toggle" style="display:none">

            <div class="col-md-9">
              <div class="row mt-lg-4">
                <div class="col-md-4">
                  <label>Current Password</label>
                </div>
                <div class="col-md-8">
                  <div class="form-group pass_show">
                    <input type="password" value="" class="form-control" placeholder="Current Password">
                  </div>
                </div>
                <div class="col-md-4">
                  <label>New Password</label>
                </div>
                <div class="col-md-8">

                  <div class="form-group pass_show">
                    <input type="password" value="" class="form-control" placeholder="New Password">
                  </div>
                </div>
                <div class="col-md-4">
                  <label>Confirm Password</label>
                </div>
                <div class="col-md-8">
                  <div class="form-group pass_show">
                    <input type="password" value="" class="form-control" placeholder="Confirm Password">
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <button type="submit" class="btn btn-sub ml-2 mb-2 float-right">Update</button>
              </div>

            </div>

          </div>

        </div>
        <div class="security__inputgroup">
          <span class="security__placeholder text-right">
            <font>อัพเดตล่าสุด</font> 2021-12-12 12:12:12
          </span>
        </div>

      </div>

      <div class="security__formgroup">
        <div class="security__labelgroup2">
          <label class="security__label">
            <font>2-FACTOR AUTHENTICATION</font>
          </label>
          <label class="security__desc">
            <font>คุณจะได้รับรหัสการยืนยันเพิ่มเติมเพื่อเข้าสู่บัญชีของคุณ</font>
          </label>
          <a href="#collapse2" class="security-link nav-toggle2">การตั้งค่า</a>
          <div id="collapse2" class="security-toggle" style="display:none">
            <p>ใช้วิธีการตรวจสอบสิทธิ์หลายวิธีเพื่อเข้าสู่ระบบบัญชีของคุณแม้ว่าจะไม่สามารถใช้วิธีใดวิธีหนึ่งได้</p>

            <div class="notificat_formgroup mt-4">
              <h5 class="notificat_title"> โทรศัพท์ SMS</h5>
              <div class="row">
                <div class="col-9">
                  <p>ส่งรหัสผ่าน SMS ที่หมายเลข : <span> +6 ••• ••• •• 01</span> <i
                      class="fas fa-check-circle css-check "></i></p>
                </div>
                <div class="col-3 switch-box">
                  <input type="checkbox" id="switch5" /><label for="switch5"></label></div>
              </div>
            </div>
            <div class="notificat_formgroup mt-4">
              <h5 class="notificat_title"> อีเมล</h5>
              <div class="row">
                <div class="col-9">
                  <p>รับรหัสทางอีเมล: : <span> botflixt@hotmail.com</span> <i
                      class="fas fa-check-circle css-check "></i></p>
                </div>
                <div class="col-3 switch-box">
                  <input type="checkbox" id="switch6" /><label for="switch6"></label></div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div class="security__formgroup">
        <div class="security__labelgroup2">
          <label class="security__label">
            <font>การเชื่อมต่อที่ใช้งาน
            </font>
          </label>
          <label class="security__desc">
            <font>ข้อมูลเกี่ยวกับการใช้บัญชีของคุณบนอุปกรณ์อื่น
              คุณสามารถสิ้นสุดเซสชันทั้งหมดเพื่อออกจากระบบของบัญชีของคุณบนทุกอุปกรณ์</font>
          </label>

          <li class="styles_item-devices">
            <div class="styles_postContent">
              <div class="styles_content-img ">
                <img src="/_nuxt/assets/images/icon-security-2.svg" width="30" height="30" class="mr-2"></div>
              <div class="styles_content-text ">
                <p> Chrome (Windows)</p>
              </div>
            </div>
            <div class="item-completed">
              <div class="form-completed"><label class="text-order"> ที่อยู่ IP - 49.49.191.5, Thailand</label>
                <div class="b_close"><button type="button" class="btn-close btn-close-white"
                    aria-label="Close"></button></div>
              </div>
            </div>
          </li>



        </div>
      </div>


    </div>
  </div>
</template>

<style>
  .pass_show {
    position: relative
  }

  .pass_show .ptxt {
    position: absolute;
    top: 50%;
    right: 10px;
    z-index: 1;
    color: #ffc667;
    margin-top: -10px;
    cursor: pointer;
    transition: .3s ease all;
  }

  .pass_show .ptxt:hover {
    color: #333333;
  }

</style>
<script>
  export default {

    mounted() {
      $(document).ready(function () {
        $('.nav-toggle').click(function () {
          //get collapse content selector
          var collapse_content_selector = $(this).attr('href');

          //make the collapse content to be shown or hide
          var toggle_switch = $(this);
          $(collapse_content_selector).toggle(function () {
            if ($(this).css('display') == 'none') {
              //change the button label to be 'Show'
              toggle_switch.html('เปลี่ยนรหัสผ่าน');
            } else {
              //change the button label to be 'Hide'
              toggle_switch.html('ซ่อนเปลี่ยนรหัสผ่าน');
            }
          });
        });
        $('.nav-toggle2').click(function () {
          //get collapse content selector
          var collapse_content_selector = $(this).attr('href');

          //make the collapse content to be shown or hide
          var toggle_switch = $(this);
          $(collapse_content_selector).toggle(function () {
            if ($(this).css('display') == 'none') {
              //change the button label to be 'Show'
              toggle_switch.html('การตั้งค่า');
            } else {
              //change the button label to be 'Hide'
              toggle_switch.html('ซ่อนการตั้งค่า');
            }
          });
        });




      });
      $(document).ready(function () {
        $('.pass_show').append('<span class="ptxt">Show</span>');
      });


      $(document).on('click', '.pass_show .ptxt', function () {

        $(this).text($(this).text() == "Show" ? "Hide" : "Show");

        $(this).prev().attr('type', function (index, attr) {
          return attr == 'password' ? 'text' : 'password';
        });

      });


    }


  }

</script>
