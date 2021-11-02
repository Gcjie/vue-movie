import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityName: '',
    loginPhone: '',
    tokenKey: 'gcj',
    tokenValue: 'snnpp299mxn2#(Q#&&&j',
    money: 0,
    movieOrder: false,
    isshow: 1,
    isCode: false
  },
  mutations: {
    setCityName(state, payload) {
      state.cityName = payload.name
    },
    setPhone(state, payload) {
      state.loginPhone = payload.phone
    },
    addMoney(state, payload) {
      state.money += parseInt(payload.money)
    },
    buyTicket(state, payload) {
      state.money -= parseInt(payload.money)
    },
    gui(state) {
      state.money = 0
    },
    haveOrder(state) {
      state.movieOrder = true
    },
    noOrder(state) {
      state.movieOrder = false
    },
    isAdd(state) {
      state.isshow++
    },
    retShow(state) {
      state.isshow = 1
    }
  },
  actions: {
  },
  modules: {
  },
  // 使vuex持久化，默认是使用localstorage存储数据
  /* plugins: [persistedState()], */
  // 要实现无痕浏览需要就存储数据的方式改为sessionstorage
  plugins: [
    persistedState({ storage: window.sessionStorage })
  ]
})
