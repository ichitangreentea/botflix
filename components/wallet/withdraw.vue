<template>
  <div class="deposit-panel-body">
    <div class="Withdraw_card">
      <div class="Withdraw-list-title ">
        <h4>Withdraw</h4>
        <div class="add-account">
          <b-link href="/deposit/MyBankAccountDetails" class="btn btn-md plusaddccount"><i
              class="fas fa-plus-circle"></i> Add Bank Detail</b-link>
        </div>
      </div>
      <div class="Withdraw_warning">
        <p>Withdrawal request cut off time 12:00 AEST/AEDT. Withdrawal submitted before this time will be processed same
          day, requests made after will be processed next business day.</p>
        <p>Credit card withdrawals are to be processed according to the same card that was used to deposit with. </p>
        <p>Kindly note to ensure the security of your funds, all withdrawal requests require additional confirmation.
          You can do this by clicking the 'Confirm Withdrawal' button in the email you will receive after submitting
          your request.</p>
      </div>

      <div class="col-md-6 ">
        <form>
          <div class="form-group row">
            <label for="static" class="col-sm-5 col-form-label">Trading Account :</label>
            <div class="col-sm-7">
              <select class=" form-select" id="exampleFormControlSelect1">
                <option>No Trade Account</option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label for="static" class="col-sm-5 col-form-label">Bank Account :</label>
            <div class="col-sm-7">
              <select class=" form-select" id="exampleFormControlSelect1">
                <option>BANGKOK BANK</option>
                <option>BANK OF AYUDHYA</option>
                <option>KASIKORNBANK</option>
                <option>TMB BANK</option>
                <option>SIAM COMMERCIAL BANK</option>

              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="static" class="col-sm-5 col-form-label">Account Number :</label>
            <div class="col-sm-7">
              <select class=" form-select" id="exampleFormControlSelect1">
                <option>111-1-11111-1</option>
                <option>111-1-11111-1</option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label for="static" class="col-sm-5 col-form-label">Available balance:</label>
            <div class="col-sm-7 m-auto">
              <span class="deposit__text--green" style="text-decoration: underline;">999 THB</span>
            </div>
          </div>

          <div class="form-group row">
            <label for="static" class="col-sm-5 col-form-label">I would like to withdraw :</label>
            <div class="col-sm-7">
              <div class="withdraw__amount">
                <input type="text" required>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>withdraw amount</label>
              </div>
            </div>
          </div>
                    <div class="form-group row">
            <label for="static" class="col-sm-5 col-form-label">Fee:</label>
            <div class="col-sm-7 m-auto">
              <span class="" >20 THB</span>
            </div>
          </div>

                              <div class="form-group row">
            <label for="static" class="col-sm-5 col-form-label">Amount to receive :</label>
            <div class="col-sm-7 m-auto">
              <span class="" >0 THB</span>
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
    </div>
  </div>
</template>


<style scoped>
  /* active state */
  input:focus~label,
  input:valid~label {
    top: -10px;
    font-size: 14px;
    color: #999;
  }

  /* BOTTOM BARS ================================= */
  .bar {
    position: relative;
    display: block;
    width: 300px;
  }

  .bar:before,
  .bar:after {
    content: '';
    height: 1px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #ffc107;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .bar:before {
    left: 50%;
  }

  .bar:after {
    right: 50%;
  }

  /* active state */
  input:focus~.bar:before,
  input:focus~.bar:after {
    width: 50%;
  }

  /* HIGHLIGHTER ================================== */
  .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  /* active state */
  input:focus~.highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
  }

  /* ANIMATIONS ================ */
  @-webkit-keyframes inputHighlighter {
    from {
      background: #ffc107;
    }

    to {
      width: 0;
      background: transparent;
    }
  }

  @-moz-keyframes inputHighlighter {
    from {
      background: #ffc107;
    }

    to {
      width: 0;
      background: transparent;
    }
  }

  @keyframes inputHighlighter {
    from {
      background: #ffc107;
    }

    to {
      width: 0;
      background: transparent;
    }
  }

  /* ************************************************* */

</style>

<script>
  export default {
    mounted() {

    }
  }

</script>
