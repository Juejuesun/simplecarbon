<template>
    <div>
        <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <el-container class="boxcon">
                <el-header class="boxheader">
                    <div class="block1">
                        <div><el-avatar style="border: solid 1px rgba(51,102,101,1); margin-right: 10px;" :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">VITTO</el-avatar></div>
                        <div>VITTO</div>
                    </div> 
                    <div><i class="el-icon-arrow-right iconin"></i></div>
                </el-header>
                <el-main class="boxbody">
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
                            <el-carousel-item v-for="item in 6" :key="item">
                            <h3 class="small">{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-main>
            </el-container>
        </el-card>  
    </div>
</template>

<script>
export default {

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
</style>