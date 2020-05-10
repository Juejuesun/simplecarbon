<template>
    <div class="login_con">
        <div class="login_box">
            <!-- <h3>登陆</h3> -->
            <div class="fonts">登陆</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item  prop="name" class="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
                <el-form-item style="align-self: center;">
                    <el-button type="primary" @click="submitForm" round style="background-color: rgba(94,165,155,1); border-color:#fff; width: 90px;">登陆</el-button>
                </el-form-item>
            </el-form>
            <div class="boxfooter">
                <div>忘记密码</div>
                <div>注册</div>
            </div>
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
          name: '',
          password: ''
        },
        rules: {
          name: [
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
            console.log(this.ruleForm)
            this.$router.push("/home")
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
}
.boxbuttom {
    display: flex;
    justify-content: center;

    font-size: 1.3em;
    color: rgba(94,165,155,1);
}
i {
    margin: 0 15px 0 15px;
}
</style>