<template>
  <div>
    <van-nav-bar
      :title="'当前城市 - ' + this.$store.state.cityName"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <!-- 用户定位城市 -->
    <div class="location">
      <div class="top">
        <span>当前定位城市：</span>
      </div>
      <div class="bottom" @click="goLocalCity">
        <span class="address">如皋</span>
      </div>
    </div>
    <!-- 热门城市 -->
    <div class="city">
      <h2 class="title">热门城市</h2>
      <ul class="list clearfix">
        <li
          class="item hot"
          v-for="city in hotCity"
          :key="city.id"
          @click="goCity(city)"
        >
          {{ city.name }}
        </li>
      </ul>
    </div>
    <!-- 所有城市 -->
    <div class="city" v-for="ele in allCity" :key="ele.alpha">
      <h2 class="title">{{ ele.alpha }}</h2>
      <ul class="list clearfix">
        <li
          class="item"
          v-for="city in ele.infos"
          :key="city.id"
          @click="goCity(city)"
        >
          {{ city.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getHotCity, getAllCity } from "@/api/city.js";
import { Dialog } from "vant";
export default {
  name: "City",
  data() {
    return {
      value: "",
      locationName: {},
      hotCity: [],
      allCity: [],
    };
  },
  created() {
    // 2.获取热门城市
    this.HotCity();
    // 3.获取所有城市
    this.AllCity();
  },
  methods: {
    onClickLeft() {
      if (!this.$store.state.cityName) {
        Dialog({ message: "请选择城市" });
      } else {
        this.$router.go(-1);
      }
    },
    async HotCity() {
      let hotCityInfo = await getHotCity();
      this.hotCity = hotCityInfo;
    },
    async AllCity() {
      let allCityInfo = await getAllCity();
      this.allCity = this.sort(allCityInfo);
    },
    // 将所有的城市按照字母排序
    sort(allCityInfo) {
      let sortAlpha = Object.keys(allCityInfo).sort();
      let rs = [];
      for (let i = 0; i < sortAlpha.length; i++) {
        rs.push({ alpha: sortAlpha[i], infos: allCityInfo[sortAlpha[i]] });
      }
      return rs;
    },
    goCity(city) {
      // console.log(city);
      this.$store.commit("setCityName", { name: city.name });
      this.$router.push("/movie");
    },
    goLocalCity() {
      this.$store.commit("setCityName", { name: "如皋" });
      this.$router.push("/movie");
    },
  },
};
</script>

<style lang='scss'>
.location {
  .top {
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
  }
  .bottom {
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
    .address {
      color: #3190e8;
      font-size: 20px;
    }
    .arrow {
      font-size: 25px;
      width: 40px;
      line-height: 30px;
      text-align: center;
      color: #999;
    }
  }
}
.city {
  margin-top: 10px;

  .title {
    padding: 10px;
    color: #666;
    font-size: 15px;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
  .list {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    .item {
      float: left;
      text-align: center;
      color: #666;
      border-bottom: 0.025rem solid #e4e4e4;
      border-right: 0.025rem solid #e4e4e4;
      width: 25%;
      height: 1.75rem;
      font: 0.6rem/1.75rem Microsoft YaHei;
      // 省略号
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .hot {
      color: #3190e8;
    }
  }
}
</style>