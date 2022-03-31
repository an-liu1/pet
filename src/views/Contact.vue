<template>
  <div class="contact">
    <el-image src="https://picsum.photos/1920/?image=17" fit="cover"></el-image>

    <div class="contentContainer">
      <div class="row contactTop">
        <div class="col-lg-6 mb-lg-0 mb-lg-5">
          <h6 class="title-subhny mb-2">
            <span>Get in touch with us</span>
          </h6>
          <h3>Let's discuss any services enquiry</h3>
        </div>
        <div class="col-lg-6 pl-lg-5">
          <p class="pt-4">
            We are dedicated to the safety of our guests and employees and have
            updated our safety measures. We believe in Simple, Creative, Modern
            and Flexible Design Standards with a Retina and Responsive Approach.
          </p>
        </div>
      </div>

      <div class="row contactBottom">
        <div class="col-md-6 col-lg-3">
          <div class="contact-info">
            <span class="fa fa-home" aria-hidden="true"></span>
            <h4>Contact Address</h4>
            <p>60 Harnworth Dr, North York, ON M2H 3C2</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="contact-info">
            <span class="fa fa-envelope" aria-hidden="true"></span>
            <h4>Email address</h4>
            <p>
              <a href="mailto:contact@mail.com" class="email"
                >contact@mail.com</a
              >
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="contact-info">
            <span class="fa fa-phone" aria-hidden="true"></span>
            <h4>Contact phone</h4>
            <p><a href="tel:+12 534 891 4364">+12 534 891 4364</a></p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="contact-info">
            <span class="fa fa-clock" aria-hidden="true"></span>
            <h4>Opening hours</h4>
            <p>Mon-Fri: 8 AM - 5 PM</p>
            <p>Sat-Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.4174228516235!2d-79.35681328425599!3d43.80570035057355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3a4112f5e49%3A0x37dfc57417e4d11e!2sHello%20TEC!5e0!3m2!1sen!2sca!4v1648613423895!5m2!1sen!2sca"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  margin-bottom: -50px;
  .el-image {
    width: 100%;
    height: 480px;
  }
  .contentContainer {
    width: 80%;
    margin: 0 auto;
    padding: 80px 0;
    .contactTop {
      text-align: left;
      h6 {
        display: inline-block;
        position: relative;
        z-index: 2;
        span {
          font-size: 20px;
          font-weight: 700;
          text-transform: capitalize;
          line-height: 42px;
          letter-spacing: 0.5px;
          color: #30b300;
          padding-left: 0.83em;
          &::before {
            content: "";
            display: block;
            background: #daffcc;
            width: 2.5em;
            height: 2.5em;
            position: absolute;
            z-index: -1;
            top: -6px;
            border-radius: 6px;
          }
        }
      }
      h3 {
        font-size: 38px;
        color: #252422;
        font-weight: bold;
      }
      p {
        font-size: 18px;
        color: #161c2db3;
      }
    }
    .contactBottom {
      margin: 50px 0;
      color: #161c2db3;
      font-size: 18px;
      .contact-info {
        height: 300px;
        padding: 2.5em 1em;
        background: #fff;
        border-radius: 6px;
        border: 1px solid #eee;
        margin-bottom: 15px;
        span.fa {
          font-size: 20px;
          width: 45px;
          height: 45px;
          line-height: 48px;
          border-radius: 45px;
          padding: 0;
          text-align: center;
          color: #fff;
          display: inline-block;
          border: none;
          background: #30b300;
        }
        h4 {
          font-size: 20px;
          color: #252422;
          margin: 25px 0;
          font-weight: 600;
        }
        a {
          display: block;
          text-decoration: none;
          color: rgba(22, 28, 45, 0.7);
          &:hover {
            color: #252422;
          }
        }
      }
    }
  }
}
</style>
