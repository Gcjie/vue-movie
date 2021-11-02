<template>
  <div>
    <Header></Header>
    <div id="content">
      <div class="cinema_menu">
        <div
          class="menu_list"
          :class="isShow == 1 ? select : ''"
          @click="listShow(1)"
        >
          全城 <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div
          class="menu_list"
          :class="isShow == 2 ? select : ''"
          @click="listShow(2)"
        >
          APP订票 <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div
          class="menu_list"
          :class="isShow == 3 ? select : ''"
          @click="listShow(3)"
        >
          {{ desc }} <i class="iconfont icon-lower-triangle"></i>
        </div>
      </div>
      <div v-show="isShow == 1" class="city_show">
        <ul class="dist-list">
          <li><div class="sele dist">全城</div></li>
          <li><div class="dist">秦淮区</div></li>
          <li><div class="dist">鼓楼区</div></li>
          <li><div class="dist">玄武区</div></li>
          <li><div class="dist">建邺区</div></li>
          <li><div class="dist">雨花台区</div></li>
          <li><div class="dist">浦口区</div></li>
          <li><div class="dist">栖霞区</div></li>
          <li><div class="dist">江宁区</div></li>
          <li><div class="dist">六合区</div></li>
          <li><div class="dist">溧水区</div></li>
          <li><div class="dist">高淳区</div></li>
        </ul>
      </div>
      <div v-show="isShow == 2" class="order_show">
        <div class="order-list">
          <p class="list sele">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAbCAYAAAD/G5bjAAAAAXNSR0IArs4c6QAAAXZJREFUWAnN171OwzAQAOA7B4HEyoAoYkGCFdQH4C0YOkDVMrLyPK0ERUh9AyKBeA6Y2IAZBn6a486JKlVN0zg51/GQxFZsf7rEfwANS0SE1Gu1aXwaYZNsdLm7BV+/MRC0AeE+agrOwj7/HtlzbE2IG42IXBaxB47YUQqDBIzpmNCRy4UhdHHwNg4auYWw4cdIghYMtwwWDFcGFgRXFrZynAtspThXmMXRxc4JTJIuD41bHL7LJKieqsAEYRg2AqI+JBRTb7ujLasKS3EAzxkoYuCNJrAOLMWZ9XP+pC/awLow8dhJmPp7LUi+n3htO8iQEzB4xv/gXZZ3umnApMPpCqEF1ILN4CRTF6gJm8PVAWrDcnFVgD5gC3EuQF+wQlwZoE/YUlwREDbXYj6MzG6tZQebbRSlbt00nUqKGsodxYivvOzt23rIe35lmLRbCicv5gClWFrwAkubtj2Uu8wBPcKccVIhBf5c8+MhL3FXckqSch/pH13QSeGCv0JhAAAAAElFTkSuQmCC"
              alt=""
            />
            <span>APP订票</span>
          </p>
          <p class="list two">
            <span>前台兑换</span>
          </p>
        </div>
      </div>
      <div v-show="isShow == 3" class="order_show">
        <div v-show="sort" class="order-list">
          <p class="list sele">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAbCAYAAAD/G5bjAAAAAXNSR0IArs4c6QAAAXZJREFUWAnN171OwzAQAOA7B4HEyoAoYkGCFdQH4C0YOkDVMrLyPK0ERUh9AyKBeA6Y2IAZBn6a486JKlVN0zg51/GQxFZsf7rEfwANS0SE1Gu1aXwaYZNsdLm7BV+/MRC0AeE+agrOwj7/HtlzbE2IG42IXBaxB47YUQqDBIzpmNCRy4UhdHHwNg4auYWw4cdIghYMtwwWDFcGFgRXFrZynAtspThXmMXRxc4JTJIuD41bHL7LJKieqsAEYRg2AqI+JBRTb7ujLasKS3EAzxkoYuCNJrAOLMWZ9XP+pC/awLow8dhJmPp7LUi+n3htO8iQEzB4xv/gXZZ3umnApMPpCqEF1ILN4CRTF6gJm8PVAWrDcnFVgD5gC3EuQF+wQlwZoE/YUlwREDbXYj6MzG6tZQebbRSlbt00nUqKGsodxYivvOzt23rIe35lmLRbCicv5gClWFrwAkubtj2Uu8wBPcKccVIhBf5c8+MhL3FXckqSch/pH13QSeGCv0JhAAAAAElFTkSuQmCC"
              alt=""
            />
            <span @click="oneHand">最近去过</span>
          </p>
          <p class="list two">
            <span @click="twoHand">离我最近</span>
          </p>
        </div>
        <div v-show="!sort" class="order-list">
          <p class="list two">
            <span @click="oneHand">最近去过</span>
          </p>
          <p class="list sele">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAbCAYAAAD/G5bjAAAAAXNSR0IArs4c6QAAAXZJREFUWAnN171OwzAQAOA7B4HEyoAoYkGCFdQH4C0YOkDVMrLyPK0ERUh9AyKBeA6Y2IAZBn6a486JKlVN0zg51/GQxFZsf7rEfwANS0SE1Gu1aXwaYZNsdLm7BV+/MRC0AeE+agrOwj7/HtlzbE2IG42IXBaxB47YUQqDBIzpmNCRy4UhdHHwNg4auYWw4cdIghYMtwwWDFcGFgRXFrZynAtspThXmMXRxc4JTJIuD41bHL7LJKieqsAEYRg2AqI+JBRTb7ujLasKS3EAzxkoYuCNJrAOLMWZ9XP+pC/awLow8dhJmPp7LUi+n3htO8iQEzB4xv/gXZZ3umnApMPpCqEF1ILN4CRTF6gJm8PVAWrDcnFVgD5gC3EuQF+wQlwZoE/YUlwREDbXYj6MzG6tZQebbRSlbt00nUqKGsodxYivvOzt23rIe35lmLRbCicv5gClWFrwAkubtj2Uu8wBPcKccVIhBf5c8+MhL3FXckqSch/pH13QSeGCv0JhAAAAAElFTkSuQmCC"
              alt=""
            />
            <span @click="oneHand">离我最近</span>
          </p>
        </div>
      </div>
      <div class="cinema_body">
        <ul>
          <li v-for="ele in cinemaList" :key="ele.id" @click="cinemaXiang(ele)">
            <div>
              <span>{{ ele.rm }}</span>
              <span class="q"
                >￥<span class="price">{{ ele.sellPrice }}</span> 元起</span
              >
            </div>
            <div class="address">
              <span>{{ ele.addr }}</span>
              <span>{{ ele.distance }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { getCinema } from "@/api/cinema.js";
export default {
  name: "Cinema",
  data() {
    return {
      cinemaList: [],
      activeNames: [],
      desc: "最近去过",
      isShow: 0,
      select: "select",
      sort: true,
    };
  },
  components: {
    Header,
  },
  created() {
    this.showCinema();
  },
  methods: {
    async showCinema() {
      let cinemaList = await getCinema();
      // console.log(cinemaList);
      this.cinemaList = cinemaList.data.cinemas;
      // console.log(this.cinemaList);
    },
    cinemaXiang(infos) {
      console.log(infos);
      this.$router.push("/cinema/" + infos.id);
    },
    listShow(num) {
      if (this.isShow != num) {
        this.isShow = num;
      } else {
        this.isShow = 0;
      }
    },
    oneHand() {
      this.sort = true;
      this.desc = "最近去过";
      this.isShow = 0;
      this.showCinema();
    },
    twoHand() {
      this.sort = false;
      this.desc = "离我最近";
      this.isShow = 0;
      // console.log(this.cinemaList.length);
      for (let i = 0; i < this.cinemaList.length; i++) {
        for (let j = 0; j < this.cinemaList.length - i - 1; j++) {
          if (
            parseFloat(this.cinemaList[j].distance) >
            parseFloat(this.cinemaList[j + 1].distance)
          ) {
            let t = this.cinemaList[j];
            this.cinemaList[j] = this.cinemaList[j + 1];
            this.cinemaList[j + 1] = t;
          }
        }
      }
      // console.log(this.cinemaList);
    },
  },
};
</script>

<style lang="scss" scoped>
#content {
  flex: 1;
  overflow: auto;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 50px;
  .cinema_menu {
    position: fixed;
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
    .menu_list {
      font-size: 14px;
      color: #191a1b;
    }
    .select {
      color: #1989fa;
    }
  }
  .city_show {
    position: fixed;
    top: 90px;
    background-color: #fff;
    .dist-list {
      list-style: none;
      padding: 10px 0 0 0;
      margin: 0 0 0 10px;
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: wrap;
      li {
        font-size: 12px;
        display: inline-block;
        width: 81px;
        // padding-bottom: 15px;
        margin-bottom: 15px;
        margin-right: 10px;
        // padding-right: 20px;
        height: 30px;
        flex-shrink: 1;
        .dist {
          position: relative;
          color: #797d82;
          border-radius: 3px;
          text-align: center;
          height: 30px;
          line-height: 27px;
          width: 81px;
        }
        .sele {
          color: #1989fa;
        }
        .dist::after {
          content: " ";
          -webkit-transform: scale(0.5);
          -ms-transform: scale(0.5);
          transform: scale(0.5);
          position: absolute;
          border: 1px solid rgba(210, 214, 220, 0.5);
          top: -50%;
          right: -50%;
          bottom: -50%;
          left: -50%;
          border-radius: 4px;
        }
      }
    }
  }
  .order_show {
    position: fixed;
    top: 90px;
    background-color: #fff;
    img {
      width: 13px;
      height: 9px;
      margin: 0 10px;
    }
    .sele {
      color: #1989fa;
    }
    .list {
      position: relative;
      height: 44px;
      width: 100vw;
      padding: 0 0 0 10px;
      display: flex;
      align-items: center;
      font-size: 13px;
      border-top: 1px solid #ededed;
      border-left: 1px solid #666;
    }
    .two {
      padding-left: 42px;
      color: #797d82;
    }
  }
  .cinema_body {
    margin-top: 35px;
    flex: 1;
    overflow: auto;
    ul {
      padding: 20px;
    }
    li {
      border-bottom: 1px solid #e6e6e6;
      margin-bottom: 20px;
    }
    div {
      margin-bottom: 10px;
    }
    .q {
      font-size: 11px;
      color: #f03d37;
      float: right;
    }
    .price {
      font-size: 18px;
    }
    .address {
      font-size: 13px;
      color: #666;
    }
    .address span:nth-of-type(2) {
      float: right;
    }
  }
}
</style>

