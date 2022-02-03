<template>
  <div>
    <b-tabs content-class="mt-3">
      <div class="scrollmenu" v-for="tab of itemstab" :key="tab.id">
        <b-tab :title="tab.Name">

          <div class="card card-acconutbot">
            <div class="g-acconutbot">
              <label>ACCOUT :</label>
              <b-form-select v-model="selected" :options="options1"></b-form-select>
            </div>
            <div class="g-acconutbot">
              <label>SYMBOL:</label>
              <b-form-select v-model="selected" :options="options2"></b-form-select>
            </div>
            <div class="g-acconutbot">
              <label>EA BOT :</label>
              <b-form-select v-model="selected" :options="options3"></b-form-select>
            </div>
            <b-button class=" btn-run">CREATE</b-button>

          </div>

          <div class="section-BotEa_Manage">
            <b-table-simple responsive>
              <b-thead role="rowgroup" class="">
                <!---->
                <b-tr role="row" class="tab-header">
                  <b-th role="columnheader" scope="col" aria-colindex="1">
                    <div>STATUS</div>
                  </b-th>
                  <b-th role="columnheader" scope="col" aria-colindex="2">
                    <div>ACCOUT</div>
                  </b-th>
                  <b-th role="columnheader" scope="col" aria-colindex="3">
                    <div>SYMBOL</div>
                  </b-th>
                  <b-th role="columnheader" scope="col" aria-colindex="4">
                    <div>EA BOT</div>
                  </b-th>
                  <b-th role="columnheader" scope="col" aria-colindex="5">
                    <div>MANAGEMENT</div>
                  </b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr class="border-line" v-for="i of tab.itemslist" :key="i.id">
                  <div style="display: contents;" v-if="i.status_active === 'PAUSE_G'">
                    <b-td class=" text-success"><span v-html=" i.status"></span></b-td>
                  </div>
                  <div style="display: contents;" v-else-if="i.status_active === 'PAUSE_D'">
                    <b-td class=" text-danger"><span v-html=" i.status"></span></b-td>
                  </div>
                  <div style="display: contents;" v-else-if="i.status_active === 'RUN_G'">
                    <b-td class="text-success"><span v-html=" i.status"></span></b-td>
                  </div>
                  <div style="display: contents;" v-else-if="i.status_active === 'RUN_D'">
                    <b-td class="text-danger"><span v-html=" i.status"></span></b-td>
                  </div>
                  <b-td class="">{{i.accout}}</b-td>
                  <b-td class="text-gay ">{{i.symbol}}</b-td>
                  <b-td class="">{{i.bot}}</b-td>
                  <div class="d-tabel" v-if="i.status_active === 'PAUSE_G'">
                    <b-td class="btn-right">
                      <b-button class="btn-pause"><i class="fas fa-pause"></i> PAUSE</b-button><span
                        v-html=" i.management"></span>
                    </b-td>
                  </div>
                  <div class="d-tabel" v-else-if="i.status_active === 'PAUSE_D'">
                    <b-td class="btn-right">
                      <b-button class="btn-pause"><i class="fas fa-pause"></i> PAUSE</b-button><span
                        v-html=" i.management"></span>
                    </b-td>
                  </div>
                  <div class="d-tabel" v-else-if="i.status_active === 'RUN_G'">
                    <b-td class="btn-right">
                      <b-button class="btn-run"><i class="fas fa-play"></i> RUN</b-button><span
                        v-html=" i.management"></span>
                    </b-td>
                  </div>
                  <div class="d-tabel" v-else-if="i.status_active === 'RUN_D'">
                    <b-td class="btn-right">
                      <b-button class="btn-run"><i class="fas fa-play"></i> RUN</b-button><span
                        v-html=" i.management"></span>
                    </b-td>
                  </div>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </div>
        </b-tab>
      </div>
    </b-tabs>
  </div>
</template>

