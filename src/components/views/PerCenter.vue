<template>
    <el-container>
        <el-header class="headerviews">
            <div class="menuBox">
                <div :class="{checked: page=='perhome'}" @click="checked('perhome')"><div style="cursor: pointer;">个人中心</div></div>
                <div :class="{checked: page=='friend'}" @click="checked('friend')"><div style="cursor: pointer;">好友</div></div>
                <div :class="{checked: page=='city'}" @click="checked('city')"><div style="cursor: pointer;">城市</div></div>
                <div :class="{checked: page=='country'}" @click="checked('country')"><div style="cursor: pointer;">全国</div></div>
            </div>
            <div class="usercount" style="display: flex; align-items: center;">
                <el-avatar style="border: solid 1px rgba(51,102,101,1); margin-right: 10px;" :size="25" :src="userInfo.avatar">{{userInfo.userName}}</el-avatar>
                <el-popover placement="bottom" trigger="hover">
                    <div>
                        <h3 class="hoverdown">个人中心</h3>
                        <h3 class="hoverdown" @click="logOut">退出</h3>
                    </div>
                    <div slot="reference">
                        <div>{{userInfo.userName}}<i class="el-icon-arrow-down icomenu"></i></div>
                    </div>
                </el-popover>
            </div>
        </el-header>
        <el-main class="mainview">
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data() {
        return {
            page: 'perhome',
            isLognIn: false
        }
    },
    methods: {
        checked(page) {
            this.page = page
            this.$router.push({
                path:`/home/percenter/${page}`,
                query: {rc: page}
                
            })
        },
        logOut() {
            window.localStorage.clear()
            setTimeout(() => {
                this.isLognIn = false
                this.$router.push("/login")
            }, 1000);
            
        },
        isLognInNow() {
            const state = window.localStorage.getItem('USERNAME')
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