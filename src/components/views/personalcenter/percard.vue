<template>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
        <el-container class="boxcon">
            <el-header class="boxheader">
                <div class="block1">
                    <div><el-avatar style="border: solid 1px rgba(51,102,101,1); margin-right: 10px;" :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">VITTO</el-avatar></div>
                    <div>VITTO</div>
                </div>
                <!-- 按钮控制 -->
                <div v-if="showCard" @click="changeCard(false)"><i class="el-icon-arrow-right iconin"></i></div>
                <div v-else @click="changeCard(true)"><i class="el-icon-arrow-left iconin"></i></div>
            </el-header>
            <el-main class="boxbody">
                <div class="boxinner" v-if="showCard">
                    <div>
                        <div class="block2">
                            <div  class="ings">
                                <div>碳积分：<span>826</span></div>
                            </div>
                            <div  class="scket">
                                <div>SCKET IT</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <el-carousel height="200px" indicator-position="outside">
                            <el-carousel-item v-for="pic in picurls" :key="pic">
                                <el-image :src="pic.url"></el-image>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div v-else>
                    <el-card class="volit">
                        <div class="textbox">
                            <div>身份认证</div>
                            <div class="textend">
                                <span class="usne">已实名</span>
                                <span>VITTO</span>
                            </div>
                        </div>
                        <div class="textbox">
                            <div>简碳账号</div>
                            <div class="textend">
                                <span>133******03</span>
                            </div>
                        </div>
                        <div class="textbox">
                            <div>碳积分</div>
                            <div class="textend">
                                <span>826</span>
                            </div>
                        </div>
                        <div class="textbox">
                            <div>账户余额</div>
                            <div class="textend">
                                <span>13.5 元</span>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-main>
        </el-container>
    </el-card> 
</template>

<script>
export default {
    data() {
        return {
            showCard: true,
            picurls: [
                {url: 'https://pic.downk.cc/item/5ebac3b3c2a9a83be5bc0624.png'},
                {url: 'https://pic.downk.cc/item/5ebac00fc2a9a83be5b6a0ca.png'},
                {url: 'https://pic.downk.cc/item/5ebac005c2a9a83be5b69356.png'}
            ]
        }
    },
    methods: {
        changeCard(bool) {
            this.showCard = bool
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
.block1 {
    display: flex;
    flex: 1;
    align-items: center;
    
    margin-left: 20px;
}
.iconin {
    font-size: 1.5em;
    font-weight: 900;
    cursor: pointer;
}
.block2 {
    display: flex;
    flex: 1;
    justify-content: space-around;

    font-size: 1.3em;
    color: #414545;
    margin-bottom: 20px;
}
.ings {
    font-family: '时尚中黑简体';
    height: 45px;
    width: 130px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.scket {
    height: 45px;
    width: 130px;
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

.boxbody {
    padding: 5px;
}
.boxinner {
    margin: 15px;
}
.volit {
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: #E5EFEF;
}
.textbox {
    display: flex;
    flex: 1;
    justify-content: space-between;
    font-family: '时尚中黑简体';
    margin: 5px;
    margin-top: 15px;
    padding: 5px;
    border-bottom: solid #FEFFFF;
    color: #606161;
}
.usne {
    color: #5F928C;
    margin-right: 10px;
    font-weight: 900;
}
</style>