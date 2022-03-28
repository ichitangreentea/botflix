<template>
  <div>
    <div class="bf-populated">
      <h5>Top EA</h5>
      <div class="graph-top">
        <b-img center src="@/assets/upload/bf-graph.png" fluid alt="Responsive Center image"></b-img>
      </div>
      <h5>Nottifications</h5>
      <div class="blog-content">
        
        <b-card no-body class="mb-2">
          <b-link href="/community/detail">
          <b-img center src="@/assets/upload/bf-img.png" fluid alt="Responsive Center image"></b-img>
          </b-link>
          <b-card-body>
          <b-card-text>
            <h4 class="card-title">เปิดตัว Botfilx</h4>
            Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forex
            และนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....
          </b-card-text>
          </b-card-body>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        section1: [{
            id: 1,
            image: require('@/assets/images/img-avatar.png'),
          },
          {
            id: 2,
            image: require('@/assets/images/img-avatar-2.png'),
          },
          {
            id: 3,
            image: require('@/assets/images/img-avatar-3.png'),
          },
        ],

      }
    },
  }

</script>
