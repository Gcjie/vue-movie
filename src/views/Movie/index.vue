<template>
  <div>
    <Header></Header>
    <div id="content">
      <div class="movie_menu">
        <router-link to="/city" class="city_name">
          <span>{{ this.$store.state.cityName }}</span
          ><i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="hot_swtich">
          <router-link to="/movie/hotMovie" class="hot_item"
            >正在热映</router-link
          >
          <router-link to="/movie/futureMovie" class="hot_item"
            >即将上映</router-link
          >
        </div>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Movie",
  data() {
    return {};
  },
  components: {
    Header,
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
#content {
  flex: 1;
  overflow: auto;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
}
#content .movie_menu {
  position: fixed;
  margin-top: 46px;
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  background: white;
  z-index: 10;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  margin-left: 45px;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
</style>

