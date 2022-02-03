<template>
  <div id="id_botflix_area">
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content">
        <Header />
        <Leftsidebar />
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 panel-page">
              <div class="row">
                <div class="col-lg-9">
                  <h5>Board Community</h5>
                  <div id="autocomplete" class="autocomplete">
                    <input type="text" class="autocomplete-input" placeholder="Type in to search .."
                      aria-label="Type in to search ..">
                  </div>
                  <b-tabs content-class="mt-3 section-content">
                    <div class="scrollmenu" v-for="tab in itemstab" :key="tab.id">
                      <b-tab :title="tab.Name">
                        <section class="articlecontent" v-for="i in tab.itemscategory" :key="i.id">
                          <h6>{{ i.Namecategory}}</h6>
                          <hr>
                          <div class="com-slick card-content row">
                            <div class="col-lg-12" v-for="items in i.itemslist" :key="items.id">
                              <b-card no-body>
                                <b-link href="/community/detail">
                                  <b-card-img :src="`${items.Cardimg}`" alt="Image Responsive" class="rounded-0">
                                  </b-card-img>
                                </b-link>
                                <b-card-body>
                                  <h4 class="card-title">{{items.Cardname}}</h4>
                                  <b-card-text>
                                    {{items.Cardtext}}
                                  </b-card-text>
                                </b-card-body>
                              </b-card>
                            </div>
                          </div>
                        </section>
                      </b-tab>
                    </div>
                  </b-tabs>
                </div>
                <div class="col-lg-3">
                  <NewRight />
                  <Widget />
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
  import NewRight from '@/components/Popular_articles/new-post'
  import Widget from '@/components/Popular_articles/widget'

  export default {
    components: {
      Leftsidebar,
      Header,
      NewRight,
      Widget,
    },

    data() {
      return {
        section1: [{
            id: 1,
            image: require('@/assets/images/img-avatar.png'),
          },
          {
            id: 2,
            image: require('@/assets/images/img-avatar-2.png'),
          },
          {
            id: 3,
            image: require('@/assets/images/img-avatar-3.png'),
          },
        ],
        itemstab: [{
            id: 1,
            Name: "Over view",
            itemscategory: [{
                id: 1,
                Namecategory: "Forex",
                itemslist: [{
                    id: 1,
                    Cardname: "เปิดตัว Botfilx",
                    Cardimg: require('@/assets/upload/bf-img.png'),
                    Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",
                  },
                  {
                    id: 2,
                    Cardname: "เปิดตัว Botfilx",
                    Cardimg: require('@/assets/upload/bf-img-1.png'),
                    Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",

                  },
                  {
                    id: 3,
                    Cardname: "เปิดตัว Botfilx",
                    Cardimg: require('@/assets/upload/bf-img.png'),
                    Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",

                  },
                  {
                    id: 4,
                    Cardname: "เปิดตัว Botfilx",
                    Cardimg: require('@/assets/upload/bf-img.png'),
                    Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",

                  },
                  {
                    id: 5,
                    Cardname: "เปิดตัว Botfilx",
                    Cardimg: require('@/assets/upload/bf-img.png'),
                    Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",
                  },
                ]
              },
              {
                id: 2,
                Namecategory: "Cryptocurrency",
                itemslist: [{
                    id: 1,
                    Cardname: "เปิดตัว Botfilx",
                    Cardimg: require('@/assets/upload/bf-img.png'),
                    Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",
                  },
                  {
                    id: 2,
                    Cardname: "เปิดตัว Botfilx",
                    Cardimg: require('@/assets/upload/bf-img-1.png'),
                    Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",

                  },
                  {
                    id: 3,
                    Cardname: "เปิดตัว Botfilx",
                    Cardimg: require('@/assets/upload/bf-img.png'),
                    Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",

                  },
                  {
                    id: 4,
                    Cardname: "เปิดตัว Botfilx",
                    Cardimg: require('@/assets/upload/bf-img.png'),
                    Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",

                  },
                  {
                    id: 5,
                    Cardname: "เปิดตัว Botfilx",
                    Cardimg: require('@/assets/upload/bf-img.png'),
                    Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",
                  },
                ]
              },
            ],
          },
   
{
            id: 2,
            Name: "Top list",
            itemscategory: [{
                id: 1,
                Namecategory: "Top",
                itemslist: [{
                    id: 1,
                    Cardname: "เปิดตัว Botfilx",
                    Cardimg: require('@/assets/upload/bf-img.png'),
                    Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",
                  },
                  {
                    id: 2,
                    Cardname: "เปิดตัว Botfilx",
                    Cardimg: require('@/assets/upload/bf-img-1.png'),
                    Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",

                  },
                  {
                    id: 3,
                    Cardname: "เปิดตัว Botfilx",
                    Cardimg: require('@/assets/upload/bf-img.png'),
                    Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",

                  },
                  {
                    id: 4,
                    Cardname: "เปิดตัว Botfilx",
                    Cardimg: require('@/assets/upload/bf-img.png'),
                    Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",

                  },
                  {
                    id: 5,
                    Cardname: "เปิดตัว Botfilx",
                    Cardimg: require('@/assets/upload/bf-img.png'),
                    Cardtext: "Botfilx แพรตฟอร์ม ตาม Signal EA เปิดตัว อย่างยิ่งใหญ่ นักลงทุนทั้งในวงการ Forexและนักลงทุนหน้าใหม่ ให้ควาสนใจเป็นอย่างมาก ภายในแพรตฟอร์มมี EA ให้....",
                  },
                ]
              },
            ],
          },

        ],
      }
    },

    mounted() {
      $(document).ready(function () {
        $('.com-slick').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 1,
          autoplay: true,
          autoplaySpeed: 2500,
          dots: false,
          pauseOnHover: true,
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            }
          }, {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
            }
          }, {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
              margin: 10,
              navText: [],
            }

          }]
        });
        $('.com-slick2').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 1,
          autoplay: true,
          autoplaySpeed: 2500,
          dots: false,
          pauseOnHover: true,
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            }
          }, {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
            }
          }, {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
              margin: 10,
              navText: [],
            }

          }]
        });
      });
    }


  }

