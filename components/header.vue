<template>
  <div>

    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand hide-logo d-none" href="#"><img src="@/assets/images/logo.png" class="" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link nav-link-border " aria-current="page" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-border " href="#">EA Collection</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-border " href="/about">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-border  active " href="/contact">Contact us</a>
            </li>
          </ul>

          <div class="notification-top">
            <font-awesome-icon :icon="['fas', 'bell']" />
            <span class="badge">2</span>
          </div>
          <div class="login-user">
            <!--  -->
            <nuxt-link to="#" v-b-modal.modalPoplogin class="btn btn-Signin">Sign in </nuxt-link>
            <!--  -->
            <!-- <div id="user-nav" class="d-flex">
              <div id="user-avatar">
                <div class="user-avatar-border" >
                  <div class="user-avatar-img avatarPic">
                    <img src="@/assets/images/img-avatar.png" class="" width="" height="" />
                  </div>
                </div>
              </div>
              <div id="user-name">
                <span class="">Hello, Peeratat</span>
              </div>
              <a class="dropdown-toggle" href="#" id="btn-userDetail" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <font-awesome-icon :icon="['fas', 'chevron-down']" />
              </a>
              <ul class="dropdown-menu " aria-labelledby="btn-userDetail">
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div> -->
            <!--  -->
          </div>
        </div>
      </div>
    </nav>
    <login />
  </div>
</template>


<style>


</style>

<script>
  export default {
    async mounted() {
      await setTimeout(() => {
        $(document).ready(function () {
        })
      }, 1000);
    },
  }
</script>
