<template>
  <div>
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content">
        <div id="id_botflix_profile">
          <Header />
          <Leftsidebar />
          <div class="banner__profile">
            <b-img center src="@/assets/images/banner-Profile.png" fluid alt="Responsive Center image"
              class="img-shadow" style="width: 100%;">
            </b-img>
            <b-button size="" class="mb-2 float-right mr-2">
              <b-icon icon="plus" aria-hidden="true"></b-icon>
            </b-button>
          </div>
          <!-- sidebar-wrapper  -->
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12 profile-panel-body">
                <div class="row">
                  <div class="col-lg-4 boxProfile-fields profile-picture">
                    <div id="avatarImage" class="designerPic avatar">
                      <b-img src="@/assets/images/original.jpg" class="">
                      </b-img>
                    </div>
                    <div class="personal-section">
                      <b-img center src="@/assets/images/icon-avatar.png" fluid alt="Responsive Center image"
                        class="check-avatar">
                      </b-img>
                      <div class="profile-block">
                        <p class="username">Peeratat Kosayotin</p>
                        <p class="position">Fund manager </p>
                      </div>

                      <div class="Avatar-follow">
                        <div class="HeaderText">
                          <img src="@/assets/images/icon-avatar-follow.png" class="">
                          <p class="numberText">3456</p>
                          <p class="text">Follows</p>
                        </div>
                        <div class="HeaderText">
                          <img src="@/assets/images/icon-avatar-follow-plus.png" class="">
                          <p class="numberText">789</p>
                          <p class="text2">Following</p>
                        </div>
                      </div>
                      <div class="row justify-content-center ">
                        <div class="col-5 pl-0">
                          <b-input-group>
                            <b-form-input id="input-valid" value=" Verified" readonly></b-form-input>
                            <b-input-group-prepend>
                              <span class="input-group-text ">
                                <b-icon icon="check" aria-hidden="true"></b-icon>
                              </span>
                            </b-input-group-prepend>
                          </b-input-group>
                        </div>
                        <div class="col-5 pr-0">
                          <b-input-group>
                            <b-form-input id="input-valid" value="2FA" readonly></b-form-input>
                            <b-input-group-prepend>
                              <span class="input-group-text ">
                                <b-icon icon="check" aria-hidden="true"></b-icon>
                              </span>
                            </b-input-group-prepend>
                          </b-input-group>
                        </div>

                        <div id="inviteCode" class="invite-page  col-10">
                          <input id="link" value="https://www.botfilx.com/Peeratat" readonly>
                          <div id="copy">
                            <i class="fas fa-clone" aria-hidden="true" data-copytarget="#link"></i>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                  <div class="col-lg-5">
                    <div class="profile-panel">
                      <b-link href="#" class="btn btn-md edit-profile">Edit Profile</b-link>
                      <b-link href="#" class="btn btn-md follow-profile "><img
                          src="@/assets/images/icon-avatar-follow-plus.png" width="38" height="24"> Follow</b-link>
                    </div>
                    <div class="botea-panel">
                    <h5>Bot EA</h5>
                    <!--  -->
                     <BotEa />
                    <!--  -->
                    </div>
                  </div>
                  <div class="col-lg-3  ">
                    <PopularRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <!-- page-content" -->
  </div>
</template>

<script>
  import Leftsidebar from '@/components/nav-slide'
  import Header from '@/components/header'
  import PopularRight from '@/components/Popular_articles/ea-popular-posts'
  import BotEa from '@/components/bot/BotEa'
  export default {
    components: {
      Leftsidebar,
      Header,
      PopularRight,
      BotEa,
    },


    async mounted() {
      $(document).ready(function () {

        // functionality to copy text from inviteCode to clipboard

        // trigger copy event on click
        $('#copy').on('click', function (event) {
          console.log(event);
          copyToClipboard(event);
        });

        // event handler
        function copyToClipboard(e) {
          // alert('this function was triggered');
          // find target element
          var
            t = e.target,
            c = t.dataset.copytarget,
            inp = (c ? document.querySelector(c) : null);
          console.log(inp);
          // check if input element exist and if it's selectable
          if (inp && inp.select) {
            // select text
            inp.select();
            try {
              // copy text
              document.execCommand('copy');
              inp.blur();

              // copied animation
              t.classList.add('copied');
              setTimeout(function () {
                t.classList.remove('copied');
              }, 1500);
            } catch (err) {
              //fallback in case exexCommand doesnt work
              alert('please press Ctrl/Cmd+C to copy');
            }

          }

        }


        // ////////////////////////////////////////////////////////////////////////////////////////////////

      })

    },



  }

</script>

<style>

</style>
