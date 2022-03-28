<template>
  <div>

    <div class="col-md-12 personaltab rounded">
      <div class="row">
        <div class="col-md-4 border-right mb-3">
          <h4 class="mt-3">ACCOUNT DETAILS</h4>
          <div class="d-flex flex-column align-items-center text-center p-3 mt-3"><img class="rounded-circle "
              src="https://i.imgur.com/O1RmJXT.jpg" width="140">
          </div>
          <center><span><i class="fas fa-camera"></i> เปลี่ยนภาพถ่าย</span></center>
        </div>
        <div class="col-md-8 border-right">
          <div class="p-3 mt-2">
            <div id="generalInfo" class="ca-form-wrapper two-col mb-3">
              <h6>General Information</h6>

              <div class=" ca-frm-fld inline-fld-group mt-3">
                <div class="col-md-6">
                  <label>First Name</label>
                  <input type="text" class="form-control" placeholder="" value="">
                </div>
                <div class="col-md-6">
                  <label>Last Name</label>
                  <input type="text" class="form-control" placeholder="" value="">
                </div>
              </div>
              <div class=" ca-frm-fld inline-fld-group ">
                <div class="col-md-6">
                  <label>Email address</label>
                  <input type="text" class="form-control" placeholder="" value="">
                </div>
                <div class="col-md-6">
                  <label>Phone number</label>
                  <input type="text" class="form-control" placeholder="" value="">
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="col-12 border-top">
          <div class="p-3 mt-2">

            <div id="AddressInformation" class="mb-3">
              <h6>Address Information</h6>

              <div class=" ca-frm-fld inline-fld-group mt-3">
                <div class="col-md-6">
                  <label>Address</label>
                  <input type="text" class="form-control" placeholder="" value="">
                </div>
                <div class="col-md-6">
                  <label class="" for="inputBirthday">Birthday</label>
                  <input class="form-control" id="inputBirthday" type="text" name="birthday"
                    placeholder="Enter your birthday" value="06/10/1988">
                </div>
              </div>
              <div class=" ca-frm-fld inline-fld-group ">
                <div class="col-md-6">
                  <label>City </label>
                  <input type="text" class="form-control" placeholder="" value="">
                </div>
                <div class="col-md-6">
                  <label>State / Province</label>
                  <input type="text" class="form-control" placeholder="" value="">
                </div>
              </div>
              <div class=" ca-frm-fld inline-fld-group ">
                <div class="col-md-6">
                  <label>Zip Code </label>
                  <input type="text" class="form-control" placeholder="" value="">
                </div>
                <div class="col-md-6">
                  <label>Country</label>
                  <input type="text" class="form-control" placeholder="" value="">
                </div>
              </div>
            </div>

          </div>
        </div>


        <div class="mb-4">
          <button type="submit" class="btn btn-sub ml-2 mb-2 mr-4 float-right">Update</button>
        </div>

        <div class="col-12 border-top">
          <div id="AddressInformation" class="p-3 mt-2">

            <div class="col-6 ca-frm-fld inline-fld-group ">
              <label>Username</label>
              <input type="text" class="form-control" readonly="readonly" disabled="disabled"
                value="Botfilx@hotmail.com">
            </div>
            <div class="col-6 ca-frm-fld inline-fld-group">
              <label>Client Id</label>
              <input type="text" class="form-control" readonly="readonly" disabled="disabled" value="3856954">
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style>

</style>
<script>
  export default {

  }

</script>
