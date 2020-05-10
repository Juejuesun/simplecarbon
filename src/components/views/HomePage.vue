<template>
    <el-container class="con">
        <el-header class="headerview">
            <div>
                <div v-show="false" class="login" @click="loginNow">登陆</div>
                <div>
                    <div class="usercount">ViTTo<i class="el-icon-arrow-down icomenu"></i></div>
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
export default {
    components: {
        CityRank,
        MyIntegral,
        MyTasks
    },
    methods: {
        loginNow() {
            this.$router.push('/login');
        }
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
</style>