<script>
  export default {

    data() {
      return {

        selected: null,
        options1: [
          {text: 'Jos sorost'},
          {text: 'Jos sorost'},
          {text: 'Jos sorost'},
          {text: 'Jos sorost'},
          {text: 'Jos sorost'},
        ],
                options2: [
          {text: 'EURCHF'},
          {text: 'EURCHF'},
          {text: 'EURCHF'},
          {text: 'EURCHF'},
          {text: 'EURCHF'},
        ],
                options3: [
          {text: 'Metafib'},
          {text: 'Metafib'},
          {text: 'Metafib'},
          {text: 'Metafib'},
          {text: 'Metafib'},
        ],


        itemstab: [{
            id: 1,
            Name: "All Bot",
            itemslist: [{
                id: 1,
                status: '<i class="fas fa-circle"></i>',
                accout: "Jobana jostar",
                symbol: 'EURUSD',
                bot: 'Emazona',
                management: '<i class="fas fa-times closeEa"></i>',
                status_active: "PAUSE_G"
              },

              {
                id: 2,
                status: '<i class="fas fa-circle"></i>',
                accout: "Jobana jostar",
                symbol: 'EURUSD',
                bot: 'Emazona',
                management: '<i class="fas fa-times closeEa"></i>',
                status_active: "PAUSE_D"
              },
              {
                id: 3,
                status: '<i class="fas fa-circle"></i>',
                accout: "Jobana jostar",
                symbol: 'EURUSD',
                bot: 'Emazona',
                management: '<i class="fas fa-times closeEa"></i>',
                status_active: "RUN_G"
              },
              {
                id: 4,
                status: '<i class="fas fa-circle"></i>',
                accout: "Jobana jostar",
                symbol: 'EURUSD',
                bot: 'Emazona',
                management: '<i class="fas fa-times closeEa"></i>',
                status_active: "RUN_D"
              },
            ]
          },
          {
            id: 2,
            Name: "Forex bot",
            itemslist: [{
                id: 1,
                status: '<i class="fas fa-circle"></i>',
                accout: "Jobana jostar",
                symbol: 'EURUSD',
                bot: 'Emazona',
                management: '<i class="fas fa-times closeEa"></i>',
                status_active: "PAUSE_G"
              },
              {
                id: 2,
                status: '<i class="fas fa-circle"></i>',
                accout: "Jobana jostar",
                symbol: 'EURUSD',
                bot: 'Emazona',
                management: '<i class="fas fa-times closeEa"></i>',
                status_active: "RUN_D"
              },
            ]
          },
          {
            id: 3,
            Name: "Crypto bot",
            itemslist: [{
                id: 1,
                status: '<i class="fas fa-circle"></i>',
                accout: "Jobana jostar",
                symbol: 'EURUSD',
                bot: 'Emazona',
                management: '<i class="fas fa-times closeEa"></i>',
                status_active: "RUN_D"
              },
              {
                id: 2,
                status: '<i class="fas fa-circle"></i>',
                accout: "Jobana jostar",
                symbol: 'EURUSD',
                bot: 'Emazona',
                management: '<i class="fas fa-times closeEa"></i>',
                status_active: "RUN_D"
              },
            ]
          },

        ],

      };
    }
  };

</script>


<style>
  .card-acconutbot {
    padding: 10px 15px;
    margin-bottom: 15px;
    color: #9b999a;
    background-color: #373334;
    position: relative;
    border-radius: 6px;
    display: -webkit-inline-box;
    width: 100%;
  }

  .g-acconutbot {
    width: 30%;
  }
   .card-acconutbot .btn {
    color: #fff;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0.375rem 1rem;
    font-size: 14px;
    width: auto;
    line-height: 1.5;
    border-radius: 10px;
    transition: 0.5s;
    background-size: 200% auto;
  }

  .g-acconutbot .custom-select {
    width: 60%;
    margin: 0 5px;
 background: #fff url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat 90% center;
    padding-right: 25px;
  }



  .section-BotEa_Manage .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #ffffff;

  }

  .section-BotEa_Manage table tr {
    margin-bottom: 15px;
    background-color: #373334;
    position: relative;
    border-radius: 6px;
    display: block;
  }

  .section-BotEa_Manage table tr.tab-header {
    margin-bottom: 5px;
    background-color: transparent;
    position: relative;
    border-radius: 6px;
    color: #9b999a;
    display: block;
  }

  .section-BotEa_Manage .table th {
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

  .section-BotEa_Manage .table th:nth-child(5n + 1) {
    width: 13%;
  }

  .section-BotEa_Manage .table th:nth-child(5n + 2) {
    width: 25%;
  }

  .section-BotEa_Manage .table th:nth-child(5n + 3) {
    width: 20%;
  }

  .section-BotEa_Manage .table th:nth-child(5n + 4) {
    width: 20%;
  }

  .section-BotEa_Manage .table th:nth-child(5n + 5) {
    width: 18%;
  }

  .section-BotEa_Manage .table td {
    padding: 0.75rem;
    vertical-align: middle;
    border: none;
    display: inline-block;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    margin: auto;

  }

  .d-tabel {
    display: contents;
  }

  .d-tabel td.btn-right {
    width: 20% !important;
    text-align: right !important;
  }

  .btn-right .btn {
    color: #fff;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0.375rem 0.5rem;
    font-size: 14px;
    width: 70%;
    line-height: 1.5;
    border-radius: 20px;
    transition: 0.5s;
    background-size: 200% auto;
  }

  .btn-run {
    background-image: linear-gradient(to right, #1ca1dc 0%, #72c5ef 40%, #1ca1dc 100%);
    color: #fff;
  }

  .btn-run:hover {
    color: #000;
    background-position: right center;
  }

  .btn-pause {
    background-image: linear-gradient(to right, #d4323f 0%, #eb951c 40%, #d4323f 100%);
    color: #fff;
  }

  .btn-pause:hover {
    color: #000;
    background-position: right center;
  }

  .section-BotEa_Manage .table td:nth-child(1) {
    width: 12%;
    text-align: center;
  }

  .section-BotEa_Manage .table td:nth-child(2) {
    width: 25%;
    text-align: center;
  }

  .section-BotEa_Manage .table td:nth-child(3) {
    width: 20%;
    text-align: center;
  }

  .section-BotEa_Manage .table td:nth-child(4) {
    width: 20%;
    text-align: center;
  }

  .section-BotEa_Manage .table td:nth-child(5) {
    width: 20%;
    text-align: center;
  }



  .section-BotEa_Manage table tr.border-line {
    margin-bottom: 15px;
    background-color: #373334;
    position: relative;
    border-radius: 6px;
    color: #fff;
    display: block;

  }


  .section-BotEa_Manage .table thead th {
    vertical-align: bottom;
    border-bottom: 0px;
  }

  .section-BotEa_Manage .table>:not(:first-child) {
    border-top: 0px;
  }

  .text-green {
    color: #33ff00 !important;
  }

  .text-sky {
    color: #00c9b7 !important;
  }

</style>
