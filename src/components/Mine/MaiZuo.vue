<template>
  <div>
    <van-nav-bar title="卖座券" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  name: "MaiZuo",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>