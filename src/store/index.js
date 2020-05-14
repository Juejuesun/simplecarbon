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
    }
  },
  mutations: {
    async logIn(state, {loginForm}) {
      // let _this = loginForm.vuess
      loginForm =  { //测试数据
        "userPhoto":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        "userShake":"SCKET IT",
        "userState":"1",
        "state":"1",
        "userName":"VITTO",
        "userId":"111",
        "dataEdit":"1"
      }
      const {data: res} = await axios.post('http://localhost:3000/login', loginForm)
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
          // _this.$message({
          //   message:"登陆成功",
          //   type:'success'
          // })
          // _this.$router.push("/home")
        } else {
          // _this.$message({
          //   message:"登陆失败",
          //   type:'error'
          // })
          return false;
        }
      }
    }
  },
  actions: {
    logIn({commit}, loginForm) {
      commit('logIn', {loginForm})
    }
  },
  modules: {
  }
})
