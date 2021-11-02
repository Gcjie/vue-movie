<template>
  <div>
    <van-nav-bar title="组合红包" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  name: "HongBao",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>