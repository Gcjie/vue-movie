<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" />
    <div class="cinema-title">星铁IMAX影城</div>
    <div class="cinema-addr">
      <img src="../../../public/images/addr.png" alt="" />
      <span>如皋市如城街道中山路398号西欧国际广场5楼</span>
      <a href=""><img src="../../../public/images/call.png" alt="" /></a>
    </div>
    <div class="cinema-movie">
      <div class="movie-bg">
        <div class="img"></div>
      </div>
      <div class="movie-list">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="ele in hotList" :key="ele.id"
            ><img :src="ele.poster" alt=""
          /></swiper-slide>
        </swiper>

        <div class="movie-head">
          <span class="movie-name">{{ currentMovie.name }}</span>
          <span class="movie-score" v-show="currentMovie.grade">{{
            currentMovie.grade
          }}</span>
          <span class="movie-score" v-show="!currentMovie.grade">7.2</span>
          <span class="movie-unit">分</span>
        </div>
        <div class="movie-desc">
          {{ currentMovie.category }}|{{ currentMovie.runtime }}分钟|{{
            currentMovie.director
          }}| {{ currentMovie.actors && currentMovie.actors[0].name }}|{{
            currentMovie.actors && currentMovie.actors[1].name
          }}|{{ currentMovie.actors && currentMovie.actors[2].name }}|{{
            currentMovie.actors && currentMovie.actors[3].name
          }}|{{ currentMovie.actors && currentMovie.actors[4].name }}
        </div>
      </div>
    </div>
    <div class="cinema-time">
      <van-tabs v-model="active" animated>
        <van-tab title="今天11月2日">
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">10:20</div>
              <div class="end-at">12:50散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">1号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="oneday(0)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">11:20</div>
              <div class="end-at">13:50散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">2号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="oneday(1)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">13:30</div>
              <div class="end-at">16:00散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">3号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="oneday(2)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">14:40</div>
              <div class="end-at">17:10散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">4号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="oneday(3)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">16:40</div>
              <div class="end-at">19:10散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">5号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="oneday(4)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">18:00</div>
              <div class="end-at">12:50散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">1号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="oneday(5)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">19:00</div>
              <div class="end-at">21:30散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">3号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="oneday(6)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">19:50</div>
              <div class="end-at">22:20散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">5号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="oneday(7)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="明天11月3日">
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">10:20</div>
              <div class="end-at">12:50散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">1号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="twoday(0)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">11:20</div>
              <div class="end-at">13:50散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">2号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="twoday(1)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">13:30</div>
              <div class="end-at">16:00散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">3号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="twoday(2)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">14:40</div>
              <div class="end-at">17:10散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">4号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="twoday(3)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">16:40</div>
              <div class="end-at">19:10散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">5号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="twoday(4)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">18:00</div>
              <div class="end-at">12:50散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">1号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="twoday(5)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">19:00</div>
              <div class="end-at">21:30散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">3号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="twoday(6)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">19:50</div>
              <div class="end-at">22:20散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">5号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="twoday(7)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="后天11月4日">
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">10:20</div>
              <div class="end-at">12:50散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">1号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="threeday(0)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">11:20</div>
              <div class="end-at">13:50散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">2号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="threeday(1)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">13:30</div>
              <div class="end-at">16:00散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">3号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="threeday(2)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">14:40</div>
              <div class="end-at">17:10散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">4号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="threeday(3)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">16:40</div>
              <div class="end-at">19:10散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">5号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="threeday(4)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">18:00</div>
              <div class="end-at">12:50散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">1号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="threeday(5)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">19:00</div>
              <div class="end-at">21:30散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">3号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="threeday(6)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
          <div class="schedule-item">
            <div class="left">
              <div class="start-at">19:50</div>
              <div class="end-at">22:20散场</div>
            </div>
            <div class="middle">
              <div class="language">国语2D</div>
              <div class="hall">5号按摩椅厅（60帧）</div>
            </div>
            <div class="right">
              <div class="buy-ticket" @click="threeday(7)">购票</div>
              <div class="lowest-price">
                <span class="price-icon">￥</span><span>22</span>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { getHotMovie } from "@/api/movie.js";
