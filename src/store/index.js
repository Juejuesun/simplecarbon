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
      walkGoal: 0,
      busGoal: 0,
      shopGoal: 0,  
      userAccount: 0,
      userScore: 0,
      walkToday: 0,
      shopToday: 0,
      busToday: 0,
      torecScore: 0,
      todayScore: 0
    },
    scorePrice: 0.8,
    userPhyImg: [],
    cityRanks: []
  },
  mutations: {
    async logIn(state, {loginForm}) {
      console.log(loginForm)
      // loginForm =  { //测试数据
      //   "userPhoto":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      //   "userShake":"SCKET IT",
      //   "userState":"1",
      //   "state":"1",
      //   "userName":"VITTO",
      //   "userId":"111",
      //   "dataEdit":"1"
      // }
      // const {data: res} = await axios.post('http://localhost:3000/login', loginForm)//测试接口
      const {data: res} = await axios.get('http://localhost:8080/SimpleCarbon/login.action', {params: loginForm})//正式接口 登陆
      // const {data: res} = await axios.get('http://localhost:8080/SimpleCarbon/login.action', {params: {id: loginForm.id, password: loginForm.password}})//正式接口 登陆

      if(res) {
        console.log('登陆返回的数据',res)
        // if(res.state=='1') {
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
          window.localStorage.setItem('USERINFO', JSON.stringify(state.userInfo))

        // } else {
          // return false
        // }
      }
      console.log('返回后保存的数据',state.userInfo)
    },
    async getTodayData(state) {
      let asc = {
        id: state.userInfo.userId
      }
      // let res = {   //测试数据
      //   "busGoal":2,
      //   "walkToday":3453,
      //   "shopToday":1,
      //   "walkGoal":5000,
      //   "userAccount":13.5,
      //   "userScore":886,
      //   "busToday":1,
      //   "shopGoal":1
      // }
      // const {data: res} = await axios.post('http://localhost:3000/posts', asc)//测试接口 获取账户信息
      const {data: res} = await axios.get('http://localhost:8080/SimpleCarbon/ScoreData.action', {params: asc})//正式接口
      if(res) {
        console.log(res)
        let con = 0
        let allsco = 0
        state.countInfo.walkGoal = res.walkGoal
        state.countInfo.busGoal = res.busGoal
        state.countInfo.shopGoal = res.shopGoal
        state.countInfo.userAccount = res.userAccount
        state.countInfo.userScore = res.userScore
        state.countInfo.walkToday = res.walkToday
        state.countInfo.shopToday = res.shopToday
        state.countInfo.busToday = res.busToday
        state.userPhyImg = res.images
        allsco = 5 + res.shopGoal + res.busGoal
        if(res.walkToday>=res.walkGoal) {
          con = con + 5
        }
        con = con + res.busToday + res.shopToday
        state.countInfo.todayScore = con
        state.countInfo.torecScore = allsco - con
        
      }
    },
    async updateInfo(state) {
      let asc = {
        id: state.userInfo.userId
      }
      // asc = {//测试数据
      //   score: 889,
      //   account: 111.11
      // }
      // const {data: res} = await axios.post('http://localhost:3000/profile', asc) //测试接口 更新账户余额
      const {data: res} = await axios.get('http://localhost:8080/SimpleCarbon/userWallet.action', {params: asc}) //正式接口
      // const {data: res} = await axios.get('http://localhost:8080/SimpleCarbon/userWallet.action', {params:{id: state.userInfo.userId}}) //正式接口
      // console.log(res)
      if(res) {
        state.countInfo.userScore = res.score
        state.countInfo.userAccount = res.account
      }
    },
    // async changeMoney(state, {score}) {
    //   let asc = {
    //     id: state.userInfo.userId,
    //     scoreRate: 10,
    //     AccountRate: state.scorePrice,
    //     num: score
    //   }
    //   // asc =  {//测试数据
    //   //   afterScore: state.countInfo.userScore-num,
    //   //   afterAccount: 109.7,
    //   //   state: "1",
    //   //   beforeAccount: state.countInfo.userAccount,
    //   //   beforeScore: state.countInfo.userScore
    //   // }
    //   // const {data: res} = await axios.post('http://localhost:3000/posts', asc)//测试接口 积分换余额
    //   const {data: res} = await axios.get('http://localhost:8080/SimpleCarbon/changeScoreToAccount.action', {params: asc})//正式接口 积分换余额
    //   if(res.state=='1') {
    //     state.countInfo.userScore = res.afterScore
    //     state.countInfo.userAccount = res.afterAccount
    //   }
    // },
    async changeThings(state, {num}) {
      let asc = {
        id: state.userInfo.userId,
        num: num
      }
      // asc =  {//测试数据
      //   before: state.countInfo.userScore,
      //   state: "1",
      //   after: state.countInfo.userScore-num
      // }
      // const {data: res} = await axios.post('http://localhost:3000/posts', asc)//测试接口 积分换商品
      const {data: res} = await axios.get('http://localhost:8080/SimpleCarbon/changeScoreToProduct.action', {params: asc})//正式接口
      if(res.state=='1') {
        state.countInfo.userScore = res.after
      }
    },
    pushUserid(state) {
      const str = window.localStorage.getItem('USERNAME')
      if(str) {
        state.userInfo = JSON.parse(window.localStorage.getItem('USERINFO'))
        console.log('刷新后数据',state.userInfo)
      }
    },
    async getCityRank(state) {
      let config = {
        headers: {
            // Authorization:'APPCODE a4e68331ad2643ffad45b4c984e3b3bb'
            "Authorization": "APPCODE a4e68331ad2643ffad45b4c984e3b3bb"
        }
      }
      const {data: res} = await axios.get('https://ali-pm25.showapi.com/pm25-top', config)
      // console.log(res)
      state.cityRanks = res.showapi_res_body.list
      console.log('cityranks',state.cityRanks)
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
    changeMoney({commit}, num) {
      commit('changeMoney', {num})
    },
    changeThings({commit}, num) {
      commit('changeThings', {num})
    },
    pushUserid({commit}) {
      commit('pushUserid')
    },
    getCityRank({commit}) {
      commit('getCityRank')
    }
  },
  modules: {
  }
})