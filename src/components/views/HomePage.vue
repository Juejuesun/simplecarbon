<template>
    <el-container class="con">
        <el-header class="headerview">
            <div>
                <div v-if="!isLognIn" class="login" @click="loginNow">登陆</div>
                <div v-else style="display: flex; align-items: center;">
                    <el-avatar style="border: solid 1px rgba(51,102,101,1); margin-right: 5px;" :size="25" :src="userInfo.avatar">{{userInfo.userName}}</el-avatar>
                    <el-popover placement="bottom" trigger="hover" >
                        <div>
                            <h3 class="hoverdown">个人中心</h3>
                            <h3 class="hoverdown" @click="logOut">退出</h3>
                        </div>
                        <div slot="reference">
                            <div class="usercount">{{userInfo.userName}}<i class="el-icon-arrow-down icomenu"></i></div>
                        </div>
                    </el-popover>
                </div>
            </div>
        </el-header>
        <el-main class="mainview homevs">
            <CityRank class="item1"/>
            <MyIntegral/>
            <MyTasks/>
            <!-- <router-view/> -->
        </el-main>
    </el-container>
</template>

<script>
import CityRank from '../views/homepage/CityRank'
import MyIntegral from '../views/homepage/MyIntegral'
import MyTasks from '../views/homepage/MyTasks'
import {mapState} from 'vuex'

export default {
    components: {
        CityRank,
        MyIntegral,
        MyTasks
    },
    data() {
        return {
            isLognIn: false,
        }
    },
    methods: {
        loginNow() {
            this.$router.push('/login');
        },
        logOut() {
            window.localStorage.clear()
            setTimeout(() => {
                this.isLognIn = false
                this.$router.push("/login")
            }, 1000);
        },
        isLognInNow() {
            const state = window.localStorage.getItem('USERNAME')
            if(state) {
                this.isLognIn = true
                this.$store.dispatch('getTodayData')
                this.$store.dispatch('updateInfo')
            }
        }
    },
    created() {
        setTimeout(() => {
            this.isLognInNow()
        }, 1000);
    },
    computed: {
        ...mapState(['userInfo'])
    }
}
</script>

<style scoped>
.login {
    font-family: '时尚中黑简体';
    color: #ECECEC;
    margin: 10px;
    margin-right: 50px;
    cursor: pointer;
}
.headerview {
    background-color: rgba(95,146,140,1);
    height: 40px !important;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.homevs {
    /* padding: 100px; */
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    /* justify-items: center; */
    align-items: center;
}
.item1 {
    grid-row-start: 1;
    grid-row-end: 3;
    justify-self: center;
}

.hoverdown {
    font-family: '时尚中黑简体';
    text-align: center;
    cursor: pointer;
    margin: 0;
    padding: 10px;
}
.hoverdown:hover {
    background: rgba(229,239,239,1);
}
</style>