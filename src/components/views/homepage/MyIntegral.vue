<template>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
        <div class="boxcomtain">
            <div>
                <div class="inlineitem">
                    <div><i class="fa fa-circle" aria-hidden="true"></i></div>
                    <div>今日积分</div>
                    <div style="margin-left: 15px;">{{countInfo.todayScore}}</div>
                </div>
                <div class="inlineitem">
                    <div><i class="fa fa-circle" aria-hidden="true"></i></div>
                    <div>待领取积分</div>
                    <div style="margin-left: 15px;">{{countInfo.torecScore}}</div>
                </div>
                <div class="inlineitem">
                    <div><i class="fa fa-circle" aria-hidden="true"></i></div>
                    <div>我的碳积分</div>
                    <div style="margin-left: 15px;">{{countInfo.userScore}}</div>
                </div>
            </div>
            <div class="one">我的积分</div>
        </div>
        <!-- <el-progress :text-inside="true" text="hahah" :stroke-width="26" :percentage="70">scsd</el-progress> -->
    </el-card>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed: {
        ...mapState(['countInfo'])
    }
}
</script>

<style scoped>
.box-card {
    width: 30%;
    height: 30%;
    min-width: 300px;
    min-height: 160px;
    border-radius: 10px;
    border: solid 2px rgba(51,102,101,1);
    background-color: rgba(124,165,160,1);
}
.inlineitem {
    display: grid;
    grid-template-columns: 10% 40% 50%;
    justify-items: start;
    align-items: center;
    color: #FFFFFF;
}
i {
    color: #B4CAC7;
    font-size: 0.5em;
    margin: 12px;
}
.one {
    font-family: '时尚中黑简体';
    width: 25px;  
    margin: 0;  
    line-height: 18px;  
    font-size: 15px;
    color: #FFFFFF;
    justify-self: end;
}
.boxcomtain {
    margin-top: 10%;
    display: grid;
    grid-template-columns: 80% 20%;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}
</style>