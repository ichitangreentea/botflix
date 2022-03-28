<template>
  <div>

    <b-modal id="modalPoplogin" title="" hide-footer>
      <b-img center src="@/assets/images/logo2.png" alt="Center image"></b-img>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group>
          <b-input-group id="input-group-1" label="" label-for="input-1">
            <b-input-group-prepend>
              <span class="input-group-text way_icon"><i class="fa fa-user fa-lg"></i></span>
            </b-input-group-prepend>
            <b-form-input id="input-1" v-model="form.name" placeholder="Username" required></b-form-input>
          </b-input-group>
        </b-form-group>

        <b-form-group>
          <b-input-group id="input-group-2" label="" label-for="input-2">
            <b-input-group-prepend>
              <span class="input-group-text way_icon"><i class="fas fa-lock fa-lg"></i></span>
            </b-input-group-prepend>
            <b-form-input id="input-2" v-model="form.password" placeholder="Password" required></b-form-input>
          </b-input-group>
        </b-form-group>



        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4" :aria-describedby="ariaDescribedby">
            <b-form-checkbox value="me">Remember me</b-form-checkbox>
            <b-link href="/account/forgotpassword" class="float-right text-white">Forgot Password?</b-link>
          </b-form-checkbox-group>
        </b-form-group>



        <center>
          <b-button type="submit" variant="" class="btn btn-login">Submit</b-button>
          <b-button v-b-modal.modalPopregister type="submit" variant="" class="btn btn-register">Register </b-button>
        </center>
        <div
          style="width: 100%;height: 16px;border-bottom: 1px solid #bbb;text-align: center;margin-bottom: 0px;margin-top: 20px;">
          <span style="font-size: 18px;background-color: #231f20;padding: 0 10px; color:#bbb; font-weight: 300;">
            or </span>
        </div>
        <center>
          <nuxt-link to="#" class="btn fb-bnt-style"><i class="fab fa-facebook-f"></i> Sign in with Facebook</nuxt-link>
        </center>
        <center>
          <nuxt-link to="#" class="btn google-bnt-style">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" class="abcRioButtonSvg"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
           Sign in with Google</nuxt-link>
        </center>
      </b-form>




    </b-modal>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          password: '',
          checked: []
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
        this.form.name = ''
        this.form.password = ''
        this.form.checked = []
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

  .fb-bnt-style {
    background: #3b5999;
    color: #fff;
    margin: 0!important;
    padding: 13px 0!important;
    border-radius: 4px;
    cursor: pointer;
    width: 100% !important;
    margin-top: 30px !important;
  }

  .google-bnt-style {
    background: #fff;
    color: #000;
    margin: 0!important;
    padding: 13px 0!important;
    border-radius: 4px;
    cursor: pointer;
    width: 100% !important;
    margin-top: 15px !important;
  }
    .google-bnt-style:hover {
    color: #1ca1dc;
  }

</style>
