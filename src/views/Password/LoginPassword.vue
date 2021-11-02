<template>
  <div>
    <div class="header">
      <van-nav-bar title="设置登录密码" left-arrow @click-left="onClickLeft" />
    </div>
    <Phone v-show="this.$store.state.isshow == 1"></Phone>
    <VCode v-show="this.$store.state.isshow == 2"></VCode>
    <Password v-show="this.$store.state.isshow == 3"></Password>
  </div>
</template>

<script>
import Phone from "@/components/LoginWord/Phone.vue";
import VCode from "@/components/LoginWord/VCode.vue";
import Password from "@/components/LoginWord/Password.vue";
export default {
  name: "LossPassword",
  data() {
    return {};
  },
  components: {
    Phone,
    VCode,
    Password,
  },
  methods: {
    onClickLeft() {
      this.$store.commit("retShow");
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang='scss'>
</style>