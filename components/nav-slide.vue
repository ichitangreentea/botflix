<template>
  <div>

    <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
      <img src="@/assets/images/list_menu2.svg" class="" />
    </a>

    <nav id="sidebar" class="sidebar-wrapper">
      <div class="sidebar-content">
        <div class="sidebar-brand">
          <center><img src="@/assets/images/logo2.png" class="img-fluid logo2" /></center>

          <div id="close-sidebar">
            <img src="@/assets/images/list_menu.svg" class="" />
          </div>
        </div>
        <!-- sidebar-header  -->
        <div class="sidebar-menu">
          <ul>
            <li><a href="/choose_plan" :class="{ activeNavMenu: isNavActives1, }"><img src="@/assets/images/icon-1.png"
                  class="" /><span>Promotion</span></a></li>
            <li><a href="/profile" :class="{ activeNavMenu: isNavActives2, }"><img src="@/assets/images/icon-2.png"
                  class="" /><span>My Profile</span></a></li>
            <li><a href="/favorite" :class="{ activeNavMenu: isNavActives3, }"><img src="@/assets/images/icon-3.png"
                  class="" /><span>Favorite</span></a></li>
            <li><a href="/management" :class="{ activeNavMenu: isNavActives4, }"><img src="@/assets/images/icon-4.png"
                  class="" /><span>Management</span></a></li>
            <li><a href="/community" :class="{ activeNavMenu: isNavActives5, }"><img src="@/assets/images/icon-5.png"
                  class="" /><span>Communication</span></a></li>
            <li><a href="/shop" :class="{ activeNavMenu: isNavActives6, }"><img src="@/assets/images/icon-6.png"
                  class="" /><span>Shop</span></a></li>
            <li><a href="/deposit" :class="{ activeNavMenu: isNavActives7, }"><img src="@/assets/images/icon-7.png"
                  class="" /><span>Deposit</span></a></li>
            <li><a href="/security" :class="{ activeNavMenu: isNavActives8, }"><img src="@/assets/images/icon-8.png"
                  class="" /><span>Security</span></a></li>
            <li><a href="/settings" :class="{ activeNavMenu: isNavActives9, }"><img src="@/assets/images/icon-9.png"
                  class="" /><span>Settings</span></a></li>
            <li><a href="/support" :class="{ activeNavMenu: isNavActives10, }"><img src="@/assets/images/icon-10.png"
                  class="" /><span>Support</span></a></li>
          </ul>
        </div>
        <!-- sidebar-menu  -->
        <div class="sidebar-footer">
          <nuxt-link to="" class="btn btn-logout">Logout </nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
  .activeNavMenu {
    display: block;
    color: #ffffff !important;
    background-color: #373334;
    border-bottom: 2px solid #222;
    border-right: 2px solid #222;
    box-shadow: 0px 2px 4px -2px #000;
    opacity: 1 !important;
  }

  .activeNavMenu img {
    opacity: 1 !important;
  }

</style>

<script>
  export default {

    data() {
      return {
        isNavActives1: '',
        isNavActives2: '',
        isNavActives3: '',
        isNavActives4: '',
        isNavActives5: '',
        isNavActives6: '',
        isNavActives7: '',
        isNavActives8: '',
        isNavActives9: '',
        isNavActives10: '',
        url: $nuxt.$route.path.split('/')[1],
      }
    },

    async mounted() {

      console.log(this.url)
      if (this.url == 'choose_plan') {
        this.isNavActives1 = true
      } else if (this.url == 'profile') {
        this.isNavActives2 = true
      } else if (this.url == 'favorite') {
        this.isNavActives3 = true
      } else if (this.url == 'management') {
        this.isNavActives4 = true
      } else if (this.url == 'community') {
        this.isNavActives5 = true
      } else if (this.url == 'shop') {
        this.isNavActives6 = true
      } else if (this.url == 'deposit') {
        this.isNavActives7 = true
      } else if (this.url == 'security') {
        this.isNavActives8 = true
      } else if (this.url == 'settings') {
        this.isNavActives9 = true
      } else if (this.url == 'support') {
        this.isNavActives10 = true
      } else {
        this.isNavActives1 = false
        this.isNavActives2 = false
        this.isNavActives3 = false
        this.isNavActives4 = false
        this.isNavActives5 = false
        this.isNavActives6 = false
        this.isNavActives7 = false
        this.isNavActives8 = false
        this.isNavActives9 = false
        this.isNavActives10 = false
      }


      await setTimeout(() => {
        $(document).ready(function () {
          jQuery(function ($) {

            $(".sidebar-dropdown > a").click(function () {
              $(".sidebar-submenu").slideUp(200);
              if (
                $(this)
                .parent()
                .hasClass("active")
              ) {
                $(".sidebar-dropdown").removeClass("active");
                $(this)
                  .parent()
                  .removeClass("active");
              } else {
                $(".sidebar-dropdown").removeClass("active");
                $(this)
                  .next(".sidebar-submenu")
                  .slideDown(200);
                $(this)
                  .parent()
                  .addClass("active");
              }
            });

            $("#close-sidebar").click(function () {
              $(".page-wrapper").removeClass("toggled");
            });
            $("#show-sidebar").click(function () {
              $(".page-wrapper").addClass("toggled");
            });


            $("#show-sidebar").click(function () {
              $(".hide-logo").addClass("d-none");
            });

            $("#close-sidebar").click(function () {
              $(".hide-logo").removeClass("d-none");
            });
          });

        })
      }, 1000);

    },
  }

</script>
