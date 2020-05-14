<template>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
        <el-container class="boxcon">
            <el-header class="boxheader">今日城市空气质量排行</el-header>
            <el-main class="boxbody">
                <!-- 搜索区 -->
                <div>
                    <el-input size="small" placeholder="请输入城市" prefix-icon="el-icon-search" v-model="city" clearable></el-input>
                </div>
                <!-- 表格区 -->
                <div>
                    <!-- 表头 -->
                    <div class="tableheaderstyle">
                        <div @click="getrankData">排名</div>
                        <div>城市</div>
                        <div>指数</div>
                    </div>
                    <div>
                        <vuescroll :ops="ops" ref="vs" style="width:100%;height:100%">
                        <el-table
                            :data="tableData"
                            stripe
                            height="220"
                            :header-row-class-name="rowheaders"
                            :show-header="hiddenTableHeader"
                            size="mini"
                            style="width: 100%; font-size: 15px; height: 220px; font-family: '时尚中黑简体';">
                            <el-table-column
                                prop="num"
                                label="排名"
                                align="center">
                            </el-table-column>
                            <el-table-column
                                prop="area"
                                label="城市"
                                align="center">
                            </el-table-column>
                            <el-table-column
                                prop="aqi"
                                label="指数"
                                align="center">
                            </el-table-column>
                        </el-table>
                        </vuescroll>
                    </div>
                </div>
            </el-main>
        </el-container>
    </el-card>
</template>

<script>
import vuescroll from 'vuescroll';

export default {
    components: {
        vuescroll
    },
    data() {
        return {
            city: '',
            tableData: [{
                num: '1',
                area: '福州',
                aqi: '15'
                }, {
                num: '2',
                area: '上海',
                aqi: '21'
                }, {
                num: '3',
                area: '成都',
                aqi: '33'
                }, {
                num: '4',
                area: '上海',
                aqi: '21'
                }, {
                num: '5',
                area: '成都',
                aqi: '33'
                },{
                num: '6',
                area: '上海',
                aqi: '21'
                }, {
                num: '7',
                area: '成都',
                aqi: '33'
                },{
                num: '8',
                area: '上海',
                aqi: '21'
                }],
            cityData: [],
            hiddenTableHeader: false,
            ops: {
                vuescroll: {
                    // wheelScrollDuration: 0,
                    // wheelDirectionReverse: false
                },
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
    methods: {
        rowheaders() {
            return 'rowheader'
        },
        async getrankData() {
            let config = {
                headers: {
                    // Authorization:'APPCODE a4e68331ad2643ffad45b4c984e3b3bb'
                    "Authorization": "APPCODE a4e68331ad2643ffad45b4c984e3b3bb"
                }
            }
            const {data: res} = await this.$http.get('http://ali-pm25.showapi.com/pm25-top', config)
            // console.log(res)
            let list = res.showapi_res_body.list
            console.log(list)
            this.cityData = list
            for( let i = 0; i<8; i++) {
                this.tableData[i].num = list[i].num
                this.tableData[i].area = list[i].area
                this.tableData[i].aqi = list[i].aqi
            }
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
    height: 10%;
    background-color: rgba(251,252,252,1);
    font-family: '时尚中黑简体';
    font-size: 1.2em;
    letter-spacing: 5px;
    text-align: center;
    color: #7C7D7D;
    padding: 20px;
    margin: 0;
}
.boxbody {
    height: 90%;
}
.tableheaderstyle {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-items: center;

    color: #FEFFFF;
    font-size: 1.2em;
    font-family: '时尚中黑简体';
    margin: 20px;
    margin-bottom: 10px;
}
</style>

<style>
.rowheader {
    color: red;
    text-align: center;
    font-family: '时尚中黑简体';
    background-color: rgba(124,165,160,1) !important;
}

.__bar-is-vertical {
  right: -1px !important;
}
.__bar-is-horizontal {
  display: none !important;
}
</style>