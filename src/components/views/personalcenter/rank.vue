<template>
    <div>
        <el-card class="box-card" shadow="never" :body-style="{ padding: '0px'}">
            <el-container class="boxcon">
                <el-header class="boxheader">
                    <div>{{rankName}}</div>
                </el-header>
                <el-main class="boxbody">
                    <div v-for="(rank, index) in rankDatas" :key="index" class="rankInLine">
                        <div>{{rank.ranking}}</div>
                        <div>
                            <el-avatar style="border: solid 1px rgba(51,102,101,1); margin-right: 10px;" :size="20" :src="rank.avantar">{{rank.name}}</el-avatar>
                        </div>
                        <div @click="followIt(index)"><i class="el-icon-plus" v-show="rank.isFollowed!='1'"></i></div>
                        <div>{{rank.name}}</div>
                        <div style="justify-self: end;">{{rank.totals}}</div>
                    </div>
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

export default {
    data() {
        return {
            rankData: [
                {
                    ranking: 1,
                    name: 'JAME',
                    totals: '2340',
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
                    ranking: 2,
                    name: 'SUMMER',
                    totals: '1348',
                    isFollowed: '1',
                    friendId: '12345',
                    avantar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                    images: [
                        {url: 'https://pic.downk.cc/item/5ebac3b3c2a9a83be5bc0624.png'},
                        {url: 'https://pic.downk.cc/item/5ebac00fc2a9a83be5b6a0ca.png'},
                        {url: 'https://pic.downk.cc/item/5ebac005c2a9a83be5b69356.png'}
                    ]
                },
                {
                    ranking: 3,
                    name: 'VITTO',
                    totals: '1230',
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
                    ranking: 4,
                    name: 'MOYO',
                    totals: '1193',
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
                    ranking: 5,
                    name: 'SNAP',
                    totals: '1092',
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
                userid: this.userInfo.userId,
                friendId: this.rankDatas[index].friendId
            }
            // asc = {//测试数据
            //     state: "1"
            // }
            // const {data: res} = await this.$http.post('http://localhost:3000/comments', asc)//测试接口 关注好友
            const {data: res} = await this.$http.post('http://localhost:8080/SimpleCarbon/followSomeone.action', asc)//正式接口
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
            const {data: res} = await this.$http.post(`http://localhost:8080/SimpleCarbon/${apis}`, asc)//正式接口

            if(res) {
                console.log(res)
                this.rankDatas = res
            }
        }
    },
    mounted() {
        if( this.$route.query.rc == 'friend') {
            this.rankName = '好友排行榜'
            this.getFriendRank('getInfo')
        }
        if( this.$route.query.rc == 'city') {
            this.rankName = '城市排行榜'
            this.getFriendRank('getInfo')
        }
        if( this.$route.query.rc == 'country') {
            this.rankName = '全国排行榜'
            this.getFriendRank('getInfo')
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
}
.rankInLine {
    display: grid;
    grid-template-columns: 5% 12% 13% 35% 35%;
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