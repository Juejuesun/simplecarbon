<template>
    <div class="login_con">
        <div>
            <div class="SignIn"  @click="gotoSignin">
                SignIn
            </div>
        </div>
        <div class="animates">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="login_box">
            <!-- <h3>登陆</h3> -->
            <div class="fonts">注册</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item  prop="id" class="name">
                    <el-input v-model="ruleForm.id" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
                <el-form-item style="align-self: center;">
                    <el-button type="primary" @click="submitForm" round style="background-color: rgba(94,165,155,1); border-color:#fff; width: 90px;">注册</el-button>
                </el-form-item>
            </el-form>
            <div class="boxbuttom">
                <div><i class="fa fa-qq"></i></div>
                <div><i class="fa fa-weixin"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     data() {
      return {
        ruleForm: {
          id: '',
          password: ''
        },
        rules: {
          id: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
        submitForm() {
             this.$refs['ruleForm'].validate(async (valid) => {
                if (valid) {
                    let asc = {
                        id: this.ruleForm.id,
                        password: this.ruleForm.password
                    }
                    const {data: res} = await this.$http.post('register', asc)
                    console.log(res)
                    if(res.state=='1') {//正式数据
                    // if(res.id) {//测试数据
                         this.$message({
                          message:"注册成功",
                          type:'success'
                        })
                        setTimeout(() => {
                            this.$router.push("/login")
                        }, 1000);
                    } else {
                        this.$message({
                          message:"注册失败",
                          type:'error'
                        })
                        this.$refs['ruleForm'].resetFields();
                        return false;
                    }
                } else {
                    this.$message({
                        message:"请输入合法账号密码",
                        type:'error'
                    })
                    // this.$refs['numberValidateForm'].resetFields();
                    return false;
                }
            });
        },
        gotoSignin() {
            this.$router.push("/login")
        }
    }
}
</script>

<style scoped>
@import "/src/common/font/font.css";

.login_con {
    background: rgba(94,165,155, 1);
    height: 100%;
    
    display: grid;
    grid-template-columns: 55% auto 5%;
    grid-template-rows: 20% auto 15%;
}
.SignIn {
    width: 70px;
    font-size: 1.3em;
    font-family: '时尚中黑简体';
    text-align: center;
    padding: 5px;
    border: solid 1px rgba(38,71,62,1);
    border-radius: 8px;
    /* background: #5F928C; */
    color: #fff;
    background: #5F928C;
    cursor: pointer;
    margin: 15px 0 0 20px;
}
.SignIn:hover {
    color: #5F928C;
    background: #fff;
}
.login_box {
    width: 400px;
    height: 350px;
    background-color: #fff;
    border-radius: 10px;
    
    grid-column-start: 2;
    grid-row-start: 2;

    display: flex;
    flex-direction: column;
}
.fonts {
    font-family: '时尚中黑简体';
    font-size: 2em;
    font-weight: 900;
    color: #5F928C;
    margin: 25px;

    align-self: center;
}
.demo-ruleForm {
    align-self: center;
    width: 70%;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
}
.boxfooter {
    display: flex;
    justify-content: space-between;

    margin: 0 40px 0 40px;
    color: rgba(94,165,155,1);
    cursor: pointer;
}
.boxbuttom {
    display: flex;
    justify-content: center;

    font-size: 1.3em;
    color: rgba(94,165,155,1);
    cursor: pointer;
}
i {
    margin: 0 15px 0 15px;
}

/* 动画 */
.animates {
    /* grid-column-start: 2; */
    grid-row-start: 2;
    align-self: center;
    justify-self: center;
}
ul {
    height: 200px;
    display: flex;
}
li {
    list-style-type:none;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #fff;
    margin-right: 20px;
}
li:nth-child(1) {
    /* background: red; */
    animation: love1 4s 0s infinite;
    background: #fff;
}
li:nth-child(2) {
    /* background: darkturquoise; */
    animation: love2 4s 0.2s infinite;
    background: #fff;
}
li:nth-child(3) {
    /* background: darksalmon; */
    animation: love3 4s 0.4s infinite;
    background: #fff;

}
li:nth-child(4) {
    /* background: deeppink; */
    animation: love4 4s 0.6s infinite;
    background: #fff;
}
li:nth-child(5) {
    /* background: yellow; */
    animation: love5 4s 0.8s infinite;
    background: #fff;
}
li:nth-child(6) {
    /* background: deeppink; */
    animation: love4 4s 0.6s infinite;
    background: #fff;
}
li:nth-child(7) {
    /* background-color: darksalmon; */
    animation: love3 4s 0.4s infinite;
    background: #fff;
}
li:nth-child(8) {
    /* background: darkturquoise; */
    animation: love2 4s 0.2s infinite;
    background: #fff;
}
li:nth-child(9) {
    /* background: red; */
    animation: love1 4s 0s infinite;
    background: #fff;
}

@keyframes love1 {
    30%, 50% {
        height: 60px;
        transform: translateY(-30px);
    }
    70%, 100% {
        height: 0px;
        transform: translateY(0px);
    }
}
@keyframes love2 {
    30%, 50% {
        height: 125px;
        transform: translateY(-60px);
    }
    70%, 100% {
        height: 0px;
        transform: translateY(0px);
    }
}
@keyframes love3 {
    30%, 50% {
        height: 160px;
        transform: translateY(-75px);
    }
    70%, 100% {
        height: 0px;
        transform: translateY(0px);
    }
}
@keyframes love4 {
    30%, 50% {
        height: 180px;
        transform: translateY(-60px);
    }
    70%, 100% {
        height: 0px;
        transform: translateY(0px);
    }
}
@keyframes love5 {
    30%, 50% {
        height: 200px;
        transform: translateY(-45px);
    }
    70%, 100% {
        height: 0px;
        transform: translateY(0px);
    }
}
</style>