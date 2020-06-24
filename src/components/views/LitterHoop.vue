<template>
    <div>
        <el-container class="con">
            <el-header class="headerview">
                <div  style="display: flex; align-items: center;">
                    <el-avatar style="border: solid 1px rgba(51,102,101,1); margin-right: 5px;" :size="25" :src="userInfo.avatar">{{userInfo.userName}}</el-avatar>
                    <el-popover placement="bottom" trigger="hover" >
                        <div>
                            <h3 class="hoverdown">个人中心</h3>
                            <h3 class="hoverdown" @click="logOut">退出</h3>
                        </div>
                        <div slot="reference">
                            <div class="usercount">{{userInfo.userName}}<i class="el-icon-arrow-down icomenu"></i></div>
                        </div>
                    </el-popover>
                </div>
            </el-header>
            <el-main class="mainview hoopvs">
                <div class="box">
                    <div class="boxitem1"></div>
                    <div class="boxinner1">
                        <div class="imgbox">
                            <el-image src="https://pic.downk.cc/item/5ec117a9c2a9a83be54a5c52.png"></el-image>
                        </div>
                    </div>
                    <div class="boxinfo">
                        <h1 class="tittle">熊猫守护者</h1>
                        <div class="fontbox">支持野生大熊猫栖息地保护，推动秦岭等地自然生态建设。 </div>
                        <div class="boxbtn" @click="outerVisible = true">捐赠碳积分</div>
                    </div>
                </div>
                <div class="box">
                    <div class="boxitem2"></div>
                    <div class="boxinner2">
                        <div class="imgbox">
                            <el-image src="https://pic.downk.cc/item/5ec117a9c2a9a83be54a5c56.png"></el-image>
                        </div>
                    </div>
                    <div class="boxinfo">
                        <h1 class="tittle">黄房子计划</h1>
                        <div class="fontbox">黄房子美学启蒙公益项目通过对乡村学校援建艺术教室，捐赠美育设备和教材组织美学课程和活动等，为信息相对闭塞，条件相对落后的乡村学校的孩子们打开一扇美与爱的窗口。 
                        </div>
                        <div class="boxbtn" @click="outerVisible = true">捐赠碳积分</div>
                    </div>
                </div>
            </el-main>
        </el-container>
        <el-dialog width="35%" height="50%" :visible.sync="outerVisible">
            <el-dialog
            width="30%"
            :visible.sync="innerVisible"
            append-to-body>
            <!-- 内层一 -->
                <div class="chacked">
                    <div>确定捐出{{numberValidateForm.num}}个碳积分吗？</div>
                </div>
                <div slot="footer" class="dialog-footer">
                    <div @click="innerVisible = false" class="donebtn">取消</div>
                    <div @click="subnow" class="donebtn">确定</div>
                </div>
            </el-dialog>
            <el-dialog
            width="30%"
            :visible.sync="inable"
            append-to-body>
            <!-- 内层一二-->
                <div class="chacked2">
                    <h1>积分不足</h1>
                </div>
                <div slot="footer" class="dialog-footer2">
                    <div @click="inable = false" class="donebtn2">确定</div>
                </div>
            </el-dialog>
            <div class="chacked22">
                <el-form :model="numberValidateForm" ref="numberValidateForm">
                    <el-form-item
                        prop="num"
                        :rules="[
                        { required: true, message: '输入积分不能为空'},
                        { type: 'number', message: '输入积分必须为数字值'}
                        ]">
                        <el-input v-model.number="numberValidateForm.num" size="medium" placeholder="请输入捐赠积分数" style="width: 200px;" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="outerVisible = false">取 消</el-button>
                <!-- <div @click="changeScore" class="changebtn"></div> -->
                <el-button type="primary" @click="changeScore">捐 赠</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data() {
        return {
            outerVisible: false,
            innerVisible: false,
            inable: false,
            isLognIn: false,
            numberValidateForm: {
                num: ''
            },
            // changeNum: 0,
            // afterAccount: 0
        }
    },
    methods: {
        logOut() {
            window.sessionStorage.clear()
            setTimeout(() => {
                this.isLognIn = false
                this.$router.push("/login")
            }, 1000);
        },
        isLognInNow() {
            setTimeout(() => {
                const state = window.sessionStorage.getItem('USERNAME')
                if(state) {
                    this.isLognIn = true
                }
            })
        },
        changeScore() {
            this.$refs['numberValidateForm'].validate((valid) => {
                if (valid) {
                    if(this.numberValidateForm.num <= this.countInfo.userScore){
                        this.innerVisible = true
                    }else {
                        this.inable = true
                    }
                    // this.$refs['numberValidateForm'].resetFields();
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
        async subnow() {
            let asc = {
                id: this.userInfo.userId,
                num: this.numberValidateForm.num
            }
            const {data: res} = await this.$http.post('/changeScoreToDonate', asc)
            if(res) {
                if(res.state == '1') {
                    this.$message({
                        message:"捐赠成功！",
                        type:'success'
                    })
                    this.$refs['numberValidateForm'].resetFields()
                    this.innerVisible = false
                    this.outerVisible = false
                }else {
                    this.$message({
                        message:"请求失败",
                        type:'error'
                    })
                    return false;
                }
            }else {
                this.$message({
                        message:"请求失败",
                        type:'error'
                    })
                    return false;
            }
        }
    },
    created() {
        this.isLognInNow()
    },
    computed: {
        ...mapState(['userInfo','countInfo'])
    }
}
</script>

<style scoped>
.headerview {
    background-color: rgba(95,146,140,1);
    height: 40px !important;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.hoverdown {
    font-family: '时尚中黑简体';
    text-align: center;
    cursor: pointer;
    margin: 0;
    padding: 10px;
}
.hoverdown:hover {
    background: rgba(229,239,239,1);
}
.hoopvs {
    padding-right: 0;
    padding-left: 0;
    padding-top: 0;
}
.box {
    height: 230px;
    margin: 20px 0 20px 0;
    display: grid;
    grid-template-columns: 15% 30% 55%;
}
.boxitem1 {
    width: 100px;
    height: 230px;
    background: rgba(191,231,158,1);
}
.boxitem2 {
    width: 100px;
    height: 230px;
    background: rgba(125,213,201,1);
}
.imgbox {
    width:295px;
    height:207px;
    align-self: center;
}
.boxinner1 {
    background: rgba(191,231,158,1);
    display: flex;
    justify-content: center;
}
.boxinner2 {
    background-color: rgba(125,213,201,1);
    display: flex;
    justify-content: center;
}
.boxinfo {
    background-color: #fff;
    padding: 20px;
    padding-left: 60px;
    padding-right: 60px;

    display: grid;
    justify-items: center;
}
.tittle {
    font-family: '时尚中黑简体';
    color: #4F5251;
    text-align: center;
    font-size: 1.5em;
    margin: 10px;
}
.fontbox {
    font-family: '时尚中黑简体';
    color: #4F5251;
}
.boxbtn {
    width: 100px;
    height: 25px;
    font-family: '时尚中黑简体';
    color: #413D3A;
    background-color: #C7D3D3;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
}

.dialog-footer {
    display: flex;
    justify-content: space-around;
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
.dialog-footer2 {
    display: flex;
    justify-content: center;
}
.chacked2 {
    font-size: 1em;
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