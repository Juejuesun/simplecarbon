<template>
    <div>
        <el-card class="box-card" shadow="never" :body-style="{ padding: '0px'}">
            <el-container class="boxcon">
                <el-header class="boxheader">
                    <div>{{rankName}}</div>
                </el-header>
                <el-main class="boxbody">
                    <vuescroll :ops="ops">
                    <div v-for="(rank, index) in rankDatas" :key="index" class="rankInLine">
                        <div>{{rank.ranking}}</div>
                        <div>
                            <el-avatar style="border: solid 1px rgba(51,102,101,1); margin-right: 10px;" :size="20" :src="rank.avantar">{{rank.name}}</el-avatar>
                        </div>
                        <div @click="followIt(index)"><i class="el-icon-plus" v-show="rank.isFollowed!='1'"></i></div>
                        <div>{{rank.name}}</div>
                        <div style="justify-self: end;">{{rank.totals}}</div>
                    </div>
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
                <div @click="dialogVisible = false" class="donebtn">完成</div>
            </div>
        </el-dialog>
    </div> 
</template>

<script>
import {mapState} from 'vuex'
import vuescroll from 'vuescroll'

export default {
    components: {
        vuescroll
    },
    data() {
        return {
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
            },
            rankDatas: [],
            dialogVisible: false,
            rankNames: {
                friend: '好友排行榜',
                city: '城市排行榜',
                country: '全国排行榜'
            },
            rankName: '好友排行榜'
        }
    },
    computed: {
        ...mapState(['userInfo','countInfo'])
    },
    methods: {
        async followIt(index) {
            let asc = {
                userId: this.userInfo.userId,
                friendId: this.rankDatas[index].friendId
            }
            // asc = {//测试数据
            //     state: "1"
            // }
            // const {data: res} = await this.$http.post('http://localhost:3000/comments', asc)//测试接口 关注好友
            const {data: res} = await this.$http.post('/followSomeone', asc)//正式接口
            if(res) {
                // console.log(res)
                if(res.state=='1') {
                    this.dialogVisible = true
                    this.rankDatas[index].isFollowed = '1'
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
            // asc = this.rankData//测试数据
            // const {data: res} = await this.$http.post(`http://localhost:3000/${apis}`, asc)//测试接口 获取列表
            const {data: res} = await this.$http.post(apis, asc)//正式接口

            if(res) {
                // console.log('排行榜返回数据',res)
                this.rankDatas = res
            }
        }
    },
    mounted() {
        if( this.$route.query.rc == 'friend') {
            this.rankName = '好友排行榜'
            this.getFriendRank('/friendTop10')
        }
        if( this.$route.query.rc == 'city') {
            this.rankName = '城市排行榜'
            this.getFriendRank('/cityTop10')
        }
        if( this.$route.query.rc == 'country') {
            this.rankName = '全国排行榜'
            this.getFriendRank('/countryTop10')
        }
    }
}
</script>

<style scoped>
.box-card {
    width: 30%;
    height: 80%;
    min-width: 275px;
    min-height: 443px;
    border-radius: 10px;
    border: solid 2px rgba(51,102,101,1);
    /* background-color: rgba(124,165,160,1); */
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
    justify-content: center;
}
.boxbody {
    padding: 5px;
    height: 400px;
}
.rankInLine {
    display: grid;
    grid-template-columns: 10% 12% 13% 35% 30%;
    align-items: center;

    font-family: '时尚中黑简体';
    padding: 10px;
    border-bottom: solid 1px #B4B9B2;
    color: #6D6E6E;
    
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
i {
    cursor: pointer;
    color: rgba(117,180,171,1);
}
</style>