<template>
    <div>
        <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <el-container class="boxcon" style="height: 443px;">
                <el-main class="boxbody">
                    <el-card class="frddynCard" shadow="never" :body-style="{ padding: '0px' }" v-for="(dyn, index) in dyndata" :key="index">
                        <el-container class="boxcon">
                            <el-header class="boxheader">
                                <div class="block1">
                                    <div><el-avatar style="border: solid 1px rgba(51,102,101,1); margin-right: 10px;" :size="40" :src="dyn.avantar">{{dyn.name}}</el-avatar></div>
                                    <div>{{dyn.name}}</div>
                                </div>
                                <!-- 按钮控制 -->
                                <div class="btns">
                                    <div class="btns">
                                        <div class="iconbtns" v-if="!dyn.isFollowed" @click="followIt(index)">
                                            <i class="el-icon-plus"></i>
                                        </div>
                                        <div class="iconbtns" v-else>
                                            <i class="el-icon-check"></i>
                                        </div>
                                    </div>
                                    <div class="emailborder">
                                        <i class="fa fa-envelope"></i>
                                    </div>
                                </div>
                            </el-header>
                            <el-main class="cardbody">
                                <div class="boxinner">
                                    <div>
                                        <div class="block2">
                                            <div  class="ings">
                                                <div>碳积分：<span>{{dyn.totals}}</span></div>
                                            </div>
                                            <div  class="scket">
                                                <div>{{dyn.slogn}}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <el-carousel height="140px" :loop="false" indicator-position="none">
                                            <el-carousel-item v-for="item in 4" :key="item">
                                            <h3 class="small">{{ item }}</h3>
                                            </el-carousel-item>
                                        </el-carousel>
                                    </div>
                                </div>
                            </el-main>
                            <el-footer class="boxfooter">
                            </el-footer>
                        </el-container>
                    </el-card>

                </el-main>
            </el-container>
        </el-card>
        <el-dialog
        :visible.sync="dialogVisible"
        width="25%"
        height="30%">
            <div class="chacked"><i class="fa fa-check"></i></div>
            <div slot="footer" class="dialog-footer">
                <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
                <!-- <el-button type="primary" @click="dialogVisible = false">完成</el-button> -->
                <div @click="dialogVisible = false" class="donebtn">完成</div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showCard: true,
            dialogVisible: false,
            dyndata: [
                {
                    name: 'VITTO',
                    totals: '826',
                    slogn: 'SCKET IT',
                    isFollowed: false,
                    avantar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
                },
                {
                    name: 'SUMMER',
                    totals: '310',
                    slogn: 'Go And See',
                    isFollowed: false,
                    avantar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
                },
                {
                    name: 'SNAP',
                    totals: '540',
                    slogn: 'Go And Get',
                    isFollowed: true,
                    avantar: ''
                },
                
            ]
        }
    },
    methods: {
        changeCard(bool) {
            this.showCard = bool
        },
        followIt(index) {
            this.dialogVisible = true
            this.dyndata[index].isFollowed = true
        }
    }
}
</script>

<style scoped>
.box-card {
    width: 40%;
    height: 80%;
    min-width: 350px;
    min-height: 443px;
    border-radius: 10px;
    border: solid 2px rgba(51,102,101,1);
    background-color: rgba(124,165,160,1);
}
.boxcon {
    padding: 0;
    margin: 0;
}
.boxheader {
    height: 30px;
    height: 15%;
    background-color: rgba(251,252,252,1);
    font-family: '时尚中黑简体';
    font-size: 1.2em;
    letter-spacing: 3px;
    color: #7C7D7D;
    padding: 10px;
    margin: 0;

    display: flex;
    flex: 1;
    align-items: center;
}
.boxbody {
    padding: 0px;
}
.boxheader {
    height: 15%;
    background-color: rgba(251,252,252,1);
    font-family: '时尚中黑简体';
    font-size: 1.2em;
    letter-spacing: 3px;
    color: #7C7D7D;
    padding: 10px;
    margin: 0;

    display: flex;
    flex: 1;
    align-items: center;
}
.boxfooter {
    height: 15%;
    background-color: rgba(251,252,252,1);
    font-family: '时尚中黑简体';
    font-size: 1.2em;
    letter-spacing: 3px;
    color: #7C7D7D;
    padding: 10px;
    margin: 0;
}
.block1 {
    display: flex;
    flex: 1;
    align-items: center;
    
    margin-left: 20px;
}
.cardbody {
    padding: 0;
    height: 100%;
    min-height: 200px;
}
.frddynCard {
    width: 40%;
    height: 60%;
    height: 300px;
    min-width: 350px;
    max-height: 283px;
    border-radius: 10px;
    border: solid 0px;
    background-color: rgba(95,146,140,1);
    /* background-color: red; */
    margin-bottom: 10px;
}

.boxinner {
    margin: 10px;
}
.block2 {
    display: flex;
    flex: 1;
    justify-content: space-around;

    font-size: 1em;
    color: #414545;
    margin-bottom: 10px;
}
.ings {
    font-family: '时尚中黑简体';
    height: 35px;
    width: 100px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.scket {
    height: 35px;
    width: 100px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.emailborder {
    width: 25px;
    height: 25px;
    background-color: rgba(117,180,171,1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: rgba(240,241,243,1);
    margin-right: 10px;
}
.btns {
    display: flex;
    flex-direction: row;
}
.iconbtns {
    width: 25px;
    height: 25px;
    background-color: rgba(240,241,243,1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: rgba(117,180,171,1);
    margin-right: 10px;
}
i {
    margin-left: 3px;
    cursor: pointer;
}
.dialog-footer {
    display: flex;
    justify-content: center;
}
.chacked {
    font-size: 5em;
    color: #75B4AB;
    display: flex;
    justify-content: center;
}
.donebtn {
    width: 100px;
    height: 40px;
    background: #75B4AB;
    border-radius: 10px;
    color: #ffffff;
    font-family: '时尚中黑简体';
    text-align: center;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.donebtn:hover {
    background-color:rgb(147, 192, 185);
}
</style>