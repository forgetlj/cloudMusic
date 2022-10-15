<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {userPlayerInit} from '@/stores/player'
import {toRefs} from 'vue'
userPlayerInit()

</script>

<template>
  

  <RouterView/>
</template>

<style lang="less">

/*公共样式*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

li {
    list-style: none;
    cursor: pointer;
}

img,
span {
    user-select: none;
    cursor: pointer;
}

a {
    text-decoration: none;
}

/*-------------------------------------*/
body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
    // background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 1020px;
    height: 690px;
}
</style>
