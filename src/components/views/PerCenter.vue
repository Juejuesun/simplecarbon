<template>
    <el-container>
        <el-header class="headerviews">
            <div class="menuBox">
                <div :class="{checked: page=='perhome'}" @click="checked('perhome')"><div style="cursor: pointer;">个人中心</div></div>
                <div :class="{checked: page=='friend'}" @click="checked('friend')"><div style="cursor: pointer;">好友</div></div>
                <div :class="{checked: page=='city'}" @click="checked('city')"><div style="cursor: pointer;">城市</div></div>
                <div :class="{checked: page=='country'}" @click="checked('country')"><div style="cursor: pointer;">全国</div></div>
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
    data() {
        return {
            page: 'perhome'
        }
    },
    methods: {
        checked(page) {
            this.page = page
            this.$router.push(`/home/percenter/${page}`);
        }
    }
}
</script>

<style scoped>
.menuBox {
    /* justify-self: end; */
    display: grid;
    grid-template-columns: repeat(4, 15%);
    justify-content: center;
    justify-items: center;
    align-items: center;
    
    color: #F5F7F6;
}
.checked {
    background-color: rgba(38,71,62,1);
    height: 100%;
    width: 100%;
    /* align-self: end;
    justify-self: center; */
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>