<template>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '2px 1px 1px 1px'}">
        <el-collapse v-model="activeNames" accordion >
            <el-collapse-item name="1">
                <template slot="title" >
                    <span class="icosdj">本日积分</span>
                </template>
                <el-container style="height: 150px;">
                    <el-main class="mainbox">
                        <div v-for="(tables,index) in tableData" :key="index">
                            <div class="tablebox">
                                <div>{{tables.data}}</div>
                                <div>{{tables.totals}}</div>
                                <div style="justify-self: end;">{{tables.tools}}</div>
                            </div>
                        </div>
                    </el-main>
                </el-container>
            </el-collapse-item>
            <el-collapse-item name="2">
                <template slot="title" >
                    <span class="icosdj">本周积分</span>
                </template>
                <el-container style="height: 150px;">
                    <el-main class="mainbox">
                    <div v-for="(tables,index) in tableData" :key="index">
                        <div class="tablebox">
                            <div>{{tables.data}}</div>
                            <div>{{tables.totals}}</div>
                            <div style="justify-self: end;">{{tables.tools}}</div>
                        </div>
                    </div>
                    </el-main>
                </el-container>
            </el-collapse-item>
            <el-collapse-item name="3">
                <template slot="title" >
                    <span class="icosdj">本月积分</span>
                </template>
                <el-container style="height: 150px;">
                    <el-main class="mainbox">
                        <div v-for="(tables,index) in tableData" :key="index">
                            <div class="tablebox">
                                <div>{{tables.data}}</div>
                                <div>{{tables.totals}}</div>
                                <div style="justify-self: end;">{{tables.tools}}</div>
                            </div>
                        </div>
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
                            placeholder="选择日期">
                            </el-date-picker>
                            <el-button size="mini">确定</el-button>
                        </div>
                    </el-header>
                    <el-main class="mainbox">
                        <div v-for="(tables,index) in tableData" :key="index">
                            <div class="tablebox">
                                <div>{{tables.data}}</div>
                                <div>{{tables.totals}}</div>
                                <div style="justify-self: end;">{{tables.tools}}</div>
                            </div>
                        </div>
                    </el-main>
                </el-container>
            </el-collapse-item>
        </el-collapse>
    </el-card> 
</template>

<script>
export default {
    data() {
        return {
            activeNames: '1',
            value1: '',
            tableData: [
                {
                    data: '+2',
                    totals: '826',
                    tools: '公交'
                },
                {
                    data: '+1',
                    totals: '827',
                    tools: '步行'
                },
                {
                    data: '-100',
                    totals: '727',
                    tools: '现金交易'
                },
                {
                    data: '+2',
                    totals: '729',
                    tools: '绿色购物'
                },
                {
                    data: '+2',
                    totals: '801',
                    tools: '公交'
                },
            ],
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
    grid-template-columns: repeat(3, 33.3%);
    
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