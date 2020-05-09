<template>
    <el-container>
        <el-header class="headerviews">
            <div class="menuBox">
                <div>现金</div>
                <div>代金券</div>
                <div>实物</div>
                <div>会员</div>
                <div>兑换记录</div>
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
    display: grid;
    grid-template-columns: repeat(5, 12%);
    justify-content: center;
    justify-items: center;
    align-items: center;

    color: #F5F7F6;
    cursor: pointer;
}
</style>