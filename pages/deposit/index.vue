<template>
  <div id="id_botflix_area">
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content">
        <Header />
        <Leftsidebar />
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 panel-page">

              <b-tabs content-class="mt-3">
                <b-tab title="Deposit" active>
                  <Deposit />
                </b-tab>
                <b-tab title=" Withdraw">
                  <Withdraw />
                </b-tab>
                <b-tab title="Latest Transactions">
                  <div class="row">
                    <div class="col-lg-8">
                      <h5>Latest Transactions</h5>
                      <div class="section-content">

                        <b-table-simple responsive>
                          <b-thead role="rowgroup" class="">
                            <!---->
                            <b-tr role="row" class="tab-header">
                              <b-th role="columnheader" scope="col" aria-colindex="1">
                                <div>DATES</div>
                              </b-th>
                              <b-th role="columnheader" scope="col" aria-colindex="2">
                                <div>ITEM NAME</div>
                              </b-th>
                              <b-th role="columnheader" scope="col" aria-colindex="3">
                                <div>TYPE</div>
                              </b-th>
                              <b-th role="columnheader" scope="col" aria-colindex="4">
                                <div>CATEGORY</div>
                              </b-th>
                              <b-th role="columnheader" scope="col" aria-colindex="5">
                                <div>RECEIPT</div>
                              </b-th>
                            </b-tr>
                          </b-thead>
                          <b-tbody>
                            <b-card class="deposi-card">
                              <b-tr class="border-line" v-for="i of items" :key="i.id">
                                <b-td class="">{{i.date}}</b-td>
                                <b-td class="">{{i.name}}</b-td>
                                <b-td class="">{{i.type}}</b-td>
                                <div style="display: contents;" v-if="i.status === 'Y'">
                                  <b-td class=" text-green"><span v-html=" i.category"></span></b-td>
                                </div>
                                <div style="display: contents;" v-else>
                                  <b-td class=" text-sky"><span v-html=" i.category"></span></b-td>
                                </div>
                                <b-td class="">
                                  <b-img center src="@/assets/upload/img-receipt.png" alt=" image" width="30px"
                                    height="30px" style="border-radius: 6px;">
                                  </b-img>

                                </b-td>
                              </b-tr>
                            </b-card>
                          </b-tbody>
                        </b-table-simple>


                      </div>
                    </div>
                    <div class="col-lg-4 deposit-panel-body">
                      <h5>My Card</h5>
                      <div class="card styles_item-card">
                        <b-img src="@/assets/upload/bf-card.png" fluid alt=" image"></b-img>
                        <Credit />
                      </div>
                    </div>
                    <div class="col-lg-12 deposit-panel-body">
                      <h5>Get more</h5>
                      <Transactions />
                      <div class="row">
                        <div class="card styles_item-more">
                          <div class="item-body">
                            <p class="text-header">Teader plan</p>
                            <label>Pomotion</label>
                            <p class="text-color"><span>$ 29.99</span>/Month</p>
                            <p class="text-color float-right"><span>$ 299.99</span>/Annually</p>
                            <p class="text-color"><span>Next Payment 14 November 2021</span></p>
                          </div>
                          <div class="d-flex justify-content-center">
                            <b-button v-b-modal.package-1 class="btn btn-more-1" role="button">Extend Now</b-button>
                            <button  class="btn btn-more-2" role="button">Unsubscribe</button>
                          </div>
                        </div>
                        <div class="card styles_item-more">
                          <div class="item-body">
                            <p class="text-header">Invester plan</p>
                            <label>Pomotion</label>
                            <p class="text-color"><span>$ 99.99</span>/Month</p>
                            <p class="text-color float-right"><span>$ 999.99</span>/Annually</p>
                            <p class="text-color"><span>Update $70</span></p>
                          </div>
                          <div class="d-flex justify-content-center">
                            <button v-b-modal.package-2 class="btn btn-more-3" role="button">Update Now</button>
                          </div>
                        </div>
                        <div class="card styles_item-more">
                          <div class="item-body">
                            <p class="text-header">EA bot Box</p>
                            <label>Coupon</label>
                            <p class="text-color"><span>$ 9.99</span>/10 Coupon</p>
                          </div>
                          <div class="d-flex justify-content-center">
                            <a href="/shop" class="btn btn-more-1" role="button"
                              style="position: absolute; bottom:15px;">Buy
                              Now</a>
                          </div>
                        </div>

                      </div>
                    </div>
                    
                  </div>



                </b-tab>
              </b-tabs>
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
  import Credit from '@/components/wallet/Modalcredit'
  import Deposit from '@/components/wallet/finance'
  import Withdraw from '@/components/wallet/withdraw'
  import Transactions from '@/components/wallet/Modal_Transactions'
  export default {
    components: {
      Leftsidebar,
      Header,
      Footer,
      Credit,
      Deposit,
      Withdraw,
      Transactions,
    },
    data() {
      return {
        items: [{
            id: 1,
            date: "Today",
            name: "Package Teader",
            type: 'Card payment',
            category: 'Package',
            status: "N"
          },
          {
            id: 2,
            date: "10/13",
            name: "Package Teader",
            type: 'Card payment',
            category: 'Coupon',
            status: "Y"
          },
          {
            id: 3,
            date: "10/13",
            name: "Pack EA bot Box",
            type: 'Banking transfer',
            category: 'Coupon',
            status: "Y"
          },
          {
            id: 4,
            date: "10/13",
            name: "Pack EA bot Box",
            type: 'Banking transfer',
            category: 'Package',
            status: "N"
          },
          {
            id: 5,
            date: "10/13",
            name: "Pack EA bot Box",
            type: 'true wallet',
            category: 'Coupon',
            status: "Y"
          },



        ]
      };
    },
    
  }

