<template>
    <div class="boxcontainer">
        <!-- 图表区 -->
        <div class="graph">
            <!-- <img src="" alt=""> -->
        </div>
        <!-- 功能区 -->
        <div>
            <div class="solveData">
                <el-form :model="numberValidateForm" ref="numberValidateForm">
                    <el-form-item
                        prop="num"
                        :rules="[
                        { required: true, message: '输入积分不能为空'},
                        { type: 'number', message: '输入积分必须为数字值'}
                        ]">
                        <el-input v-model.number="numberValidateForm.num" size="medium" placeholder="请输入积分" style="width: 200px;" autocomplete="off"></el-input>
                        <!-- <el-input type="age" v-model.number="numberValidateForm.num" ></el-input> -->
                    </el-form-item>
                </el-form>
                
                <div class="pointfont">
                    <div class="dhai">拥有积分：<span>234</span></div>
                    <div>今日报价：<span>10 分 = 0.8 元</span></div>
                </div>
                <div>
                    <div @click="changeCash" class="changebtn">兑换</div>
                    <el-dialog
                    :visible.sync="dialogVisible"
                    width="25%"
                    height="30%">
                        <div class="chacked">
                            <div style="align-self: center; margin: 10px">兑换现金：<span>8</span>元</div>
                            <div style="align-self: center; margin: 10px">剩    余：<span>826</span></div>
                        </div>
                        <div slot="footer" class="dialog-footer">
                            <div @click="dialogVisible = false" class="donebtn">取消</div>
                            <div @click="exchange" class="donebtn">确定</div>
                        </div>
                    </el-dialog>
                    <!-- 第二个弹窗 -->
                    <el-dialog
                    :visible.sync="bussdone"
                    width="25%"
                    height="30%">
                        <div class="chacked2">
                            <div class="chacked2"><i class="fa fa-check"></i></div>
                        </div>
                        <div slot="footer" class="dialog-footer2">
                            <div @click="bussdone = false" class="donebtn2">完成</div>
                        </div>
                    </el-dialog>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            bussdone: false,
            numberValidateForm: {
                num: ''
            }
        }
    },
    methods: {
        changeCash() {
            this.$refs['numberValidateForm'].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    this.dialogVisible = true
                    this.$refs['numberValidateForm'].resetFields();
                } else {
                    this.$message({
                        message:"提交失败",
                        type:'error'
                    })
                    return false;
                }
            });
            // his.dialogVisible = true
            // this.dyndata[index].isFollowed = true
        },
        exchange() {
            // axios请求
            this.dialogVisible = false
            this.bussdone = true
        }
    }
}
</script>

<style scoped>
.graph {
    height: 340px;
    width: 770px;
    background: darkgoldenrod;
}
.donebtn {
    width: 65px;
    height: 25px;
    background: #75B4AB;
    border-radius: 10px;
    color: #ffffff;
    font-family: '时尚中黑简体';
    text-align: center;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.donebtn:hover {
    background-color:rgb(147, 192, 185);
}
.dialog-footer {
    display: flex;
    justify-content: space-around;
}
.chacked {
    font-size: 15px;
    color: #8D8E8F;
    display: flex;
    flex-direction: column;
}
.changebtn {
    width: 80px;
    height: 40px;
    background: #5F928C;
    border-radius: 10px;
    color: #ffffff;
    font-family: '时尚中黑简体';
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.changebtn:hover {
    background-color: rgb(123, 165, 160);
}

.solveData {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* display: grid;
    grid-template-columns: 20% 20% 60%; */

}
.pointfont {
    font-family: '时尚中黑简体';
    font-size: 15px;
    color: #919497;
    margin: 0 150px 0 40px;
}
.dhai {
    margin: 5px;
}
.boxcontainer {
    height: 100%;
    display: grid;
    grid-template-rows: 80% 20%;
    justify-items: center;
    align-items: center;
}
/* 第二个弹窗 */
i {
    margin-left: 3px;
    cursor: pointer;
}
.dialog-footer2 {
    display: flex;
    justify-content: center;
}
.chacked2 {
    font-size: 3em;
    color: #75B4AB;
    display: flex;
    justify-content: center;
}
.donebtn2 {
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
.donebtn2:hover {
    background-color:rgb(147, 192, 185);
}
</style>