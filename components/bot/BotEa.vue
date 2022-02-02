<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="All bot" active>

        <b-table-simple responsive>
          <b-tbody>
            <b-tr v-for="i of items" :key="i.id">
              <b-td class="text-left">{{i.NameBot}}</b-td>
              <b-td class="text-center">{{i.coin}}</b-td>
              <div style="display: contents;" v-if="i.status === 'Y'">
                <b-td class="text-right text-success"><span v-html=" i.price"></span></b-td>
              </div>
              <div style="display: contents;" v-else>
                <b-td class="text-right text-danger"><span v-html=" i.price"></span></b-td>
              </div>
            </b-tr>
          </b-tbody>
        </b-table-simple>

      </b-tab>


      <b-tab title="Forex bot">
        <b-table-simple responsive>
          <b-tbody>
            <b-tr v-for="i of items" :key="i.id">
              <b-td class="text-left">{{i.NameBot}}</b-td>
              <b-td class="text-center">{{i.coin}}</b-td>
              <div style="display: contents;" v-if="i.status === 'Y'">
                <b-td class="text-right text-success"><span v-html=" i.price"></span></b-td>
              </div>
              <div style="display: contents;" v-else>
                <b-td class="text-right text-danger"><span v-html=" i.price"></span></b-td>
              </div>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-tab>
      <b-tab title="Crypto bot">
        <b-table-simple responsive>
          <b-tbody>
            <b-tr v-for="i of items" :key="i.id">
              <b-td class="text-left">{{i.NameBot}}</b-td>
              <b-td class="text-center">{{i.coin}}</b-td>
              <div style="display: contents;" v-if="i.status === 'Y'">
                <b-td class="text-right text-success"><span v-html=" i.price"></span></b-td>
              </div>
              <div style="display: contents;" v-else>
                <b-td class="text-right text-danger"><span v-html=" i.price"></span></b-td>
              </div>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-tab>
      <b-tab title="Metal bot">
        <b-table-simple responsive>
          <b-tbody>
            <b-tr v-for="i of items" :key="i.id">
              <b-td class="text-left">{{i.NameBot}}</b-td>
              <b-td class="text-center">{{i.coin}}</b-td>
              <div style="display: contents;" v-if="i.status === 'Y'">
                <b-td class="text-right text-success"><span v-html=" i.price"></span></b-td>
              </div>
              <div style="display: contents;" v-else>
                <b-td class="text-right text-danger"><span v-html=" i.price"></span></b-td>
              </div>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        items: [{
            id: 1,
            NameBot: "Emazona",
            coin: "EUR/USD",
            price: '<i class="fas fa-caret-up"></i> 39.56',
            status: "Y"
          },
          {
            id: 2,
            NameBot: "Super-Cryp",
            coin: "Botfilx Coin",
            price: '<i class="fas fa-caret-up"></i> 9988.1',
            status: "Y"
          },
          {
            id: 3,
            NameBot: "Watjai",
            coin: "GBP/USD",
            price: '<i class="fas fa-caret-down"></i> 28.33',
            status: "N",

          }
        ]
      };
    }
  };

</script>

<style>
  .nav-tabs {
    border-bottom: 1px solid transparent;

  }

  .nav-link {
    display: block;
        padding: 0.25rem;
    margin: 0 0.5rem;
    font-size: 1.2rem;
    font-weight: 400;
  }

  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active {
    color: #9b999a;
    background-color: transparent;
    border-bottom: 3px solid;
    border-image: linear-gradient(90deg, rgba(178, 127, 43, 1) 0%, rgba(254, 242, 163, 1) 50%, rgba(178, 127, 43, 1) 100%);
    border-image-slice: 1;
    border-top: none;
    border-right: none;
    border-left: none;
  }

  .nav-tabs .nav-link {
    margin-bottom: -1px;
    color: #9b999a;
    border: 0;
    border-top-left-radius: 0rem;
    border-top-right-radius: 0rem;
  }


  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-link:focus {
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 3px solid;
    border-image: linear-gradient(90deg, rgba(178, 127, 43, 1) 0%, rgba(254, 242, 163, 1) 50%, rgba(178, 127, 43, 1) 100%);
    border-image-slice: 1;
  }

  .nav-tabs .nav-link:hover::after {
    display: block;
    content: '';
    position: relative;
    top: 8px;
    left: 0;
    border: 0px;
    border-bottom: 2px solid;
    -o-border-image: linear-gradient(90deg, rgba(178, 127, 43, 1) 0%, rgba(254, 242, 163, 1) 50%, rgba(178, 127, 43, 1) 100%);
    border-image: linear-gradient(90deg, rgba(178, 127, 43, 1) 0%, rgba(254, 242, 163, 1) 50%, rgba(178, 127, 43, 1) 100%);
    border-image-slice: 1;
    opacity: 1;
    filter: blur(4px);
    width: 100%;
  }

  .nav-tabs .nav-link.active::after {
    display: block;
    content: '';
    position: relative;
    top: 8px;
    left: 0;
    border: 0px;
    border-bottom: 2px solid;
    -o-border-image: linear-gradient(90deg, rgba(178, 127, 43, 1) 0%, rgba(254, 242, 163, 1) 50%, rgba(178, 127, 43, 1) 100%);
    border-image: linear-gradient(90deg, rgba(178, 127, 43, 1) 0%, rgba(254, 242, 163, 1) 50%, rgba(178, 127, 43, 1) 100%);
    border-image-slice: 1;
    opacity: 1;
    filter: blur(4px);
    width: 100%;
  }

  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #ffffff;

  }

  table tr {
    margin-bottom: 15px;
    background-color: #373334;
    position: relative;
    border-radius: 6px;
    display: block;
  }

  .table th,
  .table td {
    padding: 0.75rem;
    vertical-align: middle;
    border: none;
    display: inline-block;
    width: 32%;
    margin: auto;
  }

  .table span i {
    font-size: 18px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .table span i.closeEa {
    font-size: 20px;
    vertical-align: middle;
    padding-left: 10px;
  }
  .text-success {
    color: #88bc00 !important;
  }

  .text-danger {
    color: #d4323f !important;
  }

    .text-gay {
    color: #7d8488 !important;
  }

</style>

