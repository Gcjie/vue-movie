<template>
  <div>
    <router-view />
    <van-tabbar
      v-model="active"
      @change="onChange"
      v-show="this.$route.meta.tabbarisShow"
    >
      <!-- icon="home-o" -->
      <van-tabbar-item name="movie" icon="home-o">电影</van-tabbar-item>
      <van-tabbar-item name="cinema" icon="search">影院</van-tabbar-item>
      <van-tabbar-item name="mine" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      mName: "",
    };
  },
  created() {
    this.location();
  },
  computed: {
    active: {
      get() {
        return this.$route.matched[0]
          ? this.$route.matched[0].path.substring(1)
          : "";
      },
      set() {},
    },
  },
  methods: {
    onChange(name) {
      this.$router.push("/" + name);
    },
    location() {
      if (!this.$store.state.cityName) {
        Dialog.confirm({
          message: "您当前的定位在：如皋，是否切换到定位城市？",
        })
          .then(() => {
            // on confirm
            this.$store.commit("setCityName", { name: "如皋" });
          })
          .catch(() => {
            // on cancel
            this.$router.push("/city");
          });
      }
    },
  },
};
</script>

<style lang="scss">
</style>
