<template>
  <div>
      <Nuxt />
      <ModalLogin />
      <ModalRegister />
  </div>
</template>

<script>
  import ModalLogin from '@/pages/account/modal/login'
  import ModalRegister from '@/pages/account/modal/register'
  export default {
    components: {
      ModalLogin,
      ModalRegister,
    },
  }
</script>