</script>

<style>
  .nav-tabs {
    border-bottom: 1px solid transparent;
  }

  .nav-link {
    display: block;
    padding: 0.25rem;
    margin: 0 0.5rem;
    font-size: 1.2rem;
    font-weight: 400;
  }

  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active {
    color: #9b999a;
    background-color: transparent;
    border-bottom: 3px solid;
    border-image: linear-gradient(90deg, rgba(178, 127, 43, 1) 0%, rgba(254, 242, 163, 1) 50%, rgba(178, 127, 43, 1) 100%);
    border-image-slice: 1;
    border-top: none;
    border-right: none;
    border-left: none;
  }

  .nav-tabs .nav-link {
    margin-bottom: -1px;
    color: #9b999a;
    border: 0;
    border-top-left-radius: 0rem;
    border-top-right-radius: 0rem;
  }


  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-link:focus {
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 3px solid;
    border-image: linear-gradient(90deg, rgba(178, 127, 43, 1) 0%, rgba(254, 242, 163, 1) 50%, rgba(178, 127, 43, 1) 100%);
    border-image-slice: 1;
  }

  .nav-tabs .nav-link:hover::after {
    display: block;
    content: '';
    position: relative;
    top: 8px;
    left: 0;
    border: 0px;
    border-bottom: 2px solid;
    -o-border-image: linear-gradient(90deg, rgba(178, 127, 43, 1) 0%, rgba(254, 242, 163, 1) 50%, rgba(178, 127, 43, 1) 100%);
    border-image: linear-gradient(90deg, rgba(178, 127, 43, 1) 0%, rgba(254, 242, 163, 1) 50%, rgba(178, 127, 43, 1) 100%);
    border-image-slice: 1;
    opacity: 1;
    filter: blur(4px);
    width: 100%;
  }

  .nav-tabs .nav-link.active::after {
    display: block;
    content: '';
    position: relative;
    top: 8px;
    left: 0;
    border: 0px;
    border-bottom: 2px solid;
    -o-border-image: linear-gradient(90deg, rgba(178, 127, 43, 1) 0%, rgba(254, 242, 163, 1) 50%, rgba(178, 127, 43, 1) 100%);
    border-image: linear-gradient(90deg, rgba(178, 127, 43, 1) 0%, rgba(254, 242, 163, 1) 50%, rgba(178, 127, 43, 1) 100%);
    border-image-slice: 1;
    opacity: 1;
    filter: blur(4px);
    width: 100%;
  }



  #user-avatar-follows {
    position: relative;
    margin-right: 20px;
  }

  #user-avatar-follows .user-avatar-border {
    border: 2px solid #88BC00;
    padding: 4px;
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    overflow: hidden;
    background-size: 100%;
    position: relative;
  }

  #user-avatar-follows .user-avatar-img {
    display: block;
    width: 68px;
    height: 68px;
    padding: 2px;
    border-radius: 100%;
    overflow: hidden;
    background-size: 100%;
    position: relative;
    background-color: #fff;
  }

  #user-avatar-follows .avatarPic img {
    background-color: #fff;
    position: relative;
    text-align: center;
    flex: 0 0 auto;
    height: 75px;
    width: 75px;
  }

  ::placeholder {
    color: #9b999a !important;
  }

</style>
