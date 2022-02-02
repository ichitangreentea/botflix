<template>
  <div id="signin-wrapper">
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content">
        <Header />
        <Leftsidebar />
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 ">

              <div class="password-panel">
                <div class="password__panel-heading mb-4">
                  <h3>Forgot A Password?</h3>
                  <p>Simply enter your email address below and we will email you a password reset email.</p>
                </div>

                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group id="input-group-1" label="Email address:" label-for="input-1"
                    description="We'll never share your email with anyone else.">
                    <b-form-input id="input-1" v-model="form.email" type="email" placeholder="" required>
                    </b-form-input>
                  </b-form-group>

                  
        <center>
          <b-button type="submit" variant="" class="btn btn-reset "><i class="far fa-envelope"></i> Reset Password</b-button>
        </center>
                </b-form>






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
        form: {
          email: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values

        this.form.email = ''

        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }

</script>
<style>
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff !important;
    opacity: 1;
    /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #fff !important;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #fff !important;
  }
  .form-control {
    color: #fff;
    border-radius: 0;
    background-color: #9B999A;
    border: 1.25px solid #ced4da;
}
.btn-reset {
    background: linear-gradient( 
90deg
, rgba(178, 127, 43, 1) 0%, rgba(254, 242, 163, 1) 50%, rgba(178, 127, 43, 1) 100%);
    color: #000;
}
.btn-reset:hover {
    color: #fff;
}

</style>
