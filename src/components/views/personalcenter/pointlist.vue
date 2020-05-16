<template>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '2px 1px 1px 1px'}">
        <el-collapse v-model="activeNames" accordion >
            <el-collapse-item name="1">
                <template slot="title" >
                    <span class="icosdj">本日积分</span>
                </template>
                <el-container style="height: 150px;">
                    <el-main class="mainbox">
                    <vuescroll :ops="ops">
                        <div v-for="(tables,index) in tableDayData" :key="index">
                            <div class="tablebox">
                                <div>{{tables.scoreRecordNum}}</div>
                                <!-- <div>{{tables.totals}}</div> -->
                                <div style="justify-self: end;">{{tables.scoreRecordType}}</div>
                            </div>
                        </div>
                    </vuescroll>
                    </el-main>
                </el-container>
            </el-collapse-item>
            <el-collapse-item name="2">
                <template slot="title" >
                    <span class="icosdj">本周积分</span>
                </template>
                <el-container style="height: 150px;">
                    <el-main class="mainbox">
                    <vuescroll :ops="ops">
                        <div v-for="(tables,index) in tableWeekData" :key="index">
                            <div class="tablebox">
                                <div>{{tables.scoreRecordNum}}</div>
                                <!-- <div>{{tables.totals}}</div> -->
                                <div style="justify-self: end;">{{tables.scoreRecordType}}</div>
                            </div>
                        </div>
                    </vuescroll>
                    </el-main>
                </el-container>
            </el-collapse-item>
            <el-collapse-item name="3">
                <template slot="title" >
                    <span class="icosdj">本月积分</span>
                </template>
                <el-container style="height: 150px;">
                    <el-main class="mainbox">
                    <vuescroll :ops="ops">
                        <div v-for="(tables,index) in tableMonthData" :key="index">
                            <div class="tablebox">
                                <div>{{tables.scoreRecordNum}}</div>
                                <!-- <div>{{tables.totals}}</div> -->
                                <div style="justify-self: end;">{{tables.scoreRecordType}}</div>
                            </div>
                        </div>
                    </vuescroll>
                    </el-main>
                </el-container>
            </el-collapse-item>
            <el-collapse-item name="4">
                <template slot="title">
                    <span class="icosdj ">积分查询</span>
                </template>
                <el-container style="height: 150px;">
                    <el-header style="margin: 0; padding: 0; height: 20%">
                        <div class="datebox">
                            <el-date-picker
                            v-model="value1"
                            type="date"
                            size="mini"
                            style="width: 150px"
                            placeholder="选择日期"
                            format="MM 月 dd 日"
                            value-format="yyyy-MM-dd">
                            </el-date-picker>
                            <el-button size="mini" @click="checkSomeDay">确定</el-button>
                        </div>
                    </el-header>
                    <el-main class="mainbox">
                    <vuescroll :ops="ops">
                        <div v-for="(tables,index) in tableCheckhData" :key="index">
                            <div class="tablebox">
                                <div>{{tables.scoreRecordNum}}</div>
                                <!-- <div>{{tables.totals}}</div> -->
                                <div style="justify-self: end;">{{tables.scoreRecordType}}</div>
                            </div>
                        </div>
                    </vuescroll>
                    </el-main>
                </el-container>
            </el-collapse-item>
        </el-collapse>
    </el-card> 
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
            activeNames: '1',
            value1: '',
            tableData: [
                {
                    scoreRecordNum: 2,
                    scoreRecordTime: '2020-05-11',
                    scoreRecordType: '公交'
                },
                {
                    scoreRecordNum: 1,
                    scoreRecordTime: '2020-05-13',
                    scoreRecordType: '步行'
                },
                {
                    scoreRecordNum: -100,
                    scoreRecordTime: '2020-05-13',
                    scoreRecordType: '现金交易'
                },
                {
                    scoreRecordNum: 2,
                    scoreRecordTime: '2020-05-13',
                    scoreRecordType: '绿色购物'
                },
                {
                    scoreRecordNum: 2,
                    scoreRecordTime: '2020-05-13',
                    scoreRecordType: '公交'
                }
            ],
            tableDayData: [],
            tableWeekData: [],
            tableMonthData: [],
            tableCheckhData: [],
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
        ...mapState(['userInfo'])
    },
    methods: {
        async getInfo() {
            let asc = {
                id: this.userInfo.userId
            }
            // asc = this.tableData //测试数据
            // const {data: res1} = await this.$http.post('http://localhost:3000/getInfo', asc)//测试接口 获取积分状况
            // const {data: res2} = await this.$http.post('http://localhost:3000/getInfo', asc)
            // const {data: res3} = await this.$http.post('http://localhost:3000/getInfo', asc)

            const {data: res1} = await this.$http.post('http://localhost:8080/SimpleCarbon/getScoreForToday.action', asc)//正式接口 获取积分状况
            const {data: res2} = await this.$http.post('http://localhost:8080/SimpleCarbon/getScoreForWeek.action', asc)
            const {data: res3} = await this.$http.post('http://localhost:8080/SimpleCarbon/getScoreForWeek.action', asc)
            let resDay = this.changeNum(res1)
            let resWeek = this.changeNum(res2)
            let resMonth = this.changeNum(res3)
            
            this.tableDayData = resDay
            // console.log( this.tableDayData)
            this.tableWeekData = resWeek
            // console.log(this.tableWeekData)
            this.tableMonthData = resMonth
            // console.log(this.tableMonthData)
        },
        async checkSomeDay() {
            let asc = {
                id: this.userInfo.userId,
                date: this.value1
            }
            // console.log(asc)
            // asc = this.tableData //测试数据
            // const {data: res} = await this.$http.post('http://localhost:3000/getInfo', asc)//测试接口 查询某日积分
            const {data: res} = await this.$http.post('http://localhost:8080/SimpleCarbon/getScoreForDay.action', asc)//正式接口
            let resOne = this.changeNum(res)
            this.tableCheckhData = resOne
        },
        changeNum(data) {
            const len = data.length
            for(let i=0; i<len; i++ ) {
                let temp = data[i].scoreRecordNum
                if(temp>0) {
                    data[i].scoreRecordNum = '+'+temp
                } else {
                    data[i].scoreRecordNum = String(temp)
                }
            }
            return data
        }
    },
    created() {
        this.getInfo()
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
    background-color: rgba(124,165,160,1);
}
.icosdj {
    font-family: '时尚中黑简体';
    font-size: 1.5em;
    color: #606161;
    margin-left: 15px;
}
.mainbox {
    background-color: rgba(229,239,239,1);
}
.tablebox {
    border-bottom: solid 1px #FEFFFF;
    font-family: '时尚中黑简体';
    font-size: 1.2em;
    color: #414545;

    display: grid;
    grid-template-columns: repeat(2, 50%);
    padding: 0 10px 0 10px;
    
}
.datebox {
    display: flex;
    justify-content: space-around;
}
.points {
    width: 100px;
    display: flex;
    flex: 1;
    justify-content: center;
}
</style>