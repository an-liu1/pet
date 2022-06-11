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
        <div class="col-md-6 col-lg-6">
          <div class="contact-info">
            <span class="fa fa-envelope" aria-hidden="true"></span>
            <h4>Contact Us</h4>
            <p>1 Spadina Rd, Richmond Hill, ON L4B 3M2</p>
             <p><a href="tel:+1 289 809 8558">+1 (289) 809-8558</a></p>
            <p>
              <a href="mailto:multipaw2021@gmail.com" class="email"
                >multipaw2021@gmail.com</a
              >
            </p>
            <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div class="contact-info">
            <span class="fa fa-clock" aria-hidden="true"></span>
            <h4>Opening hours</h4>
            <p>Mon: 10:30 am – 8 pm</p>
            <p>Tue: Closed</p>
            <p>Wed - Sun: 10:30 am – 8 pm</p>
            <el-divider><i class="el-icon-time"></i></el-divider>
          </div>
        </div>
      </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.73767446826!2d-79.39776678499042!3d43.86126557911469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2b153247c3c9%3A0x41d39bce2546ee23!2sMultipaw%20Pet%20Lifestyle!5e0!3m2!1sen!2sca!4v1654891003382!5m2!1sen!2sca" 
      width="85%"
      height="450"
      style="margin-bottom: 50px"
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
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
          color: #f2d3b2;
          padding-left: 0.83em;
          &::before {
            content: "";
            display: block;
            background: #fcf0e5;
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
        color: #4b423a;
        font-weight: bold;
      }
      p {
        font-size: 18px;
        color: #4b423a;
      }
    }
    .contactBottom {
      margin: 50px 0;
      color: #161c2db3;
      font-size: 18px;
      .contact-info {
        height: 330px;
        padding: 2.5em 1em;
        background: #fff;
        border-radius: 6px;
        border: 1px solid #eee;
        margin-bottom: 0px;
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
          background: #F2D3B2;
        }
        h4 {
          font-size: 20px;
          color: #4b423a;
          margin: 25px 0;
          font-weight: 600;
        }
        a {
          display: block;
          text-decoration: none;
          color: #4b423a;
          &:hover {
            color: #252422;
          }
        }
        p {
        font-size: 16px;
        color: #4b423a;
        }
      }
    }
  }
}
</style>
