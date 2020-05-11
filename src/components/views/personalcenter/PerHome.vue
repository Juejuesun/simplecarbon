<template>
    <div class="box">
        <percard/>
        <pointlist style="justify-self: start;"/>
    </div>
</template>

<script>
import percard from './percard'
import pointlist from './pointlist'

export default {
    components: {
        percard,
        pointlist
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