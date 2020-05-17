<template>
    <el-container class="home_con">
        <!-- 侧边部分 -->
        <el-aside width="200px" style="background-color: rgba(38,71,62,1); height: 100%; min-height: 600px;">
            <div class="fonts">简 碳</div>
            <div :class="{outbox: true, ischacked: actived=='homepage'}" @click="oneactive('homepage')">
                <div :class="{littleBox: actived=='homepage', littleBoxOff: actived !='homepage'}"></div>
                <div class="inbox">
                    <div>
                        <i class="fa fa-home inicon"></i>
                        <span>首页</span>
                    </div>
                    <div><i class="el-icon-arrow-right"></i></div>
                </div>
            </div>
            <div v-show="isLognIn" :class="{outbox: true, ischacked: actived=='percenter'}" @click="oneactive('percenter')">
                <div :class="{littleBox: actived=='percenter', littleBoxOff: actived !='percenter'}"></div>
                <div class="inbox">
                    <div>
                        <i class="el-icon-suitcase-1 inicon"></i>
                        <span slot="title">个人中心</span>
                    </div>
                    <div><i class="el-icon-arrow-right"></i></div>
                </div>
            </div>
            <div v-show="isLognIn" :class="{outbox: true, ischacked: actived=='shopcenter'}" @click="oneactive('shopcenter')">
                <div :class="{littleBox: actived=='shopcenter', littleBoxOff: actived !='shopcenter'}"></div>
                <div class="inbox">
                    <div>
                        <i class="el-icon-wallet inicon"></i>
                        <span slot="title">积分商城</span>
                    </div>
                    <div><i class="el-icon-arrow-right"></i></div>
                </div>
            </div>
            <div v-show="isLognIn" :class="{outbox: true, ischacked: actived=='litterhoop'}" @click="oneactive('litterhoop')">
                <div :class="{littleBox: actived=='litterhoop', littleBoxOff: actived !='litterhoop'}"></div>
                <div class="inbox">
                    <div>
                        <i class="el-icon-bangzhu inicon"></i>
                        <span slot="title">绿小圈</span>
                    </div>
                    <div><i class="el-icon-arrow-right"></i></div>
                </div>
            </div>
        </el-aside>
        <el-main class="cons">
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data() {
        return {
            actived: 'homepage',
            isLognIn: false
        }
    },
    methods: {
        oneactive(data) {
            this.actived = data
            this.$router.push(`/home/${data}`);
        },
        isLognInNow() {
            const state = window.localStorage.getItem('USERNAME')
            console.log('加载前',state)
            if(state) {
                this.isLognIn = true
            }
        }
    },
    created() {
        setTimeout(() => {
            this.isLognInNow()
        }, 1000);
        console.log('登陆验证1',this.isLognIn)
    }
}
</script>

<style scoped>
@import "/src/common/font/font.css";
.home_con {
    /* background: rgba(94,165,155, 1); */
    height: 100%;
}
.el-menu-vertical-demo {
    height: 540px;
}
.fonts {
    font-family: '时尚中黑简体';
    font-size: 1.8em;
    font-weight: 900;
    color: #ECECEC;
    margin: 25px;

    display: flex;
    justify-content: center;
}
.littleBox {
    height: 25px;
    width: 5px;
    background-color: #7ECEF4;
    margin-right: 10px;
}
.littleBoxOff {
    height: 25px;
    width: 5px;
    background-color: rgba(38,71,62,1);
    margin-right: 10px;
}
.ischacked {
    background-color: rgba(34,63,57,1);
}
.outbox {
    display: flex;
    flex: 1;
    align-items: center;
    height: 40px;
    cursor: pointer;
}
.inbox{
    display: flex;
    justify-content: space-between;
    width: 160px;
    color: #ECECEC;
}
.inicon {
    margin-right: 10px;
    font-size: 1em;
}

.cons {
    height: 100%;
    padding: 0;
    margin: 0;
}
</style>
