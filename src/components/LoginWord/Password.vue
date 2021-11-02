<template>
  <div>
    <div class="middle">
      <h2>设置登录密码</h2>
      <p>您可以设置登录密码登录您的{{ this.$store.state.loginPhone }}账号</p>
    </div>
    <div class="footer">
      <div class="bo">
        <img src="../../../public/images/suo.png" alt="" />
        <input
          type="password"
          v-model="password"
          class="phone"
          placeholder="请输入登录密码"
        />
      </div>
    </div>
    <div class="sub">
      <van-button round block type="info" @click="nextHandler">确定</van-button>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "Password",
  data() {
    return {
      password: "",
    };
  },
  methods: {
    nextHandler() {
      if (!this.password) {
        Dialog({ message: "请设置登录密码" });
        return;
      }
      if (this.password) {
        Dialog.alert({
          message: "设置成功",
        }).then(() => {
          // on close
          this.$store.commit("retShow");
          this.$router.push("/mine");
        });
      }
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