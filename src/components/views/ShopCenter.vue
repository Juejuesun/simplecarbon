<template>
    <el-container>
        <el-header class="headerviews">
            <div class="menuBox">
                <div :class="{checked: page=='cashchange'}" @click="checked('cashchange')"><div style="cursor: pointer;">现金</div></div>
                <div :class="{checked: page=='vouchers'}" @click="checked('vouchers')"><div style="cursor: pointer;">代金券</div></div>
                <div :class="{checked: page=='things'}" @click="checked('things')"><div style="cursor: pointer;">实物</div></div>
                <div :class="{checked: page=='account'}" @click="checked('account')"><div style="cursor: pointer;">会员</div></div>
                <div :class="{checked: page=='forrecord'}" @click="checked('forrecord')"><div style="cursor: pointer;">兑换记录</div></div>
            </div>
            <div class="usercount">ViTTo<i class="el-icon-arrow-down icomenu"></i></div>
        </el-header>
        <el-main class="mainviewShop">
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            page: 'cashchange'
        }
    },
    methods: {
        checked(page) {
            this.page = page
            this.$router.push(`/home/shopcenter/${page}`);
        }
    }
}
</script>

<style scoped>
.menuBox {
    /* justify-self: end; */
    display: grid;
    grid-template-columns: repeat(5, 15%);
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
.mainviewShop {
    background-color: rgba(205,221,217,1);
    height: 560px;
    /* padding: 0; */
}
</style>