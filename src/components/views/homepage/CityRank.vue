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
                        <div>排名</div>
                        <div>城市</div>
                        <div>指数</div>
                    </div>
                    <el-table
                        :data="tableData"
                        stripe
                        height="220"
                        :header-row-class-name="rowheaders"
                        :show-header="hiddenTableHeader"
                        size="mini"
                        style="width: 100%; font-size: 15px; height: 220px; font-family: '时尚中黑简体';">
                        <el-table-column
                            prop="date"
                            label="排名"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="城市"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="指数"
                            align="center">
                        </el-table-column>
                    </el-table>
                </div>
            </el-main>
        </el-container>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            city: '',
            tableData: [{
                date: '1',
                name: '福州',
                address: '15'
                }, {
                date: '2',
                name: '上海',
                address: '21'
                }, {
                date: '3',
                name: '成都',
                address: '33'
                }, {
                date: '4',
                name: '上海',
                address: '21'
                }, {
                date: '5',
                name: '成都',
                address: '33'
                },{
                date: '6',
                name: '武汉',
                address: '35'
            }],
            hiddenTableHeader: false
        }
    },
    methods: {
        rowheaders() {
            return 'rowheader'
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
</style>