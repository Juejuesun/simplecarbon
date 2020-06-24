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
                        :data="cityRanks"
                        stripe
                        height="290"
                        :header-row-class-name="rowheaders"
                        :show-header="hiddenTableHeader"
                        size="mini"
                        style="width: 99%; font-size: 15px; height: 260px; font-family: '时尚中黑简体';">
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
                </div>
            </el-main>
        </el-container>
    </el-card>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data() {
        return {
            city: '',
            hiddenTableHeader: false,            
        }
    },
    computed: {
        ...mapState(['cityRanks'])
    },
    methods: {
        rowheaders() {
            return 'rowheader'
        }
    },
    created() {
        this.$store.dispatch('getCityRank')
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
    padding-top: 13px;
}
.tableheaderstyle {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-items: center;

    color: #FEFFFF;
    font-size: 1.2em;
    font-family: '时尚中黑简体';
    margin: 10px;
    margin-bottom: 5px;
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