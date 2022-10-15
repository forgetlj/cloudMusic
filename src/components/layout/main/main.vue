<template>
   <div class="main">
    <leftBox/>
    <el-scrollbar>
        <router-view></router-view>
    </el-scrollbar>
    <footerPlayList/>
   </div>
</template>
<script setup lang='ts'>
import {ref,reactive,toRefs} from 'vue'
import leftBox from './components/left_box.vue'
import rightBox from './components/right_box.vue'
</script>
<style lang='less'>
.main {
    width: 100%;
    height: 560px;
    display: flex;
    background-color: #434343;
    position: relative;
    }
</style>