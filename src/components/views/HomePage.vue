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

</style>