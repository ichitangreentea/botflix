<template>
  <div>
    <b-modal id="Identitymodal" title="" hide-footer>
      <div class="row">
        <div class="col-lg-4 left-text ">
          <h5 class="modaltitle"> Identity</h5>
          <div class="body-img">
            <center><img src="@/assets/images/icon-security-bot-1.svg" class="m-3" width="100" height="100" /></center>
          </div>

          <p>e.g. Passport | National ID | Drivers Licence</p>
          <div class="block-list-row">Your Photo ID must be valid and clearly showing your Name, Date of Birth and
            Expiry/Issue date</div>
          <div class="block-list-row">Your Photo ID should be in colour</div>
          <div class="block-list-row">Please attach the front and back of your document as separate files</div>
          <div class="block-list-row">Should be different to other already provided documents</div>
        </div>
        <div class="col-lg-8 right-detail">
          <!--  -->
          <div class="drop-zone">
            <div class="upload-icon-wrap"><img src="@/assets/images/ud-upload.svg" class="info-icon"></div>
            <span class="drop-zone__prompt">Drop file here or click to upload</span>
            <input type="file" name="myFile" class="drop-zone__input">
            <p class="small-text">File Type .pdf, .gif, .png, .doc, .docx, .jpeg and.jpg <br> Max File Size 12 Mb.</p>
          </div>
          <!--  -->
          <div class="modal-footer">
            <button type="button" class="btn btn-upload">
              <i class="fas fa-upload"></i> Upload
            </button>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal id="Email2famodal" title="" hide-footer>
      <div class="row">
        <div class="col-lg-4 left-text ">
          <h5 class="modaltitle"> Email 2FA</h5>
          <div class="body-img">
            <center><img src="@/assets/images/icon-security-bot-2.svg" class="m-3" width="100" height="100" /></center>
          </div>

          <p>e.g. Passport | National ID | Drivers Licence</p>
          <div class="block-list-row">Your Photo ID must be valid and clearly showing your Name, Date of Birth and
            Expiry/Issue date</div>
          <div class="block-list-row">Your Photo ID should be in colour</div>
          <div class="block-list-row">Please attach the front and back of your document as separate files</div>
          <div class="block-list-row">Should be different to other already provided documents</div>
        </div>
        <div class="col-lg-8 right-detail">
          <!--  -->
          <h5>E-mail 2-Factor Authentication </h5>
          <form class="securityFA">
            <hr>
            <p>1.Send authentication code to <b><i>botflix@hotmail.com</i></b> by pressing the button </p>
            <center><button type="submit" class="btn btn-outline-dark mb-3"><i class="fas fa-envelope"></i> Send
                authentication code </button></center>
            <p class="mb-0">2.Go to the inbox <b><i>botflix@hotmail.com</i></b> and find the e-mail from
              botflix@gmail.com wite the subject line "Temporary Authentication Code"</p>
            <small id="Help" class="form-text text-muted mb-3"><i>(Can't find the e-mail? Please check your spam folder
                as well.)</i></small>
            <p>3.Enter the authentication code provided in the e-mail.</p>
            <input type="text" class="form-control w-50" id="exampleInputtext" aria-describedby="text"
              placeholder="Enter 6 digit code">

            <br>
          <div class="modal-footer">
            <button type="button" class="btn btn-sub ">
              ยืนยัน <i class="fas fa-chevron-circle-right"></i>
            </button>
          </div>
          </form>
          <!--  -->

        </div>
      </div>
    </b-modal>

    <b-modal id="SMS2famodal" title="" hide-footer>
      <div class="row">
        <div class="col-lg-4 left-text ">
          <h5 class="modaltitle"> SMS 2FA</h5>
          <div class="body-img">
            <center><img src="@/assets/images/icon-security-bot-3.svg" class="m-3" width="100" height="100" /></center>
          </div>

          <p>e.g. Passport | National ID | Drivers Licence</p>
          <div class="block-list-row">Your Photo ID must be valid and clearly showing your Name, Date of Birth and
            Expiry/Issue date</div>
          <div class="block-list-row">Your Photo ID should be in colour</div>
          <div class="block-list-row">Please attach the front and back of your document as separate files</div>
          <div class="block-list-row">Should be different to other already provided documents</div>
        </div>
        <div class="col-lg-8 right-detail">
          <!--  -->
          <p>ยืนยันการปิดการใช้งาน 2-FACTOR AUTHENTICATION</p>
          <form class="securityFA">
            <div class="form-group w-50">
              <label class="textheader" for="exampleInputtext">หมายเลขโทรศัพท์</label>
              <input type="text" class="form-control" id="exampleInputtext" aria-describedby="text"
                placeholder="กรอกหมายเลขโทรศัพท์มือถือ 10 หลัก">
            </div>
            <hr>
            <div class="form-group ">
              <label class="textheader" for="exampleInputtext">ขอรหัส OTP และระบุ Code 6 หลัก ที่ได้รับจาก SMS</label>
              <div class="d-flex">
                <input type="text" class="form-control w-50" id="exampleInputtext" aria-describedby="text"
                  placeholder="Enter 6 digit code">
                <button type="submit" class="btn btn-sub ml-2 mb-2">ขอรหัส OTP</button>
              </div>
              <small id="Help" class="form-text text-muted">(ขอรหัสใหม่ ใน 59 วินาที) โปรดป้อนรหัส 6 หลักที่ส่งไปที่
                081-*****01 / หากไม่ได้รับข้อความ SMS กรุณากดใหม่อีกครั้ง</small>
            </div>
                      <div class="modal-footer">
            <button type="button" class="btn btn-sub ">
              ยืนยัน <i class="fas fa-chevron-circle-right"></i>
            </button>
          </div>
          </form>
          <!--  -->

        </div>
      </div>
    </b-modal>

    <b-modal id="MTmodal" title="" hide-footer>
      <div class="row">
        <div class="col-lg-4 left-text ">
          <h5 class="modaltitle"> MT4 ID</h5>
          <div class="body-img">
            <center><img src="@/assets/images/icon-security-bot-4.svg" class="m-3" width="100" height="100" /></center>
          </div>

          <p>e.g. Passport | National ID | Drivers Licence</p>
          <div class="block-list-row">Your Photo ID must be valid and clearly showing your Name, Date of Birth and
            Expiry/Issue date</div>
          <div class="block-list-row">Your Photo ID should be in colour</div>
          <div class="block-list-row">Please attach the front and back of your document as separate files</div>
          <div class="block-list-row">Should be different to other already provided documents</div>
        </div>
        <div class="col-lg-8 right-detail">
          <!--  -->
          <p>ยืนยันการปิดการใช้งาน 2-Factor Authentication สำหรับการเทรด</p>

          <!--  -->
        </div>
      </div>
    </b-modal>



  </div>
