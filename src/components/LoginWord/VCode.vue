<template>
  <div>
    <div class="middle">
      <h2>请输入验证码</h2>
      <p>验证码已发送至{{ this.$store.state.phone }}账号</p>
    </div>
    <div class="footer">
      <div class="bo">
        <van-icon name="envelop-o" />
        <input
          type="text"
          v-model="vCode"
          class="phone"
          placeholder="请输入验证码"
        />
        <span v-show="show" class="yzm" @click="yzmHandler">获取验证码</span>
        <span v-show="!show" class="yzm">{{ count }}s后重新发送</span>
      </div>
    </div>
    <div class="sub">
      <van-button round block type="info" @click="nextHandler"
        >下一步</van-button
      >
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "VCode",
  data() {
    return {
      vCode: "",
      show: true,
      count: "",
      timer: null,
    };
  },
  updated() {
    if (this.$store.state.isCode) {
      this.yzmHandler();
    }
  },
  methods: {
    yzmHandler() {
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
    nextHandler() {
      if (!this.vCode) {
        Dialog({ message: "请输出验证码" });
        return;
      }
      let codeReg = /^[0-9a-zA-Z]{4}$/.test(this.vCode);
      if (!codeReg) {
        Dialog({ message: "验证码不正确" });
        return;
      }
      this.$store.commit("isAdd");
      this.$store.state.isCode = false;
    },
  },
};
</script>

<style scoped lang='scss'>
.middle {
  margin: 30px 0 40px 35px;
  h2 {
    font-size: 15px;
    color: #282828;
    font-weight: bolder;
  }
  p {
    padding-top: 3px;
    font-size: 10px;
    color: #898989;
  }
}
.footer {
  padding: 0 36px;

  .bo {
    border-bottom: 2px solid #e8e8e8;
    padding-bottom: 5px;
    img {
      vertical-align: middle;
    }
    .phone {
      vertical-align: middle;
      padding-left: 20px;
      border: none;
    }
    span {
      position: absolute;
      left: 240px;
      font-size: 14px;
      color: #009ae0;
    }
    .del {
      margin-left: 55px;
    }
  }
}
.sub {
  padding: 40px 30px 0 50px;
}
</style>