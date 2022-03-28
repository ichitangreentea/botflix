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
              <a class="nav-link nav-link-border " :class="{ activeMenu: isActives1, }" aria-current="page"
                href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-border " :class="{ activeMenu: isActives2, }" href="#">EA Collection</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-border " :class="{ activeMenu: isActives3, }" href="/about">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-border " :class="{ activeMenu: isActives4, }" href="/contact">Contact us</a>
            </li>
          </ul>

          <div class="ea-coin">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wallet" role="img"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-wallet fa-w-16 fa-lg">
              <path fill="currentColor"
                d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                class=""></path>
            </svg>
            <span class="credit_coin">999</span>Botflix coin
          </div>


          <div class="notification-top">

            <font-awesome-icon :icon="['fas', 'bell']" />
            <span class="badge">2</span>
          </div>
          <div class="login-user">
            <!--  -->
            <!--  -->
            <div id="user-nav" class="d-flex">
              <div id="user-avatar">
                <div class="user-avatar-border">
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
                <li><a class="dropdown-item list-items" href="#"><span class="icon-holder "><i
                        class="far fa-user "></i></span> Account Details</a></li>
                <li><a class="dropdown-item list-items" href="#"><span class="icon-holder "><i
                        class="fas fa-sign-out-alt"></i></span> Log out</a></li>
              </ul>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
    </nav>

    <!-- nav bottom -->
    <div id="bootom-nav-header" class="">
      <nav class="navbar navbar-fixed-bottom ">
        <div class="navbar-collapse">
          <ul class="navbar-nav-bootom">
            <li class="nav-item-bootom"><a class="nav-link-bootom" href="#"><img src="@/assets/images/icon-12.png"
                  class="" /> Home</a></li>
            <li class="nav-item-bootom"><a class="nav-link-bootom" href="#"><img src="@/assets/images/icon-11.png"
                  class="" /> Management</a></li>
            <li class="nav-item-bootom"><a class="nav-link-bootom" href="#"><img src="@/assets/images/icon-4.png"
                  class="" /> EA Collection</a></li>
            <li class="nav-item-bootom"><a class="nav-link-bootom" href="#"><img src="@/assets/images/icon-7.png"
                  class="" /> Deposit</a></li>
            <li class="nav-item-bootom"><a class="nav-link-bootom" href="#"><img src="@/assets/images/icon-6.png"
                  class="" /> Shop</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- nav bottom -->




  </div>
</template>


<style>
  .activeMenu {
    display: block;
    border: 0px;
    border-bottom: 3px solid;
    -o-border-image: linear-gradient(90deg, rgba(178, 127, 43, 1) 0%, rgba(254, 242, 163, 1) 50%, rgba(178, 127, 43, 1) 100%);
    border-image: linear-gradient(90deg, rgba(178, 127, 43, 1) 0%, rgba(254, 242, 163, 1) 50%, rgba(178, 127, 43, 1) 100%);
    border-image-slice: 1;
  }

</style>

<script>
  export default {
    data() {
      return {
        isActives1: '',
        isActives2: '',
        isActives3: '',
        isActives4: '',
        url: $nuxt.$route.path.split('/')[1],
      }
    },

    mounted() {
      console.log(this.url)
      if (this.url == '') {
        this.isActives1 = true
      } else if (this.url == 'ea') {
        this.isActives2 = true
      } else if (this.url == 'about') {
        this.isActives3 = true
      } else if (this.url == 'contact') {
        this.isActives4 = true
      } else {
        this.isActives1 = false
        this.isActives2 = false
        this.isActives3 = false
        this.isActives4 = false
      }
    },

  }

</script>
