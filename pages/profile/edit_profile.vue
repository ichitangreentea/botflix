<template>
  <div>
    <div class="page-wrapper chiller-theme toggled">
      <main class="page-content">
        <div id="id_botflix_profile">
          <Header />
          <Leftsidebar />
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12 edit-panel-body">

                <div class=" px-4 mt-4">
                  <div class="row">
                    <div class="col-xl-4">
                      <!-- Profile picture card-->
                      <div class="card mb-4 mb-xl-0">
                        <div class="card-header">Profile Picture</div>
                        <div class="card-body text-center">
                          <!-- Profile picture image-->
                          <img class="img-account-profile rounded-circle mb-2"
                            src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="">
                          <!-- Profile picture help block-->
                          <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                          <!-- Profile picture upload button-->
                          <button class="btn btn-save " type="button">Upload new image</button>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-8">
                      <!-- Account details card-->
                      <div class="card mb-4">
                        <div class="card-header">Account Details</div>
                        <div class="card-body">
                          <form>
                            <!-- Form Row-->
                            <div class="row gx-3 mb-3">
                              <!-- Form Group (first name)-->
                              <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">First name</label>
                                <input class="form-control" id="inputFirstName" type="text"
                                  placeholder="Enter your first name" value="">
                              </div>
                              <!-- Form Group (last name)-->
                              <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Last name</label>
                                <input class="form-control" id="inputLastName" type="text"
                                  placeholder="Enter your last name" value="">
                              </div>
                            </div>
                            <!-- Form Row        -->
                            <div class="row gx-3 mb-3">
                              <!-- Form Group (organization name)-->
                              <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName">Organization name</label>
                                <input class="form-control" id="inputOrgName" type="text"
                                  placeholder="Enter your organization name" value="">
                              </div>
                              <!-- Form Group (location)-->
                              <div class="col-md-6">
                                <label class="small mb-1" for="inputLocation">Location</label>
                                <input class="form-control" id="inputLocation" type="text"
                                  placeholder="Enter your location" value="">
                              </div>
                            </div>
                            <!-- Form Group (email address)-->
                            <div class="mb-3">
                              <label class="small mb-1" for="inputEmailAddress">Email address</label>
                              <input class="form-control" id="inputEmailAddress" type="email"
                                placeholder="Enter your email address" value="">
                            </div>
                            <!-- Form Row-->
                            <div class="row gx-3 mb-3">
                              <!-- Form Group (phone number)-->
                              <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                <input class="form-control" id="inputPhone" type="tel"
                                  placeholder="Enter your phone number" value="">
                              </div>
                              <!-- Form Group (birthday)-->
                              <div class="col-md-6">
                                <label class="small mb-1" for="inputBirthday">Birthday</label>
                                <input class="form-control" id="inputBirthday" type="text" name="birthday"
                                  placeholder="Enter your birthday" value="">
                              </div>
                            </div>
                            <!-- Save changes button-->
                            <button class="btn btn-save " type="button">Save changes</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
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
  export default {
    components: {
      Leftsidebar,
      Header,
    },
  }

</script>

<style scoped>
  .img-account-profile {
    height: 10rem;
  }

  .rounded-circle {
    border-radius: 50% !important;
  }

  .card {
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
    background-color:  #231f20;
    color: #fff;
    font-size: 16px;
  }

  .card .card-header {
    font-weight: 500;
  }

  .card-header:first-child {
    border-radius: 0.35rem 0.35rem 0 0;
  }

  .card-header {
    padding: 1rem 1.35rem;
    margin-bottom: 0;
    border-bottom: 1px solid rgb(255 255 255 / 13%);
  }
.edit-panel-body .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    background-color: #333;
    opacity: 0.9;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
  .edit-panel-body .btn-save {
    background-image: linear-gradient(to right, #1ca1dc 0%, #72c5ef 40%, #1ca1dc 100%);
    color: #fff;
}


.edit-panel-body .btn {
    border-radius: 20px;
    font-size: 18px;
    font-weight: 400;
    padding: 0.25rem 1.5rem;
    margin: 0 0.75rem;
    transition: 0.5s;
    background-size: 200% auto;
}
  .edit-panel-body .btn-save:hover {
    color: #000;
    background-position: right center;
}
</style>
