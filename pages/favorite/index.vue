<template>
  <div id="id_botflix_area" class="">
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content ">
        <Header />
        <Leftsidebar />
        <div class="container-fluid ">
          <div class="row">
            

            
          </div>
        </div>
      </main>
    </div>
  </div>
</template>


<script>
  import Leftsidebar from '@/components/nav-slide'
  import Header from '@/components/header'
  export default {
    components: {
      Leftsidebar,
      Header,
    },
        mounted() {
      $(document).ready(function () { 


        
      });}
        

  }

</script>
<style>
#chart {
  max-width: 650px;
  margin: 35px auto;
}
</style>
