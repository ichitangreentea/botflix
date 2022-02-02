<template>
  <div>
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content">
        <Header />
        <Leftsidebar />
        <div id="id_botflix_contact" class="container-fluid ">
          <div class="row">
            <div class="col-lg-12 contact__panel bg-contact ">
              <div class="row " style="justify-content: end;">
                <div class="col-lg-5">
                  <div class="contact__panel-heading ">
                    <h2>Contact us</h2>
                    <form action="" class="contact__panel-body ">
                      <div class="form-group mb-3">
                        <input type="Name" class="form-control" id="First Name" aria-describedby="Name"
                          placeholder="Username">
                      </div>
                      <div class="form-group mb-3">
                        <input type="Name" class="form-control" id="email" aria-describedby="Name" placeholder="Email">
                      </div>
                      <div class="form-group mb-3">
                        <b-form-textarea id="textarea" v-model="text" placeholder="Message" rows="8"></b-form-textarea>

                      </div>

                      <div class="float-right">
                        <bottom class="btn btn-Submit"> Submit</bottom>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
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
    data() {
      return {
        text: ''
      }
    }
  }

</script>
