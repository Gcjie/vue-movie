<template>
  <div>
    <div v-show="isshow" class="header">
      <img
        src="../../../public/images/login.png"
        @click="loginHandler"
        alt=""
      />
      <div class="name" @click="loginHandler">立即登录</div>
    </div>
    <div v-show="!isshow" class="header">
      <img src="../../../public/images/login.jpg" alt="" />
      <div class="name">{{ loginPhone }}</div>
    </div>
    <div class="dingdan">
      <router-link to="/mine/movieOrder" class="item">
        <img src="../../../public/images/movie.png" alt="" />
        <span>电影订单</span>
      </router-link>
      <router-link to="/mine/shopOrder" class="item">
        <img src="../../../public/images/shangping.png" alt="" />
        <span>商品订单</span>
      </router-link>
    </div>
    <div class="liubai"></div>
    <div class="content">
      <!-- <router-link to="/mine/maiZuo" class="card">
        <img src="../../../public/images/maizuo.png" alt="" />
        <span>卖座券</span>
        <p>&gt;</p>
      </router-link>
      <router-link to="/mine/hongBao" class="card">
        <img src="../../../public/images/hongbao.png" alt="" />
        <span>组合红包</span>
        <p>&gt;</p>
      </router-link> -->
      <router-link to="/mine/yue" class="card">
        <img src="../../../public/images/yue.png" alt="" />
        <span>余额</span>
        <span class="monery">￥{{ this.$store.state.money }}</span>
        <p>&gt;</p>
      </router-link>
      <router-link to="/mine/sheZhi" class="card">
        <img src="../../../public/images/shezhi.png" alt="" />
        <span>设置</span>
        <p>&gt;</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mine",
  data() {
    return {
      loginPhone: "",
    };
  },
  created() {
    this.setLoginPhone();
  },
  computed: {
    isshow() {
      return !sessionStorage.getItem("gcj");
    },
  },
  methods: {
    setLoginPhone() {
      let tel = this.$store.state.loginPhone;
      let reg = /^(\d{3})\d{4}(\d{4})$/;
      this.loginPhone = tel.replace(reg, "$1****$2");
    },
    loginHandler() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped lang='scss'>
.header {
  width: 100%;
  height: 175px;
  padding-left: 25px;
  padding-top: 15px;
  background-color: orange;
  align-items: center;
  display: flex;
  img {
    width: 63px;
    height: 63px;
    border-radius: 35px;
    margin-right: 20px;
    border: 2px solid #fff;
  }
  .name {
    font-size: 16px;
    color: #fff;
  }
}
.dingdan {
  display: flex;
  justify-content: space-around;
  padding: 15px;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 26px;
      height: 26px;
    }
    span {
      font-size: 13px;
      color: #797d82;
      padding-top: 5px;
    }
  }
}
.liubai {
  width: 100%;
  height: 10px;
  background-color: #f4f4f4;
}
.content {
  padding: 15px;
  .card {
    display: flex;
    align-items: center;
    height: 40px;
    img {
      width: 20px;
      height: 20px;
    }
    span {
      padding-left: 20px;
      font-size: 15px;
      color: #191a1b;
      flex: 1;
    }
    .monery {
      text-align: right;
      padding-right: 15px;
    }
  }
}
</style>

