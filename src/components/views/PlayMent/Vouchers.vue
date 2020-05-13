<template>
    <div>
        <div class="voucontainer">
            <div class="btnbox">
                <div style="font-size: 24px; margin: 5px;">COUOON</div>
                <div style="font-size: 36px; margin: 5px;">180</div>
                <div class="checkbtn" @click="changeCash">兑换</div>
            </div>
            <div class="imgbox1" style="height: 96px; width: 190px;">
                <el-image src="https://pic.downk.cc/item/5ebc0c9ec2a9a83be586fc11.png"></el-image>
            </div>
            <div class="imgbox2">
                <el-image src="https://pic.downk.cc/item/5ebc0c9ec2a9a83be586fc16.png"></el-image>
            </div>
        </div>
        <!-- 第二个 -->
        <div class="voucontainer">
            <div class="imgbox2d">
                <el-image src="https://pic.downk.cc/item/5ebc0c9ec2a9a83be586fc19.png"></el-image>
            </div>
            <div class="imgbox1d">
                <el-image src="https://pic.downk.cc/item/5ebc1287c2a9a83be58e0e1a.png"></el-image>
            </div>
            <div class="btnbox">
                <div style="font-size: 24px; margin: 5px;">Sait & pepper Grinder  </div>
                <div style="font-size: 36px; margin: 5px;">200</div>
                <div class="checkbtn" @click="changeCash">兑换</div>
            </div>
        </div>
        <!-- 第三个 -->
        <div class="voucontainer">
            <div class="btnbox">
                <div style="font-size: 24px; margin: 5px;">THERMO POT</div>
                <div style="font-size: 36px; margin: 5px;">230</div>
                <div class="checkbtn" @click="changeCash">兑换</div>
            </div>
            <div class="imgbox1">
                <el-image src="https://pic.downk.cc/item/5ebc1287c2a9a83be58e0e1c.png"></el-image>
            </div>
            <div class="imgbox2">
                <el-image src="https://pic.downk.cc/item/5ebc0c9ec2a9a83be586fc1c.png"></el-image>
            </div>
        </div>
        <!-- 弹窗 -->
        <div>
            <!-- 第一个 -->
            <el-dialog
            :visible.sync="dialogVisible"
            width="25%"
            height="30%">
                <div class="chacked">
                    <div style="align-self: center; margin: 10px">拥有：<span>726</span></div>
                    <div style="align-self: center; margin: 10px">扣除：<span>180</span></div>
                    <div style="align-self: center; margin: 10px">剩余：<span>546</span></div>
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
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            bussdone: false,
        }
    },
    methods: {
        changeCash() {
            this.dialogVisible = true
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
.voucontainer {
    background: rgba(245,247,246,1);
    display: grid;
    grid-template-columns: repeat(3, 33.3%);
    padding-bottom: 5px;
    /* margin: 10px; */
    border-bottom: solid 1px rgb(199, 228, 228);
}
.imgbox1 {
    height: 161px;
    width: 200px;
    align-self: end;
}
.imgbox2 {
    height: 150px;
    width: 200px;
    justify-self: end;
    align-self: center;
}
.imgbox1d {
    height: 169px;
    width: 200px;
    align-self: end;
    justify-self: end;
}
.imgbox2d {
    height: 150px;
    width: 200px;
    justify-self: start;
    align-self: center;
}
.btnbox {
    align-self: center;
    justify-self: center;
    font-family: '时尚中黑简体';
    color: #393D35;
    
}
.checkbtn {
    width: 68px;
    height: 27px;
    background: rgba(199,211,211,1);
    color: #413D3A;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

/* 弹窗样式 */
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