<template>
    <el-container>
        <el-header>
            <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">我的工作台</el-submenu>
                <el-menu-item index="3" disabled>消息中心</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>