</template>

<style>

</style>

<script>
  export default {


    async mounted() {
      await setTimeout(() => {
        $(document).ready(function () {
          document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
            const dropZoneElement = inputElement.closest(".drop-zone");

            dropZoneElement.addEventListener("click", (e) => {
              inputElement.click();
            });

            inputElement.addEventListener("change", (e) => {
              if (inputElement.files.length) {
                updateThumbnail(dropZoneElement, inputElement.files[0]);
              }
            });

            dropZoneElement.addEventListener("dragover", (e) => {
              e.preventDefault();
              dropZoneElement.classList.add("drop-zone--over");
            });

            ["dragleave", "dragend"].forEach((type) => {
              dropZoneElement.addEventListener(type, (e) => {
                dropZoneElement.classList.remove("drop-zone--over");
              });
            });

            dropZoneElement.addEventListener("drop", (e) => {
              e.preventDefault();

              if (e.dataTransfer.files.length) {
                inputElement.files = e.dataTransfer.files;
                updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
              }

              dropZoneElement.classList.remove("drop-zone--over");
            });
          });

          /**
           * Updates the thumbnail on a drop zone element.
           *
           * @param {HTMLElement} dropZoneElement
           * @param {File} file
           */
          function updateThumbnail(dropZoneElement, file) {
            let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

            // First time - remove the prompt
            if (dropZoneElement.querySelector(".drop-zone__prompt")) {
              dropZoneElement.querySelector(".drop-zone__prompt").remove();
            }

            // First time - there is no thumbnail element, so lets create it
            if (!thumbnailElement) {
              thumbnailElement = document.createElement("div");
              thumbnailElement.classList.add("drop-zone__thumb");
              dropZoneElement.appendChild(thumbnailElement);
            }

            thumbnailElement.dataset.label = file.name;

            // Show thumbnail for image files
            if (file.type.startsWith("image/")) {
              const reader = new FileReader();

              reader.readAsDataURL(file);
              reader.onload = () => {
                thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
              };
            } else {
              thumbnailElement.style.backgroundImage = null;
            }
          }
        })
      }, 1000);
    },


  }

</script>
