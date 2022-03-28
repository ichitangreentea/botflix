<template>
  <div>
      <Nuxt />
      <!-- <ModalLogin />
      <ModalRegister /> -->
  </div>
</template>

<script>
  // import ModalLogin from '@/pages/modal/login'
  // import ModalRegister from '@/pages/modal/register'
  export default {
    components: {
      // ModalLogin,
      // ModalRegister,
    },
      head: {
    script: [
      {
         async: true,
        type: "text/javascript",
        src: "/assets/js/style.j",
      },
      {
         async: true,
        type: "text/javascript",
        src: "/assets/js/main-slick.js",
      },
      {
         async: true, 

        type: "text/javascript",
        src: "/assets/js/slick.js",
      },
     
    ],
  },
  }
</script>



