<template>
  <div class="deposit-panel-body">
    <div class="payment_card">
      <div class="payment-list-title ">
        <h4>DEPOSIT FUNDS</h4>
      </div>

      <!-- Accordion Starts-->
      <div class="acc payment_item">
        <h3>
          <div class="pi_header">
            <span class="credit_card_icon"></span>
            <div class="content1_deposit_funds">Fund Now by Safecharge 3D-Secure Verified by Visa / MasterCard
              SecureCode</div>
            <div class="content2_deposit_funds">Funding time: Instant</div>
            <div class="content3_deposit_funds">Fee: Free</div>
          </div>
        </h3>
        <div class="content">
          <div class="row">
            <div class="col-lg-6">
              <form class="tablewallet">
                <div class="form-group row">
                  <label for="static" class="col-sm-5 col-form-label">Trading Account :</label>
                  <div class="col-sm-7">
                    <select class=" form-select" id="exampleFormControlSelect1">
                      <option>No Trade Account</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="static" class="col-sm-5 col-form-label">Gross Deposit Amount (USD) :</label>
                  <div class="col-sm-7">
                    <input class="form-control text" name="Amount" type="text" value="0">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="static" class="col-sm-5 col-form-label">Card holder name :</label>
                  <div class="col-sm-7">
                    <input type="text" class="form-control text" id="fname" name="fname">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="static" class="col-sm-5 col-form-label">Card number :</label>
                  <div class="col-sm-7">
                    <input type="text" class="form-control text" id="fname" name="fname" value="Card Nuimber">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="static" class="col-sm-5 col-form-label">Expiration :</label>
                  <div class="col-sm-7">
                    <input type="text" class="form-control text" id="fname" name="fname" value="MM / YY">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="static" class="col-sm-5 col-form-label">CVC :</label>
                  <div class="col-sm-7">
                    <input type="text" class="form-control text" id="fname" name="fname" value="CVC">
                  </div>
                </div>
                <div class="form-group account-btn row">
                  <label for="static" class="col-sm-5 col-form-label"></label>
                  <div class="col-sm-7">
                    <button type="submit" class="btn btn-sub">Submit <i class="fas fa-arrow-right"></i> </button>
                  </div>
                </div>
              </form>

            </div>
            <div class="col-lg-6">
              <div class="text-body">
                สกุลเงินที่รองรับ: <b>AUD, USD, EUR, GBP, SGD, NZD, JPY, HKD, CHF, CAD</b>
                <br>
                ระยะเวลาที่ใช้ในการดำเนินการ โดยประมาณ: <b>ทันที</b>
                <br>
                <b>ข้ามขั้นตอนการยืนยัน</b>
                <br>
                <span>หากเป็นการฝากด้วย 3D-Secure นั้นระยะเวลาที่ใช้จะรวดเร็วกว่าและปลอดภัยกว่า</span>
              </div>
            </div>
          </div>
          <div class="content-warning">
            <p><b>หากคุณต้องการถอนเงินที่มีมูลค่าหรือยอดสูงกว่ายอดเงินที่คุณเคยทำการฝากเข้ามาด้วยวิธี 3D-Secure
                (Verified
                by Visa / MasterCard SecureCode), คุณจำเป็นที่จะต้องใช้คำสั่งการถอนเงินด้วยวิธีอื่น
                ที่คุณเคยใช้ในการฝากเข้ามาแล้ว หรือสั่งถอนเงินชุดนี้ด้วยวิธี Bank Wire</b></p>
          </div>
        </div>
      </div>
      <!-- Accordian -->
      <div class="acc payment_item">
        <h3>
          <div class="pi_header">
            <span class="bank_icon"></span>
            <div class="content1_deposit_funds">Fund Now using Thai Internet Banking</div>
            <div class="content2_deposit_funds">Funding time: 15-30 min</div>
            <div class="content3_deposit_funds">Fee: Free</div>
          </div>
        </h3>
        <div class="content">
          <div class="row">
            <div class="col-lg-6">
              <form class="tablewallet">
                <div class="form-group row">
                  <label for="static" class="col-sm-5 col-form-label">Trading Account :</label>
                  <div class="col-sm-7">
                    <select class=" form-select" id="exampleFormControlSelect1">
                      <option>No Trade Account</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="static" class="col-sm-5 col-form-label">Banks :</label>
                  <div class="col-sm-7">
                    <select class=" form-select" id="exampleFormControlSelect1">
                      <option>Bangkok Bank</option>
                      <option>Siam Commercial Bank</option>
                      <option>Krung Thai Bank</option>
                    </select>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="static" class="col-sm-5 col-form-label">Gross Deposit Amount (THB) :</label>
                  <div class="col-sm-7">
                    <input class="form-control text" name="Amount" type="text" value="0">
                  </div>
                </div>

                <div class="form-group account-btn row">
                  <label for="static" class="col-sm-5 col-form-label"></label>
                  <div class="col-sm-7">
                    <button type="submit" class="btn btn-sub">Submit <i class="fas fa-arrow-right"></i> </button>
                  </div>
                </div>
              </form>

            </div>
            <div class="col-lg-6">
              <div class="text-body">
                สกุลเงินที่รองรับ: <b>THB</b>
                <br>
                ระยะเวลาที่ใช้ในการดำเนินการ โดยประมาณ: <b>15-30 นาที</b>
              </div>
            </div>
          </div>
          <div class="content-warning">
            <p><b>ก่อนที่คุณจะดำเนินการฝากเงินด้วยวิธี Internet Banking ไทย นี้ หากคุณดำเนินธุรกรรมนี้ต่อ
                นั้นหมายความว่าคุณยืนยันว่าบัญชีธนาคารที่คุณใช้ในการฝากเงินเป็นบัญชีธนาคารชื่อของคุณเอง
                และมีชื่อตรงกับบัญชีที่คุณสมัครเปิดไว้กับ IC Markets</b></p>
          </div>
        </div>
      </div>
      <!-- Accordian -->

      <div id="deposit_page_bottom">
        <h3 class="h3 nc"> Security of Funds</h3>
        <p>
          IC Markets holds client money in Segregated Client Trust Accounts. When funding
          your trading account on-line all payments are processed using SSL (Secure Socket
          Layer) technology and are encrypted to ensure security. All payment information
          is confidential and used only for the purpose of funding your trading account with
          IC Markets.
        </p>
        <h3 class="h3 nc">Bank Fees</h3>
        <p>
          IC Markets does not charge any additional fees for deposits or withdrawals. You
          should however be aware that you may incur fees on payments to and from some international
          banking institutions. IC Markets accepts no responsibility for any such bank fees.
        </p>
        <h3 class="h3 nc">Third Party Payments</h3>
        <p>
          IC Markets does not accept payments from third parties. Please ensure that the all
          deposits into your trading account come from a bank account in your name. Payments
          from Joint Bank Accounts / Credit Cards are accepted if the trading account holder
          is one on the parties on the Bank Account / Credit Card.
        </p>

        <p style="font-size: 12px">
          * IC Markets reserves the right to pass on any charges to you for any misuse of the service. Fees and charges
          are subject to change.
          <br>
          ** Certain payment methods will be processed by International Capital Markets Pty Ltd (IC Markets) for and on
          behalf of Raw Trading Ltd (IC Markets Global). </p>
      </div>

    </div>


  </div>
</template>


<style scoped>
 
</style>

<script>
  export default {
    mounted() {
      $(document).ready(function () {
        $('.acc h3').click(function () {
          $(this).next('.content').slideToggle();
          $(this).parent().toggleClass('active');
          $(this).parent().siblings().children('.content').slideUp();
          $(this).parent().siblings().removeClass('active');
        });
      });
    },

  }

</script>
