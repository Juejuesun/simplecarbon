<template>
    <div class="box">
        <div>
            会员
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            loading: true
        }
    },
    methods: {
        openFullScreen() {
            this.$loading({
                text: '待开发中',
                background: 'rgba(229,239,239, 0.7)',
                target: document.querySelector('.box')
            })
        }
    },
    mounted() {
        setTimeout(() => {
            this.openFullScreen()
        }, 1000);
    }
}
</script>

<style scoped>
.box {
    font-family: '时尚中黑简体';
    height: 500px;
    font-size: 3em;
    color: #75B4AB;
    text-align: center;
}
</style>