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
          <li><a href="/choose_plan"><img src="@/assets/images/icon-1.png" class="" /><span>Promotion</span></a></li>
          <li><a href="/profile"><img src="@/assets/images/icon-2.png" class="" /><span>My Profile</span></a></li>
          <li><a href="/favorite"><img src="@/assets/images/icon-3.png" class="" /><span>Favorite</span></a></li>
          <li><a href="/management"><img src="@/assets/images/icon-4.png" class="" /><span>Management</span></a></li>
          <li><a href="/community"><img src="@/assets/images/icon-5.png" class="" /><span>Communication</span></a></li>
          <li><a href="/shop"><img src="@/assets/images/icon-6.png" class="" /><span>Shop</span></a></li>
          <li><a href="/deposit"><img src="@/assets/images/icon-7.png" class="" /><span>Deposit</span></a></li>
          <li><a href="/security"><img src="@/assets/images/icon-8.png" class="" /><span>Security</span></a></li>
          <li><a href="/settings"><img src="@/assets/images/icon-9.png" class="" /><span>Settings</span></a></li>
          <li><a href="/support"><img src="@/assets/images/icon-10.png" class="" /><span>Support</span></a></li>
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

<script>
  export default {
    async mounted() {
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
