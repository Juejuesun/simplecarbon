<template>
    <div class="box">
        <frienddyn/>
        <rank style="justify-self: start;"/>
    </div>
</template>

<script>
import frienddyn from './frienddyn'
import rank from './rank'

export default {
    components: {
        frienddyn,
        rank
    }
}
</script>

<style scoped>
.box {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    align-items: center;
    justify-items: center;
    align-content: center;
}
</style>