<template>
  <div>
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />
    <div class="body_centen">
      <div class="centen-list">
        <span class="centen-left">账号ID</span>
        <span class="centen-right">231647588</span>
      </div>
      <div class="centen-list" @click="goLogin">
        <span class="centen-left">登录密码</span>
        <span class="centen-right">设置<span class="icon">&gt;</span></span>
      </div>
      <div class="centen-list">
        <span class="centen-left">安全密码</span>
        <span class="centen-right">未设置<span class="icon">&gt;</span></span>
      </div>
      <div class="centen-list">
        <span class="centen-left">软件版本</span>
        <span class="centen-right"><span class="icon">&gt;</span></span>
      </div>
      <div class="centen-list">
        <span class="centen-left">隐私政策</span>
        <span class="centen-right"><span class="icon">&gt;</span></span>
      </div>
      <div class="centen-list">
        <span class="centen-left">用户协议</span>
        <span class="centen-right"><span class="icon">&gt;</span></span>
      </div>
      <div class="centen-list">
        <span class="centen-left">意见反馈</span>
        <span class="centen-right"><span class="icon">&gt;</span></span>
      </div>
      <div class="centen-list">
        <span class="centen-left">清除缓存</span>
        <span class="centen-right">0.1KB</span>
      </div>
      <div class="centen-list">
        <span class="centen-left">注销账号</span>
        <span class="centen-right"><span class="icon">&gt;</span></span>
      </div>
    </div>
    <van-button class="bar" block color="#ff5f16" @click="logout"
      >退出登录</van-button
    >
  </div>
</template>

<script>
export default {
  name: "SheZhi",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    logout() {
      sessionStorage.removeItem("gcj");
      this.$store.commit("gui");
      this.$store.commit("noOrder");
      this.$router.push("/mine");
    },
    goLogin() {
      this.$router.push("/loginPassword");
    },
  },
};
</script>

<style scoped lang='scss'>
.body_centen {
  background-color: #f4f4f4;
  height: 600px;
  overflow: hidden;
  .centen-list {
    padding: 0 15px;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .centen-left {
      font-size: 15px;
      color: #191a1b;
    }
    .centen-right {
      font-size: 13px;
      color: rgb(121, 125, 130);
      .icon {
        padding-left: 13px;
        font-size: 15px;
      }
    }
  }
  div:nth-child(1) {
    margin-top: 10px;
  }
  div:nth-child(2) {
    margin-top: 10px;
  }
  div:nth-child(4) {
    margin-top: 10px;
  }
  div:nth-child(8) {
    margin-top: 10px;
  }
  div:nth-child(9) {
    margin-top: 10px;
  }
}
.bar {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>