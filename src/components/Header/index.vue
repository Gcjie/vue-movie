<template>
  <div>
    <header id="header">
      <h1>鬼才私人影院</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "Hearder",
};
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 50px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  // position: relative;
  position: fixed;
  z-index: 999;
  h1 {
    font-size: 18px;
    text-align: center;
    line-height: 50px;
    font-weight: normal;
  }
  i {
    position: absolute;
    left: 5px;
    top: 50%;
    margin-top: -13px;
    font-size: 26px;
  }
}
</style>
