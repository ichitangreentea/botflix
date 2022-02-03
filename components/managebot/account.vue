<template>
  <div class="scrollaccount">

    <ul class="accoutEA">

      <div class="accoutList" v-for="items in itemsGraph" :key="items.id">
        <div v-if="items.status === 'Y'">
          <li class="styles_item-accout">
            <div class="styles_postContent">
              <p class="text-name">{{items.name}}</p>
              <p class="text-price ">{{items.price}} $</p>
              <p class="text-status text-success"><i class="fas fa-caret-up"></i> {{items.rate}}</p>
              <p class="text-user">{{items.acconut}}</p>
            </div>
            <div class="accout-circle-up"></div>
          </li>
        </div>
        <div v-else>
          <li class="styles_item-accout">
            <div class="styles_postContent">
              <p class="text-name">{{items.name}}</p>
              <p class="text-price ">{{items.price}} $</p>
              <p class="text-status text-danger"><i class="fas fa-caret-down"></i> {{items.rate}}</p>
              <p class="text-user">{{items.acconut}}</p>
            </div>
            <div class="accout-circle-down"></div>
          </li>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        itemsGraph: [{
            id: 1,
            name: "Jos sorost",
            account: "Peeratat",
            price: "340",
            rate: "40%",
            status: "Y"

          },
          {
            id: 2,
            name: "Jos sorost",
            account: "Peeratat",
            price: "400",
            rate: "50%",
            status: "N"
          },
          {
            id: 3,
            name: "Jos sorost",
            account: "Peeratat",
            price: "340",
            rate: "40%",
            status: "Y"

          },
          {
            id: 4,
            name: "Jos sorost",
            account: "Peeratat",
            price: "400",
            rate: "50%",
            status: "N"
          },
                    {
            id: 5,
            name: "Jos sorost",
            account: "Peeratat",
            price: "340",
            rate: "40%",
            status: "Y"

          },
          {
            id: 6,
            name: "Jos sorost",
            account: "Peeratat",
            price: "400",
            rate: "50%",
            status: "N"
          },
                              {
            id: 7,
            name: "Jos sorost",
            account: "Peeratat",
            price: "340",
            rate: "40%",
            status: "Y"

          },
          {
            id: 8,
            name: "Jos sorost",
            account: "Peeratat",
            price: "400",
            rate: "50%",
            status: "N"
          },





        ]
      }
    }
  }

</script>
