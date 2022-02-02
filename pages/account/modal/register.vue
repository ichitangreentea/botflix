<template>
  <div>

    <b-modal id="modalPopregister" title="" hide-footer>
      <h4 class="text-center mb-4">Register</h4>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <div class="row">
          <b-form-group class="col-6">
            <b-input-group id="input-group-1" label="" label-for="input-1">
              <b-input-group-prepend>
                <span class="input-group-text way_icon"><i class="fa fa-user fa-lg"></i></span>
              </b-input-group-prepend>
              <b-form-input id="input-1" v-model="form.name" placeholder="First Name" required></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group class="col-6">
            <b-input-group id="input-group-2" label="" label-for="input-2">
              <b-input-group-prepend>
                <span class="input-group-text way_icon"><i class="fa fa-user fa-lg"></i></span>
              </b-input-group-prepend>
              <b-form-input id="input-2" v-model="form.lastname" placeholder="Last Name" required></b-form-input>
            </b-input-group>
          </b-form-group>
        </div>
        <b-form-group>
          <b-input-group id="input-group-3" label="" label-for="input-3">
            <b-input-group-prepend>
              <span class="input-group-text way_icon"><i class="fas fa-envelope"></i></span>
            </b-input-group-prepend>
            <b-form-input id="input-3" v-model="form.email" placeholder="Email" required></b-form-input>
          </b-input-group>
        </b-form-group>

        <b-form-group>
          <b-input-group id="input-group-4" label="" label-for="input-4">
            <b-input-group-prepend>
              <span class="input-group-text way_icon"><i class="fas fa-lock fa-lg"></i></span>
            </b-input-group-prepend>
            <b-form-input id="input-4" v-model="form.password" placeholder="Password" required></b-form-input>
          </b-input-group>
        </b-form-group>

        <b-form-group>
          <b-input-group id="input-group-5" label="" label-for="input-5">
            <b-input-group-prepend>
              <span class="input-group-text way_icon"><i class="fas fa-lock fa-lg"></i></span>
            </b-input-group-prepend>
            <b-form-input id="input-5" v-model="form.confirmpassword" placeholder="Confirm Password" required>
            </b-form-input>
          </b-input-group>
        </b-form-group>

        <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-6" :aria-describedby="ariaDescribedby">
            <b-form-checkbox value="agree">i agree to the terms and conditions</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <center>
          <b-button type="submit" variant="" class="btn btn-login">Register</b-button>
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
          lastname: '',
          email: '',
          password: '',
          confirmpassword: '',
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
        this.form.lastname = ''
        this.form.email = ''
        this.form.password = ''
        this.form.confirmpassword = ''
        // Trick to reset/clear native browser form validation state
        this.form.checked = []
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

</style>