import { Dialog } from "vant";
const c_swiper = document.getElementsByClassName("swiper");
export default {
  name: "CinemaXiang",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      hotList: [],
      currentIndex: 0,
      startTime: [
        "10:20",
        "11:20",
        "13:30",
        "14:40",
        "16:40",
        "18:00",
        "19:00",
        "19:50",
      ],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        on: {
          slideChange: () => {
            // console.log(this);
            // console.log("轮播图滚动事件  --->", c_swiper[0].swiper.activeIndex);
            this.currentIndex = c_swiper[0].swiper.activeIndex; // 修改当前索引
          },
        },
      },
      active: 0,
    };
  },
  computed: {
    currentMovie() {
      return this.hotList.length > 0 ? this.hotList[this.currentIndex] : []; //通过计算属性返回当前索引的电影信息
    },
  },
  created() {
    this.getHotList();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    async getHotList() {
      let hotinfos = await getHotMovie();
      this.hotList = hotinfos.data.data.films;
    },
    oneday(num) {
      if (sessionStorage.getItem("gcj")) {
        Dialog.confirm({
          title: "购票确认",
          message:
            "请确认是否购买今天于" +
            this.startTime[num] +
            "开始的" +
            this.currentMovie.name,
        })
          .then(() => {
            // console.log("确认");
            if (this.$store.state.money >= 22) {
              this.$store.commit("buyTicket", { money: 22 });
              this.$store.commit("haveOrder");
              Dialog.alert({
                message: "购票成功",
              });
            } else {
              Dialog.alert({
                message: "余额不足，请先充值",
              });
            }
          })
          .catch(() => {});
      } else {
        Dialog.alert({
          message: "请先登录",
        }).then(() => {
          this.$router.push("/login");
        });
      }
    },
    twoday(num) {
      if (sessionStorage.getItem("gcj")) {
        Dialog.confirm({
          title: "购票确认",
          message:
            "请确认是否购买明天于" +
            this.startTime[num] +
            "开始的" +
            this.currentMovie.name,
        })
          .then(() => {
            // console.log("确认");
            if (this.$store.state.money >= 22) {
              this.$store.commit("buyTicket", { money: 22 });
              this.$store.commit("haveOrder");
              Dialog.alert({
                message: "购票成功",
              });
            } else {
              Dialog.alert({
                message: "余额不足，请先充值",
              });
            }
          })
          .catch(() => {});
      } else {
        Dialog.alert({
          message: "请先登录",
        }).then(() => {
          this.$router.push("/login");
        });
      }
    },
    threeday(num) {
      if (sessionStorage.getItem("gcj")) {
        Dialog.confirm({
          title: "购票确认",
          message:
            "请确认是否购买后天于" +
            this.startTime[num] +
            "开始的" +
            this.currentMovie.name,
        })
          .then(() => {
            // console.log("确认");
            if (this.$store.state.money >= 22) {
              this.$store.commit("buyTicket", { money: 22 });
              this.$store.commit("haveOrder");
              Dialog.alert({
                message: "购票成功",
              });
            } else {
              Dialog.alert({
                message: "余额不足，请先充值",
              });
            }
          })
          .catch(() => {});
      } else {
        Dialog.alert({
          message: "请先登录",
        }).then(() => {
          this.$router.push("/login");
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../public/css/swiper.css";
.cinema-title {
  margin: 10px 0;
  text-align: center;
  font-size: 17px;
  color: #191a1b;
}
.cinema-addr {
  display: flex;
  img {
    width: 14px;
    height: 21px;
    margin: 0 10px 0 20px;
  }
  span {
    font-size: 14px;
    height: 20px;
    padding: 0 12px;
    flex: 1;
    position: relative;
    color: #191a1b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  a {
    padding: 0 25px;
    img {
      margin: 0;
    }
  }
}
.cinema-movie {
  margin: 20px 0;
  position: relative;
  .movie-bg {
    position: absolute;
    top: 0;
    height: 160px;
    width: 100%;
    padding: 15px 0;
    overflow: hidden;
    .img {
      width: 100%;
      height: 100%;
      filter: blur(30px);
      background-image: url("../../../public/images/movie_3.jpg");
    }
  }
  .movie-list {
    overflow: hidden;
    .swiper-container {
      width: 100%;
      height: 130px;
      margin: 20px auto;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      width: 60%;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
    }
    .swiper-slide:nth-child(2n) {
      width: 40%;
    }
    .swiper-slide:nth-child(3n) {
      width: 20%;
    }
    .movie-head {
      margin-bottom: 10px;
      text-align: center;
      line-height: 18px;
      .movie-name {
        font-size: 15px;
        color: #191a1b;
        padding-right: 5px;
      }
      .movie-score {
        font-size: 16px;
        font-style: italic;
        color: #ffb232;
      }
      .movie-unit {
        font-size: 10px;
        color: #ffb232;
      }
    }
    .movie-desc {
      text-align: center;
      height: 18px;
      color: #797d82;
      font-size: 13px;
      padding: 0 12%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.cinema-time {
  .schedule-item {
    height: 74px;
    padding: 15px 15px;
    position: relative;
    background: #fff;
    .left {
      float: left;
      width: 84px;
      .start-at {
        font-size: 15px;
        color: #191a1b;
      }
      .end-at {
        font-size: 13px;
        color: #797d82;
        margin-top: 2px;
      }
    }
    .middle {
      float: left;
      width: calc(100% - 210px);
      .language {
        font-size: 15px;
        color: #191a1b;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .hall {
        font-size: 13px;
        color: #797d82;
        margin-top: 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .right {
      float: right;
      padding: 10px 0;
      line-height: 25px;
      color: #ff5f16;
      .buy-ticket {
        float: right;
        height: 25px;
        width: 50px;
        border-radius: 2px;
        position: relative;
        text-align: center;
      }
      .lowest-price {
        float: right;
        padding-right: 20px;
        font-size: 15px;
      }
    }
  }
}
</style>