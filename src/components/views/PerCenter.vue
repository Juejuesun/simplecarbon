<template>
    <el-container>
        <el-header class="headerviews">
            <div class="menuBox">
                <div>个人中心</div>
                <div>好友</div>
                <div>城市</div>
                <div>全国</div>
            </div>
            <div class="usercount">ViTTo<i class="el-icon-arrow-down icomenu"></i></div>
        </el-header>
        <el-main class="mainview">
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.menuBox {
    /* justify-self: end; */
    display: grid;
    grid-template-columns: repeat(4, 12%);
    justify-content: center;
    justify-items: center;
    align-items: center;

    color: #F5F7F6;
    cursor: pointer;
}
</style>