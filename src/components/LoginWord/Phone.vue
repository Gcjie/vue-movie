<template>
  <div>
    <div class="middle">
      <h2>请输入手机号</h2>
      <p>输入注册账号时的手机号</p>
    </div>
    <div class="footer">
      <div class="bo">
        <img src="../../../public/images/phone.png" alt="" />
        <input
          type="text"
          v-model="phoneNumber"
          class="phone"
          placeholder="请输入手机号"
        />
        <van-icon class="del" @click="del" name="close" />
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
  name: "Phone",
  data() {
    return {
      phoneNumber: "",
    };
  },
  methods: {
    del() {
      this.phoneNumber = "";
    },
    nextHandler() {
      if (!this.phoneNumber) {
        Dialog({ message: "请输入手机号码" });
        return;
      }
      if (this.phoneNumber != this.$store.state.loginPhone) {
        Dialog({ message: "手机号码错误" });
        return;
      }
      this.$store.commit("isAdd");
      this.$store.state.isCode = true;
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
    display: flex;
    img {
      vertical-align: middle;
    }
    .phone {
      vertical-align: middle;
      padding-left: 20px;
      border: none;
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