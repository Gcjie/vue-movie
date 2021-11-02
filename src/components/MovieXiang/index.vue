<template>
  <div>
    <van-nav-bar :title="movieName" left-arrow @click-left="onClickLeft" />
    <img src="../../../public/images/movie_3.png" alt="" />
    <div class="content">
      <div class="col">
        <div class="film-name">
          <span class="name">峰爆</span>
          <span class="item">2D</span>
        </div>
        <div class="film-grade">
          <span class="grade">7.8</span>
          <span class="grade-text">分</span>
        </div>
      </div>
      <div class="film-category grey-text">灾难 | 剧情 | 动作</div>
      <div class="film-time grey-text">2021-09-17上映</div>
      <div class="film-runtime grey-text">中国大陆 | 120分钟</div>
      <div class="test grey-text">
        一座修建十年的隧道即将竣工之际，受全球地质变动影响，地裂、地震、山体滑坡、泥石流等一系列地质灾害呼啸而至，隧道与整个县城危在旦夕，老洪小洪父子俩于绝境处挺身而出，他们如何与16万人度过这场生死危机？
      </div>
      <div v-show="!isKuo">
        <div class="film-synopsis grey-text hidde" style="height: 77px">
          一座修建十年的隧道即将竣工之际，受全球地质变动影响，地裂、地震、山体滑坡、泥石流等一系列地质灾害呼啸而至，隧道与整个县城危在旦夕，老洪小洪父子俩于绝境处挺身而出，他们如何与16万人度过这场生死危机？
        </div>
        <div class="toggle" @click="kuo">
          <img src="../../../public/images/xia.png" alt="" class="" />
        </div>
      </div>
      <div v-show="isKuo">
        <div class="film-synopsis grey-text" style="height: 77px">
          一座修建十年的隧道即将竣工之际，受全球地质变动影响，地裂、地震、山体滑坡、泥石流等一系列地质灾害呼啸而至，隧道与整个县城危在旦夕，老洪小洪父子俩于绝境处挺身而出，他们如何与16万人度过这场生死危机？
        </div>
        <div class="toggle" @click="sou">
          <img src="../../../public/images/xia.png" alt="" class="upper" />
        </div>
      </div>
    </div>
    <div class="liubai"></div>
    <div class="actors">
      <h2>演职人员</h2>
      <div class="row-scroll">
        <ul class="actors-list">
          <li class="item">
            <img src="../../../public/images/shan.png" alt="" />
            <span class="actors-name">莫山山</span>
            <span class="actors-role">导演</span>
          </li>
          <li class="item">
            <img src="../../../public/images/shan.png" alt="" />
            <span class="actors-name">莫山山</span>
            <span class="actors-role">导演</span>
          </li>
          <li class="item">
            <img src="../../../public/images/shan.png" alt="" />
            <span class="actors-name">莫山山</span>
            <span class="actors-role">导演</span>
          </li>
          <li class="item">
            <img src="../../../public/images/shan.png" alt="" />
            <span class="actors-name">莫山山</span>
            <span class="actors-role">导演</span>
          </li>
          <li class="item">
            <img src="../../../public/images/shan.png" alt="" />
            <span class="actors-name">莫山山</span>
            <span class="actors-role">导演</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="liubai"></div>
    <van-button class="bar" block color="#ff5f16" @click="goCinema"
      >购票</van-button
    >
  </div>
</template>

<script>
export default {
  name: "MovieXiang",
  data() {
    return {
      movieName: "峰爆",
      isKuo: false,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    kuo() {
      this.isKuo = true;
    },
    sou() {
      this.isKuo = false;
    },
    goCinema() {
      this.$router.push("/cinema");
    },
  },
};
</script>

<style scoped lang='scss'>
.content {
  padding: 15px;
  .col {
    display: flex;
    align-items: center;
    .film-name {
      width: 256px;
      .name {
        color: #191a1b;
        font-size: 18px;
        height: 24px;
        line-height: 24px;
        margin-right: 7px;
      }
      .item {
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        display: inline-block;
      }
    }
    .film-grade {
      width: calc(100% - 250px);
      text-align: right;
      color: #ffb232;
      .grade {
        font-size: 18px;
        font-style: italic;
      }
      .grade-text {
        font-size: 10px;
      }
    }
  }
  .grey-text {
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
  }
  .test {
    width: calc(100vw - 30px);
    opacity: 0;
    position: absolute;
    top: 1px;
    margin-left: -10000px;
    font-size: 13px;
  }
  .hidde {
    height: 36px !important;
    overflow: hidden;
  }
  .film-synopsis {
    margin-top: 12px;
  }
  .toggle {
    text-align: center;
    display: block;
    height: auto;
    width: 20px;
    margin: auto;
    line-height: normal;
    img {
      width: 8px;
      margin: auto;
    }
    .upper {
      -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }
}
.liubai {
  width: 100%;
  height: 10px;
  background-color: #f4f4f4;
}
.actors {
  padding: 15px;
  margin-bottom: 10px;
  height: 180px;
  h2 {
    font-size: 16px;
    font-weight: normal;
    padding-bottom: 10px;
  }
  .row-scroll {
    overflow-x: auto;
    overflow-y: hidden;
    height: 200px;
    .actors-list {
      display: flex;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;
        .actors-name {
          padding-top: 10px;
          font-size: 12px;
        }
        .actors-role {
          font-size: 10px;
          color: #797d82;
        }
      }
    }
  }
}
.bar {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>