<template>
  <div id="id_botflix_area">
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content">
        <Header />
        <Leftsidebar />

        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 panel-page">
              <div class="security-panel-heading">
                <h3>Bot EA</h3>
              </div>
              <div class="row security-panel-body ">
                <ul class="postsList">

                  <li href="" class="styles_item-botEa">
                    <div class="styles_postContent">
                      <div class="styles_content-img ">
                        <img src="@/assets/images/icon-security-bot-1.svg" class="" width="100" height="100" />
                      </div>
                      <div class="styles_content-text ">
                        <p>Identity <img src="@/assets/images/icon-check.svg" class="ml-2 mr-4" width="40"
                            height="40" /></p>
                      </div>
                      <a class="right-nexxt" href="#" aria-expanded="false">
                        <font-awesome-icon :icon="['fas', 'chevron-right']" />
                      </a>
                    </div>
                  </li>
                  <li href="" class="styles_item-botEa">
                    <div class="styles_postContent">
                      <div class="styles_content-img ">
                        <img src="@/assets/images/icon-security-bot-2.svg" class="" width="100" height="100" />
                      </div>
                      <div class="styles_content-text ">
                        <p>Email 2FA <img src="@/assets/images/icon-check.svg" class="ml-2 mr-4" width="40"
                            height="40" /></p>
                      </div>
                      <a class="right-nexxt" href="#" aria-expanded="false">
                        <font-awesome-icon :icon="['fas', 'chevron-right']" />
                      </a>
                    </div>
                  </li>
                </ul>
                <ul class="postsList">

                  <li href="" class="styles_item-botEa">
                    <div class="styles_postContent">
                      <div class="styles_content-img ">
                        <img src="@/assets/images/icon-security-bot-3.svg" class="" width="100" height="100" />
                      </div>
                      <div class="styles_content-text ">
                        <p>SMS 2FA<img src="@/assets/images/icon-check.svg" class="ml-2 mr-4" width="40" height="40" />
                        </p>
                      </div>
                      <a class="right-nexxt" href="#" aria-expanded="false">
                        <font-awesome-icon :icon="['fas', 'chevron-right']" />
                      </a>
                    </div>
                  </li>
                  <li href="" class="styles_item-botEa">
                    <div class="styles_postContent">
                      <div class="styles_content-img ">
                        <img src="@/assets/images/icon-security-bot-4.svg" class="" width="100" height="100" />
                      </div>
                      <div class="styles_content-text ">
                        <p>MT4 ID <img src="@/assets/images/icon-check.svg" class="ml-2 mr-4" width="40" height="40" />
                        </p>

                      </div>
                      <a class="right-nexxt" href="#" aria-expanded="false">
                        <font-awesome-icon :icon="['fas', 'chevron-right']" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="security-panel-heading">
                <h3>Devices</h3>
              </div>
              <div class="row security-panel-body ">
                <ul class="postsList">

                  <li class="styles_item-devices">
                    <div class="styles_postContent">
                      <div class="styles_content-img ">
                        <img src="@/assets/images/icon-security-1.svg" class="" width="30" height="30" />
                      </div>
                      <div class="styles_content-text ">
                        <p>PC</p>
                      </div>
                    </div>
                    <div class="item-completed">
                      <div class="form-completed">
                        <label class="text-order">Name :</label>
                        <div>DESKTOP-xxxxxxxx</div>
                      </div>
                      <div class="form-completed">
                        <label class="text-order">Date :</label>
                        <div>2021-10-13</div>
                      </div>
                      <div class="form-completed">
                        <label class="text-order">Location :</label>
                        <div>รังสิต , ประเทศไทย</div>
                      </div>
                    </div>
                  </li>

                  <li class="styles_item-devices">
                    <div class="styles_postContent">
                      <div class="styles_content-img ">
                        <img src="@/assets/images/icon-security-2.svg" class="" width="30" height="30" />
                      </div>
                      <div class="styles_content-text ">
                        <p>Chrome (Windows)</p>
                      </div>
                    </div>
                    <div class="item-completed">
                      <div class="form-completed">
                        <label class="text-order">IP :</label>
                        <div>1.123.456.56</div>
                      </div>
                      <div class="form-completed">
                        <label class="text-order">Date :</label>
                        <div>2021-10-13</div>
                      </div>
                      <div class="form-completed">
                        <label class="text-order">Location :</label>
                        <div>รังสิต , ประเทศไทย</div>
                      </div>
                    </div>

                  </li>




                </ul>
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

  }

</script>
<style>

</style>
