<template>
    <div>
        <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <el-container class="boxcon" style="height: 443px;">
                <el-main class="boxbody">
                <vuescroll :ops="ops">
                    <el-card class="frddynCard" shadow="never" :body-style="{ padding: '0px' }" v-for="(dyn, index) in dyndatas" :key="index">
                        <el-container class="boxcon">
                            <el-header class="boxheader">
                                <div class="block1">
                                    <div><el-avatar style="border: solid 1px rgba(51,102,101,1); margin-right: 10px;" :size="40" :src="dyn.avantar">{{dyn.name}}</el-avatar></div>
                                    <div>{{dyn.name}}</div>
                                </div>
                                <!-- 按钮控制 -->
                                <div class="btns">
                                    <div class="btns">
                                        <div class="iconbtns" v-if="dyn.isFollowed!='1'" @click="followIt(index)">
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
                                            <el-carousel-item v-for="(pic, imgindex) in dyn.images" :key="imgindex">
                                                <!-- <h3 class="small">{{ item }}</h3>
                                             -->
                                                <el-image :src="pic.url" fit="cover"></el-image>
                                            </el-carousel-item>
                                        </el-carousel>
                                    </div>
                                </div>
                            </el-main>
                            <el-footer class="boxfooter">
                            </el-footer>
                        </el-container>
                    </el-card>
                </vuescroll>
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
import vuescroll from 'vuescroll'
import {mapState} from 'vuex'

export default {
    components: {
        vuescroll
    },
    data() {
        return {
            dialogVisible: false,
            dyndata: [
                {
                    name: 'VITTO',
                    totals: '826',
                    slogn: 'SCKET IT',
                    isFollowed: '0',
                    friendId: '12345',
                    avantar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                    images: [
                        {url: 'https://pic.downk.cc/item/5ebac3b3c2a9a83be5bc0624.png'},
                        {url: 'https://pic.downk.cc/item/5ebac00fc2a9a83be5b6a0ca.png'},
                        {url: 'https://pic.downk.cc/item/5ebac005c2a9a83be5b69356.png'}
                    ]
                },
                {
                    name: 'SUMMER',
                    totals: '310',
                    slogn: 'Go And See',
                    isFollowed: '0',
                    friendId: '12345',
                    avantar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    images: [
                        {url: 'https://pic.downk.cc/item/5ebac3b3c2a9a83be5bc0624.png'},
                        {url: 'https://pic.downk.cc/item/5ebac00fc2a9a83be5b6a0ca.png'},
                        {url: 'https://pic.downk.cc/item/5ebac005c2a9a83be5b69356.png'}
                    ]
                },
                {
                    name: 'SNAP',
                    totals: '540',
                    slogn: 'Go And Get',
                    isFollowed: '1',
                    friendId: '12345',
                    avantar: '',
                    images: [
                        {url: 'https://pic.downk.cc/item/5ebac3b3c2a9a83be5bc0624.png'},
                        {url: 'https://pic.downk.cc/item/5ebac00fc2a9a83be5b6a0ca.png'},
                        {url: 'https://pic.downk.cc/item/5ebac005c2a9a83be5b69356.png'}
                    ]
                },
                
            ],
            dyndatas: [],
            // picurls: [
            //     {url: 'https://pic.downk.cc/item/5ebac3b3c2a9a83be5bc0624.png'},
            //     {url: 'https://pic.downk.cc/item/5ebac00fc2a9a83be5b6a0ca.png'},
            //     {url: 'https://pic.downk.cc/item/5ebac005c2a9a83be5b69356.png'}
            // ],
            ops: {
                vuescroll: {},
                scrollPanel: {},
                rail: {
                    keepShow: true
                },
                bar: {
                    hoverStyle: true,
                    onlyShowBarOnScroll: true, //是否只有滚动的时候才显示滚动条
                    background: "#909399",//滚动条颜色
                    opacity: 0.5,//滚动条透明度
                    "overflow-x": "hidden"
                }
            }
        }
    },
    computed: {
        ...mapState(['userInfo','countInfo'])
    },
    methods: {
        async followIt(index) {
            let asc = {
                userid: this.userInfo.userId,
                friendId: this.dyndatas[index].friendId
            }
            const {data: res} = await this.$http.post('/followSomeone', asc)//正式接口 关注好友
            if(res) {
                // console.log(res)
                if(res.state=='1') {
                    this.dialogVisible = true
                    this.dyndatas[index].isFollowed = '1'
                }else {
                    this.$message({
                        message:"网络错误",
                        type:'error'
                    })
                    return false;
                }
            }else {
                this.$message({
                    message:"网络错误",
                    type:'error'
                })
                return false;
            }
        },
        async getFriendRank(apis) {
            let asc = {
                id: this.userInfo.userId
            }
            const {data: res} = await this.$http.post(apis, asc)//正式接口 获取列表
            if(res) {
                // console.log(res)
                this.dyndatas = res
            }
        }
    },
    async mounted() {
        if( this.$route.query.rc == 'friend') {
            // this.rankName = '好友排行榜'
            // this.getFriendRank('getInfo')//测试数据
            await this.getFriendRank('/friendTop10')//正式
        }
        if( this.$route.query.rc == 'city') {
            // this.rankName = '城市排行榜'
            await this.getFriendRank('/cityTop10')
        }
        if( this.$route.query.rc == 'country') {
            // this.rankName = '全国排行榜'
            await this.getFriendRank('/countryTop10')
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