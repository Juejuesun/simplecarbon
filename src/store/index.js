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
    cityRanks: [
      {
        num: '1',
        area: '福州',
        aqi: '15'
        }, {
        num: '2',
        area: '上海',
        aqi: '21'
        }, {
        num: '3',
        area: '成都',
        aqi: '33'
        }, {
        num: '4',
        area: '上海',
        aqi: '21'
        }, {
        num: '5',
        area: '成都',
        aqi: '33'
        },{
        num: '6',
        area: '上海',
        aqi: '21'
        }, {
        num: '7',
        area: '成都',
        aqi: '33'
        },{
        num: '8',
        area: '上海',
        aqi: '21'
        }
    ]
  },
  mutations: {
    async logIn(state, {res}) {
      console.log(res)
      state.userInfo.avatar = res.userPhoto
      state.userInfo.userId = res.userId
      state.userInfo.userName = res.userName
      state.userInfo.userShake = res.userShake
      if(res.userState == '1') {
        state.userInfo.userState = '已实名'
      } else {
        state.userInfo.userState = '未实名'
      }
      window.sessionStorage.setItem('USERNAME', res.userName)
    },
    async getTodayData(state) {
      let asc = {
        id: state.userInfo.userId
      }
      const {data: res} = await axios.post('/ScoreData', asc)//正式接口
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
      const {data: res} = await axios.post('/userWallet', asc) //正式接口 更新账户余额
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
      const {data: res} = await axios.post('/changeScoreToProduct', asc)//正式接口 积分换商品
      if(res.state=='1') {
        state.countInfo.userScore = res.after
      }
    },
    async getCityRank(state) {
      let config = {
        headers: {
            "Authorization": "APPCODE a4e68331ad2643ffad45b4c984e3b3bb"
        }
      }
      const {data: res} = await axios.get('https://ali-pm25.showapi.com/pm25-top', config)
      // console.log(res)
      let list = JSON.parse(JSON.stringify(res.showapi_res_body.list))

      for( let i = 0; i<8; i++) {
        state.cityRanks[i].num = list[i].num
        state.cityRanks[i].area = list[i].area
        state.cityRanks[i].aqi = list[i].aqi
      }
      console.log('cityranks',state.cityRanks)
    }
  },
  actions: {
    logIn({commit}, res) {
      commit('logIn', {res})
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