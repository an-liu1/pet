<template>
  <div>
    <div class="carouselContainer">
      <el-carousel trigger="click" height="880px">
        <el-carousel-item v-for="(i, index) in slideList" :key="index">
          <el-image :src="i.imgPath" fit="fit"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <serviceCom :serviceList="serviceList" />

    <div class="testimonial">
      <el-carousel trigger="click" height="400px" indicator-position="none">
        <el-carousel-item
          class="testimonialSlide"
          v-for="(i, index) in testimonialList"
          :key="index"
        >
          <el-avatar size="large" :src="i.avatar"></el-avatar>
          <h3>{{ i.content }}</h3>
          <p class="name">{{ i.name }}</p>
          <p class="petName">{{ i.petName }}</p>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import serviceCom from "@/components/ServiceCom.vue";
export default {
  components: { serviceCom },
  data() {
    return {
      slide: 0,
    };
  },
  computed: {
    slideList: function () {
      return [
        {
          imgPath: require('@/assets/homeSlider1.png'),
          title: "First",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
        {
          imgPath: require('@/assets/homeSlider2.jpeg'),
          title: "Second",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
        {
          imgPath: require('@/assets/homeSlider3.jpeg'),
          title: "Third",
          text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
      ];
    },
    serviceList: function () {
      return [
        {
          img: require('@/assets/homeService1.png'),
          imgPosition: "left",
          title: "We are all about pets",
          content:
            "Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac.Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio consectetur.",
          buttonText: "Read More",
        },
        {
          img: require('@/assets/homeService2.png'),
          imgPosition: "right",
          title: "Established & Trusted Pet Care Service",
          content:
            "Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac.Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio consectetur.",
          buttonText: "Read More",
        },
      ];
    },
    testimonialList: function () {
      return [
        {
          avatar: "https://picsum.photos/1920/?image=32",
          content:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which  roasted parts of sentences fly into your mouth.",
          name: "Pete Sariya",
          petName: "Happy dog owner",
        },
        {
          avatar: "https://picsum.photos/1920/?image=33",
          content:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which  roasted parts of sentences fly into your mouth.",
          name: "Pete Sariya",
          petName: "Happy dog owner",
        },
        {
          avatar: "https://picsum.photos/1920/?image=34",
          content:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which  roasted parts of sentences fly into your mouth.",
          name: "Pete Sariya",
          petName: "Happy dog owner",
        },
      ];
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.testimonial {
  width: 100%;
  height: 600px;
  background-color: #fae9d8;
  .el-carousel {
    width: 80%;
    margin: 0 auto;
    padding-top: 100px;
    .testimonialSlide {
      .el-avatar {
        width: 132px;
        height: 132px;
      }
      h3 {
        line-height: 1.5;
        padding-left: 100px;
        padding-right: 100px;
        margin-top: 20px;
        margin-bottom: 30px;
        font-size: 26px;
        color: #4b423a;
        font-weight: bold;
      }
      .name {
        color: #4b423a;
        font-size: 22px;
        font-weight: 700;
      }
      .petName {
        color: #716455;
        font-weight: 500;
        line-height: 1.5;
      }
    }
  }
}
</style>
