<template>
  <!-- 头部实现 -->
  <div class="header">

<div class="logo">
    <img src="./images/logo.png" alt="">
    <span>佳佳音乐</span>
</div>

<div class="middle">
    <i class="iconfont icon-jiantou-xiangzuo"></i>
    <i class="iconfont icon-jiantou-xiangyou"></i>
    <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="搜索">
    </div>
    <i class="iconfont icon-mic-on"></i>
</div>

<div class="other">
    <div class="userInfo">
        <img src="./images/ningzi.jpg" alt="">
        <span>刘佳</span>
    </div>

    <ul>
        <li><i class="iconfont icon-zhuti"></i></li>
        <li><i class="iconfont icon-shezhi"></i></li>
        <li><i class="iconfont icon-xinfeng"></i></li>
        <li class="vertical_bar"></li>
        <li><i class="iconfont icon-MINIMIZE"></i></li>
        <li><i class="iconfont icon-zuixiaohua"></i></li>
        <li><i class="iconfont icon-zuidahua"></i></li>
        <li><i class="iconfont icon-guanbi"></i></li>
    </ul>

</div>
</div>

<!-- 渐变线条 -->
<div class="line"></div>
</template>
<script setup lang='ts'>
import {ref,reactive,toRefs} from 'vue'

//改变主题
// const mode = ref(false)
// const changeThemeMode = () => {
//   window.document.documentElement.setAttribute('data-theme', mode.value ? 'dark' : 'light')

//   mode.value = !mode.value;
// }
</script>
<style lang='less' scoped>
/*头部*/
.header {
    width: 100%;
    height: 60px;
    background-color: #323235;
    display: flex;
    position: relative;

    & i {
        color: #AFAFAF;
        display: block;
        cursor: pointer;
        font-size: 20px;
    }

    .logo {
        display: flex;
        height: 100%;
        width: 175px;
        align-items: center;
        margin-left: 25px;
        user-select: nonoe;

        img {
            width: 30px;
            height: 30px;
        }

        span {
            font-size: 20px;
            color: #fff;
            margin-left: 10px;
        }
    }

    .middle {
        height: 100%;
        display: flex;
        align-items: center;
        margin-left: 20px;

        .search {
            height: 40px;
            display: flex;
            align-items: center;
            background-color: #434346;
            border-radius: 30px;
            padding: 10px;
            margin-left: 10px;
            margin-right: 10px;
        }

        input {
            background-color: transparent;
            border: 0;
            height: 15px;
            line-height: 15px;
            outline: none !important;
            color: #fff;
            margin-left: 5px;
        }
    }

    .other {
        height: 100%;
        display: flex;
        align-items: center;
        margin-left: 80px;

        .userInfo {
            display: flex;
            align-items: center;

            img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 10px;
            }

            span {
                color: #adadad;
                font-size: 13px;
            }
        }

        ul {
            position: absolute;
            right: 20px;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .vertical_bar {
                width: 1px;
                height: 20px;
                background-color: #464648;
            }

            li {
                margin-left: 20px;
            }
        }
    }
}

.line {
    width: 100%;
    height: 1px;
    background-image: linear-gradient(120deg, #fccb90 0%, red 50%, #d57eeb 100%);
}
</style>