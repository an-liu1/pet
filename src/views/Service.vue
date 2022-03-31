<template>
  <div>
    <el-image src="https://picsum.photos/1920/?image=16" fit="cover"></el-image>

    <serviceCom :serviceList="serviceList" />
  </div>
</template>

<script>
import serviceCom from "@/components/ServiceCom.vue";
export default {
  components: { serviceCom },
  computed: {
    serviceList: function () {
      return [
        {
          img: "https://picsum.photos/1920/?image=20",
          imgPosition: "left",
          title: "We are all about pets",
          content:
            "Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac.Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio consectetur.",
          buttonText: "Read More",
        },
        {
          img: "https://picsum.photos/1920/?image=21",
          imgPosition: "right",
          title: "Established & Trusted Pet Care Service",
          content:
            "Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac.Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio consectetur.",
          buttonText: "Read More",
        },
        {
          img: "https://picsum.photos/1920/?image=22",
          imgPosition: "left",
          title: "Team Experts",
          content:
            "Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget pulvinar neque pharetra ac.Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio consectetur.",
          buttonText: "Read More",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.el-image {
  width: 100%;
  height: 480px;
}
</style>
