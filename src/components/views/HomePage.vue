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
        <el-main class="mainview">
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
export default {
    methods: {
        loginNow() {
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
.con {
    padding: 0;
    margin: 0;
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
.mainview {
    background-color: rgba(239,240,242,1);
    height: 560px;
}
.login {
    font-family: '时尚中黑简体';
    color: #ECECEC;
    margin: 10px;
    margin-right: 50px;
    cursor: pointer;
}
.usercount {
    font-family: '时尚中黑简体';
    color: #434343;
    font-weight: 900;
    margin: 10px;
    margin-right: 40px;
    cursor: pointer;
}
.icomenu {
    color: rgba(9,124,122,1);
    margin-left: 10px;
}
</style>