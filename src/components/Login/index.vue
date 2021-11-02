<template>
  <div>
    <div class="login-top">
      <div class="login-top-left" @click="backHandler">&lt;</div>
      <div class="login-top-right">欢迎登录鬼才影院</div>
    </div>
    <div class="login-middle">
      <van-form @submit="onSubmit">
        <div class="middle-content clearfix">
          <div class="content content-top">
            <img src="../../../public/images/phone.png" alt="" />
            <input
              type="text"
              v-model="phoneNumber"
              class="phone"
              placeholder="请输入手机号"
            />
          </div>
          <div class="content content-down">
            <img src="../../../public/images/suo.png" alt="" />
            <input
              type="text"
              v-model="vCode"
              class="phone"
              placeholder="请输入验证码"
            />
            <span v-show="show" class="yzm" @click="yzmHandler"
              >获取验证码</span
            >
            <span v-show="!show" class="yzm">{{ count }}s后重新发送</span>
          </div>
        </div>
        <div class="sub">
          <van-button round block type="info" native-type="submit"
            >登录</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "Login",
  data() {
    return {
      phoneNumber: "",
      vCode: "",
      checked: false,
      show: true,
      count: "",
      timer: null,
    };
  },
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
    onSubmit() {
      if (!this.phoneNumber || !this.vCode) {
        Dialog({ message: "手机号和验证码不能为空" });
        return;
      }
      let phoneReg = /^1[1356789]\d{9}$/.test(this.phoneNumber);
      if (!phoneReg) {
        Dialog({ message: "请输入正确的手机号码" });
        return;
      }
      let codeReg = /^[0-9a-zA-Z]{4}$/.test(this.vCode);
      if (!codeReg) {
        Dialog({ message: "验证码不正确" });
        return;
      }
      sessionStorage.setItem(
        this.$store.state.tokenKey,
        this.$store.state.tokenValue
      );
      this.$store.commit("setPhone", { phone: this.phoneNumber });
      this.$router.push("/mine");
    },
    yzmHandler() {
      if (!this.phoneNumber) {
        Dialog({ message: "请输入手机号码" });
        return;
      }
      let phoneReg = /^1[1356789]\d{9}$/.test(this.phoneNumber);
      if (!phoneReg) {
        Dialog({ message: "请输入正确的手机号码" });
        return;
      }

      let djs = 60;
      if (!this.timer) {
        this.count = djs;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 1 && this.count <= djs) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-top {
  width: 100%;
  height: 125px;
  background-color: #009ae0;
  .login-top-left {
    padding: 10px 0 0 15px;
    font-size: 30px;
    color: #fff;
  }
  .login-top-right {
    font-size: 20px;
    color: #fff;
    padding: 30px 0 0 60px;
  }
}
.login-middle {
  .middle-content {
    padding: 56px;
    .content {
      border-bottom: 2px solid #e8e8e8;
      padding-bottom: 10px;
      img {
        display: inline;
        vertical-align: middle;
      }
      .phone {
        vertical-align: middle;
        padding-left: 20px;
        border: none;
      }
    }
    .content-top {
      margin-bottom: 20px;
    }
    .content-down {
      span {
        position: absolute;
        left: 240px;
        font-size: 14px;
        color: #009ae0;
      }
    }
  }
  .sub {
    padding: 0 38px;
  }
}
</style>