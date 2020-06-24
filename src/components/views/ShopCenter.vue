<template>
    <el-container class="con">
        <el-header class="headerviews">
            <div class="menuBox">
                <div :class="{checked: page=='cashchange'}" @click="checked('cashchange')"><div style="cursor: pointer;">现金</div></div>
                <div :class="{checked: page=='vouchers'}" @click="checked('vouchers')"><div style="cursor: pointer;">代金券</div></div>
                <div :class="{checked: page=='things'}" @click="checked('things')"><div style="cursor: pointer;">实物</div></div>
                <div :class="{checked: page=='account'}" @click="checked('account')"><div style="cursor: pointer;">会员</div></div>
                <div :class="{checked: page=='forrecord'}" @click="checked('forrecord')"><div style="cursor: pointer;">兑换记录</div></div>
            </div>
            <div class="usercount" style="display: flex; align-items: center;">
                <el-avatar style="border: solid 1px rgba(51,102,101,1); margin-right: 10px;" :size="25" :src="userInfo.avatar">{{userInfo.userName}}</el-avatar>
                <el-popover placement="bottom" trigger="hover">
                    <div>
                        <h3 class="hoverdown">个人中心</h3>
                        <h3 class="hoverdown" @click="logOut">退出</h3>
                    </div>
                    <div slot="reference">
                        <div >{{userInfo.userName}}<i class="el-icon-arrow-down icomenu"></i></div>
                    </div>
                </el-popover>
            </div>
            <!-- <div class="usercount">ViTTo<i class="el-icon-arrow-down icomenu"></i></div> -->
        </el-header>
        <el-main class="mainviewShop">
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data() {
        return {
            page: 'cashchange',
            isLognIn: false
        }
    },
    methods: {
        checked(page) {
            this.page = page
            this.$router.push(`/home/shopcenter/${page}`);
        },
        logOut() {
            window.sessionStorage.clear()
            setTimeout(() => {
                this.isLognIn = false
                this.$router.push("/login")
            }, 1000);
        },
        isLognInNow() {
            const state = window.sessionStorage.getItem('USERNAME')
            if(state) {
                this.isLognIn = true
            }
        }
    },
    created() {
        this.isLognInNow()
    },
    computed: {
        ...mapState(['userInfo'])
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