<template>
  <div>
    <van-nav-bar title="电影订单" left-arrow @click-left="onClickLeft" />
    <div v-show="!this.$store.state.movieOrder">
      <van-empty
        class="custom-image"
        image="	https://assets.maizuo.com/h5/v5/public/app/img/noneMovies@2x.0d5d2c45.png"
        description="去挑选些喜欢的电影叭"
      />
      <div class="d">
        <van-button plain hairline type="info" class="m" @click="goHome"
          >首页</van-button
        >
      </div>
    </div>
    <div class="order_list" v-show="this.$store.state.movieOrder">
      <div class="list" v-for="ele in orderList" :key="ele.id">
        <div class="list_left">
          <p class="name">{{ ele.movie_name }}</p>
        </div>
        <div class="list_middle">
          <p class="date">{{ ele.start_date }}</p>
          <p class="time">{{ ele.start_time }}</p>
        </div>
        <div class="list_right">
          <p class="cinema">{{ ele.cinema_name }}</p>
          <p class="place">{{ ele.fyt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrder } from "@/api/order.js";
export default {
  name: "MovieOrder",
  data() {
    return {
      orderList: [],
    };
  },
  created() {
    if (this.$store.state.movieOrder) {
      this.showOrder();
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push("/movie");
    },
    async showOrder() {
      let orderList = await getOrder();
      // console.log(cinemaList);
      this.orderList = orderList.data.orders;
      // console.log(this.orderList);
    },
  },
};
</script>

<style lang='scss'>
.custom-image .van-empty__image {
  margin-top: 150px;
  width: 90px;
  height: 90px;
}
.d {
  text-align: center;
}
.van-button--normal {
  padding: 0 40px;
}
.order_list {
  background-color: #f4f4f4;
  height: 620px;
  overflow: hidden;
  .list {
    margin-top: 10px;
    padding: 5px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .list_left {
      width: 80px;
      .name {
        font-size: 15px;
      }
    }
    .list_middle {
      width: 100px;
      .date {
        font-size: 15px;
        color: #191a1b;
      }
      .time {
        font-size: 15px;
        color: #191a1b;
      }
    }
    .list_right {
      .cinema {
        font-size: 17px;
        color: #191a1b;
      }
      .place {
        font-size: 13px;
        color: #797d82;
      }
    }
  }
}
</style>