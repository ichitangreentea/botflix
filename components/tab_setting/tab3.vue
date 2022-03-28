<template>
  <div>
    <div class="dynamicTabContent-Accounts">
      <div id="FinanceAccount">
        <div class="live-accoun-row">
          <div class="account-list-title">
            <h4>
              <img src="@/assets/images/mt4.png" width="20"> บัญชี MT4
            </h4>
            <div class="add-account">
              <b-link href="/openAccount" class="btn btn-md plusaddccount"><i class="fas fa-plus-circle"></i> Add
                Account</b-link>
            </div>
          </div>
          <!--  -->
          <MT4 />
          <!--  -->
        </div>
      </div>
      <br>
      <div id="FinanceAccount">
        <div class="live-accoun-row">
          <div class="account-list-title">
            <h4>
              <img src="@/assets/images/mt5.png" width="20"> บัญชี MT5
            </h4>
            <div class="add-account">
              <b-link href="/openAccount" class="btn btn-md plusaddccount"><i class="fas fa-plus-circle"></i> Add
                Account</b-link>
            </div>
          </div>
                    <!--  -->
          <MT5 />
          <!--  -->

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import MT4 from '@/components/MetaTrader/mt4'
  import MT5 from '@/components/MetaTrader/mt5'
  export default {
    components: {
      MT4,
      MT5,
    },

  }

</script>
<style scoped>



</style>
