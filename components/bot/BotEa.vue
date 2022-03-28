<template>
  <div>
    <b-tabs content-class="mt-3">
      <div class="scrollmenu" v-for="tab of itemstab" :key="tab.id">
        <b-tab :title="tab.Name">
          <b-table-simple responsive> 
            <b-tbody>
              <b-tr v-for="i of tab.itemslist" :key="i.id">
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
      </div>
    </b-tabs>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        itemstab: [{
            id: 1,
            Name: "All Bot",
            itemslist: [{
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
          },
          {
            id: 2,
            Name: "Forex bot",
            itemslist: [{
                id: 1,
                NameBot: "Emazona",
                coin: "EUR/USD",
                price: '<i class="fas fa-caret-up"></i> 39.56',
                status: "Y"
              },
              {
                id: 2,
                NameBot: "Watjai",
                coin: "GBP/USD",
                price: '<i class="fas fa-caret-down"></i> 28.33',
                status: "N",
              }
            ]
          },
          {
            id: 3,
            Name: "Crypto bot",
            itemslist: [{
              id: 1,
              NameBot: "Emazona",
              coin: "EUR/USD",
              price: '<i class="fas fa-caret-up"></i> 39.56',
              status: "Y"
            }, ]
          },
          {
            id: 4,
            Name: "Metal bot",
            itemslist: [{
                id: 1,
                NameBot: "Emazona",
                coin: "EUR/USD",
                price: '<i class="fas fa-caret-up"></i> 39.56',
                status: "N"
              },
              {
                id: 2,
                NameBot: "Watjai",
                coin: "GBP/USD",
                price: '<i class="fas fa-caret-down"></i> 28.33',
                status: "N",
              }
            ]
          },

        ],

      };
    }
  };

</script>

<style>

</style>
