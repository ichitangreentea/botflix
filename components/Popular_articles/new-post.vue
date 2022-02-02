<template>
  <div>
    <div class="bf-populated">
      <h5>News</h5>
      <div class="blog-content">
        <b-card no-body v-for="i of items" :key="i.id">
          <b-row no-gutters>
            <b-col md="5">
              <b-link href="/community/detail">
                <b-card-img :src="`${i.Cardimg}`" alt="Image Responsive" class="rounded-0"
                  style="width: 100%; height: 100%;  object-fit: cover;"></b-card-img>
              </b-link>

            </b-col>
            <b-col md="7">
              <b-card-body>
                <h4 class="card-title">{{i.Cardname}}</h4>
                <b-card-text>
                  {{i.Cardtext}}
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [{
            id: 1,
            Cardname: "เปิดตัว Botfilx",
            Cardimg: require('@/assets/upload/bf-img.png'),
            Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",
          },
          {
            id: 2,
            Cardname: "เปิดตัว Botfilx",
            Cardimg: require('@/assets/upload/bf-img-1.png'),
            Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",

          },
          {
            id: 3,
            Cardname: "เปิดตัว Botfilx",
            Cardimg: require('@/assets/upload/bf-img.png'),
            Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",

          },


        ]
      };
    }
  };

</script>

<style>
  .bf-populated .blog-content .card {
    margin-bottom: 15px;
  }

  .bf-populated .blog-content h4.card-title {
    margin-bottom: 0.25rem;
    font-size: 15px;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

  .bf-populated .blog-content p.card-text {
    font-size: 12px;
    margin-bottom: 0;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

</style>
