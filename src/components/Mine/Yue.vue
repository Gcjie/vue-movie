<template>
  <div>
    <van-nav-bar title="余额" left-arrow @click-left="onClickLeft" />
    <div class="yue">
      <p class="desc">当前余额</p>
      <p class="money">￥{{ this.$store.state.money }}.00</p>
      <van-button type="info" @click="addM">充值</van-button>
      <van-dialog
        v-model="isShow"
        show-cancel-button
        :beforeClose="beforeClose"
      >
        <van-field v-model="m" placeholder="请输入充值的金额" />
      </van-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "Yue",
  data() {
    return {
      m: "",
      isShow: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    addM() {
      this.isShow = !this.isShow;
    },
    beforeClose: function (action, done) {
      // 点击事件 - 备注按钮提示框
      if (action === "confirm") {
        // 确认
        // console.log("[点击事件 - 备注] - 确认");
        // console.log(this.m);
        if (this.m) {
          this.$store.commit("addMoney", { money: this.m });
          this.m = "";
        }
        done(); // 关闭提示框
      } else if (action === "cancel") {
        // 取消
        // console.log("[点击事件 - 备注] - 取消");
        done(); // 关闭提示框
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.yue {
  height: 180px;
  width: 100%;
  background-color: orange;
  text-align: center;
  .desc {
    color: #fff;
    font-size: 16px;
    padding-top: 40px;
  }
  .money {
    color: #fff;
    font-size: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>