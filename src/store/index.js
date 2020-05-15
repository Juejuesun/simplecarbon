import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      userName: 'VITTO',
      userId: '133******03',
      avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      userShake: 'SCKET IT',
      userState: '未实名',
    },
    countInfo: {
      walkGoal: 2000,
      busGoal: 2,
      shopGoal: 1,  
      userAccount: 111,
      userScore: 14,
      walkToday: 8985,
      shopToday: 1,
      busToday: 1,
      torecScore: 0
    },
    scorePrice: 0.8,
  },
  mutations: {
    async logIn(state, {loginForm}) {
      loginForm =  { //测试数据
        "userPhoto":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "userShake":"SCKET IT",
        "userState":"1",
        "state":"1",
        "userName":"VITTO",
        "userId":"111",
        "dataEdit":"1"
      }
      const {data: res} = await axios.post('http://localhost:3000/login', loginForm)//测试接口
      // const {data: res} = await axios.post('http://localhost:8080/SimpleCarbon/login.action', loginForm)//正式接口
      if(res) {
        console.log(res)
        if(res.state=='1') {
          state.userInfo.avatar = res.userPhoto
          state.userInfo.userId = res.userId
          state.userInfo.userName = res.userName
          state.userInfo.userShake = res.userShake
          if(res.userState == '1') {
            state.userInfo.userState = '已实名'
          } else {
            state.userInfo.userState = '未实名'
          }
          window.localStorage.setItem('USERNAME', res.userName)
        } else {
          return false
        }
      }
    },
    async getTodayData(state) {
      let asc = {
        id: state.userInfo.userId
      }
      asc = {   //测试数据
        "busGoal":2,
        "walkToday":3453,
        "shopToday":1,
        "walkGoal":5000,
        "userAccount":13.5,
        "userScore":886,
        "busToday":1,
        "shopGoal":1
      }
      const {data: res} = await axios.post('http://localhost:3000/posts', asc)//测试接口
      // const {data: res} = await axios.post('http://localhost:8080/SimpleCarbon/ScoreData.action', asc)//测试接口
      if(res) {
        console.log(res)
        let con = 0
        state.countInfo.walkGoal = res.walkGoal
        state.countInfo.busGoal = res.busGoal
        state.countInfo.shopGoal = res.shopGoal
        state.countInfo.userAccount = res.userAccount
        state.countInfo.userScore = res.userScore
        state.countInfo.walkToday = res.walkToday
        state.countInfo.shopToday = res.shopToday
        state.countInfo.busToday = res.busToday
        if(res.walkToday<res.walkGoal) {
          con++
        }
        if(res.busToday<res.busGoal) {
          con++
        }
        if(res.shopToday<res.shopGoal) {
          con++
        }
        state.countInfo.torecScore = con
      }
    },
    async updateInfo(state) {
      let asc = {
        id: state.userInfo.userId
      }
      asc = {//测试数据
        score: 117,
        account: 111.11
      }
      const {data: res} = await axios.post('http://localhost:3000/profile', asc)
      // console.log(res)
      if(res) {
        state.countInfo.userScore = res.score
        state.countInfo.userAccount = res.account
      }
    },
    async changeMoney(state, {num}) {
      let asc = {
        id: state.userInfo.userId,
        scoreRate: 10,
        AccountRate: state.scorePrice,
        num: num
      }
      asc =  {//测试数据
        afterScore: 94,
        afterAccount: 109.7,
        state: "1",
        beforeAccount: 108.1,
        beforeScore: 114
      }
      const {data: res} = await axios.post('http://localhost:3000/posts', asc)//测试接口
      if(res.state=='1') {
        state.countInfo.userScore = res.afterScore
        state.countInfo.userAccount = res.afterAccount
      }
    }
  },
  actions: {
    logIn({commit}, loginForm) {
      commit('logIn', {loginForm})
    },
    getTodayData({commit}) {
      commit('getTodayData')
    },
    updateInfo({commit}) {
      commit('updateInfo')
    },
    changeMoney({commit},num) {
      commit('changeMoney', {num})
    }
  },
  modules: {
  }
})