</script>

<style>
  .modal-header {
    color: white;
    background-color: #1b1819;
    border: none;
  }

  .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 0rem !important;
    border: none;
  }

  table tr.tab-header {
    margin-bottom: 5px;
    background-color: transparent;
    position: relative;
    border-radius: 6px;
    color: #9b999a;
    display: block;
  }

  .table th {
    padding: 0.5rem;
    vertical-align: middle;
    border: none;
    display: inline-block;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    margin: auto;
    text-align: center;
  }

  .table th:nth-child(5n + 1) {
    width: 14%;
  }

  .table th:nth-child(5n + 2) {
    width: 24%;
  }

  .table th:nth-child(5n + 3) {
    width: 22%;
  }

  .table th:nth-child(5n + 4) {
    width: 22%;
  }

  .table th:nth-child(5n + 5) {
    width: 12%;
  }

  .table td {
    padding: 0.5rem;
    vertical-align: middle;
    border: none;
    display: inline-block;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    margin: auto;

  }

  .table td:nth-child(5n + 1) {
    width: 15%;
    text-align: left;
  }

  .table td:nth-child(5n + 2) {
    width: 22%;
    text-align: center;
  }

  .table td:nth-child(5n + 3) {
    width: 30%;
    text-align: center;
  }

  .table td:nth-child(5n + 4) {
    width: 25%;
    text-align: center;
  }

  .table td:nth-child(5n + 5) {
    width: 15%;
    text-align: right;
  }






  .deposi-card {
    background-color: #373334;
    padding: 10px;
  }

  table tr.border-line {
    margin-bottom: 10px;
    background-color: transparent;
    position: relative;
    border-radius: 6px;
    color: #fff;
    display: block;
    border: 2px solid #9b999a;
  }


  .table thead th {
    vertical-align: bottom;
    border-bottom: 0px;
  }

  .table>:not(:first-child) {
    border-top: 0px;
  }

  .text-green {
    color: #33ff00 !important;
  }

  .text-sky {
    color: #00c9b7 !important;
  }




  /* pretty radio */
  label>input[type="radio"] {
    display: none;
  }

  label>input[type="radio"]+*::before {
    content: "";
    display: inline-block;
    vertical-align: bottom;
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.3rem;
    border-radius: 50%;
    border-style: solid;
    border-width: 0.1rem;
    border-color: #8a5f3c;
  }

  label>input[type="radio"]:checked+* {
    color: #fff;
  }

  label>input[type="radio"]:checked+*::before {
    background: radial-gradient(#fff4a7 0%, #b27f2b 40%, transparent 50%, transparent);
    border-color: #8a5f3c;
  }

  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 501px;
      margin: 1.75rem auto;
    }
  }

</style>
