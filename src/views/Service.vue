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
          img: require('@/assets/service1.jpg'),
          imgPosition: "left",
          title: "BATH & BRUSH-OUT",
          content:
          "NAIL TRIMMING / GRINDING <br /> EAR CLEANING / PLUCKING <br />  CUSTOMIZED BATH <br />  THOROUGH BLOW-DRY & BRUSH-OUT <br />  OPTIONAL BOWS / BANDANNA / COLOGNE​​​",
        },
        {
          img: require('@/assets/serviceCat.jpeg'),
          imgPosition: "right",
          title: "TOUCH-UP",
          content:
            "NAIL TRIMMING / GRINDING  <br /> EAR CLEANING/ PLUCKING  <br /> CUSTOMIZED BATH  <br /> THOROUGH BLOW-DRY & BRUSH-OUT  <br /> LIGHT BODY TRIM  <br /> OPTIONAL BOWS / BANDANNA/ COLOGNE",
        },
        {
          img: require('@/assets/serviceDog.jpeg'),
          imgPosition: "left",
          title: "FULL GROOM",
          content:
            "NAIL TRIMMING / GRINDING  <br /> EAR CLEANING/ PLUCKING  <br /> CUSTOMIZED BATH  <br /> THOROUGH BLOW-DRY & BRUSH-OUT  <br /> FULL HAIRCUT  <br /> OPTIONAL BOWS / BANDANNA/ COLOGNE​",
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
