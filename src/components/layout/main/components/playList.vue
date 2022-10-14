<template>
    <div class="recm_list">
        <div class="recm_word">推荐歌单<i class="iconfont icon-jiantou-xiangyou"></i></div>
        <!-- <ul>
            <li v-for="item in personalized" :key="item.id">
                <img :src="item.picUrl" alt="">
                <span>夜に駆ける<br>YOASOBI</span>
            </li>
            <li>
                    <img src="./images/main/callYourName.jpg" alt="">
                    <span>Call your name<br>李阿亚</span>
                </li>
        </ul> -->
        <el-row :gutter="20">
            <el-col :span="6" v-for="(item,index) in personalized.sampleSize(8)" :key="index">
                <div class="col-container">
                    <div class="cover hvr-bob">
                        <img :src="item.picUrl" alt="" class="imgStyle">
                    </div>
                    <span style="color:#fff;font-size: 12px;">{{item.name}}</span>
                    <text class="count">{{useNumberFormat(item.playCount || 0)}}</text>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs, onMounted } from 'vue'
import { musicStore } from '@/stores/musicStore'
import { useNumberFormat } from '@/utils/number'
const { personalized } = toRefs(musicStore())
const { getPersonalized } = musicStore()
onMounted(async () => {
    await getPersonalized()
})
</script>
<style lang='less'>
.recm_list {

    position: relative;
    /* background-color: red; */
    margin: auto;
    width: 96%;

    /* margin-top: 10px; */
    .recm_word {
        font-size: 20px;
        color: #fff;
        margin-bottom: 15px;
        width: 100px;
        user-select: none;
    }

    .col-container {
        width: 100%;
        height: 100%;
        position: relative;

        .imgStyle {
            width: 180px;
            border-radius: 15px;
        }

        .cover {
            width: 180px;
            height: 180px;

            border-radius: 15px;
        }

        // .cover:hover {
        //     background-color: rgba(0, 0, 0, 0.5);
        // }

        @-webkit-keyframes hvr-bob {
            0% {
                -webkit-transform: translateY(-8px);
                transform: translateY(-8px);
            }

            50% {
                -webkit-transform: translateY(-4px);
                transform: translateY(-4px);
            }

            100% {
                -webkit-transform: translateY(-8px);
                transform: translateY(-8px);
            }
        }

        @keyframes hvr-bob {
            0% {
                -webkit-transform: translateY(-8px);
                transform: translateY(-8px);
            }

            50% {
                -webkit-transform: translateY(-4px);
                transform: translateY(-4px);
            }

            100% {
                -webkit-transform: translateY(-8px);
                transform: translateY(-8px);
            }
        }

        @-webkit-keyframes hvr-bob-float {
            100% {
                -webkit-transform: translateY(-8px);
                transform: translateY(-8px);
            }
        }

        @keyframes hvr-bob-float {
            100% {
                -webkit-transform: translateY(-8px);
                transform: translateY(-8px);
            }
        }

        .hvr-bob {
            display: inline-block;
            vertical-align: middle;
            -webkit-transform: perspective(1px) translateZ(0);
            transform: perspective(1px) translateZ(0);
            box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        }

        .hvr-bob:hover,
        .hvr-bob:focus,
        .hvr-bob:active {
            -webkit-animation-name: hvr-bob-float, hvr-bob;
            animation-name: hvr-bob-float, hvr-bob;
            -webkit-animation-duration: .3s, 1.5s;
            animation-duration: .3s, 1.5s;
            -webkit-animation-delay: 0s, .3s;
            animation-delay: 0s, .3s;
            -webkit-animation-timing-function: ease-out, ease-in-out;
            animation-timing-function: ease-out, ease-in-out;
            -webkit-animation-iteration-count: 1, infinite;
            animation-iteration-count: 1, infinite;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
            -webkit-animation-direction: normal, alternate;
            animation-direction: normal, alternate;
        }

        .count {
            position: absolute;
            bottom: 50px;
            right: 5px;
            font-size: 12px;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 5px;
            padding: 0 5px;
        }
    }



    // ul {
    //     display: flex;
    //     justify-content: space-between;

    //     li {
    //         text-align: center;
    //         color: #fff;
    //         font-size: 14px;

    //         span {
    //             display: block;
    //         }

    //         img {
    //             width: 140px;
    //             border-radius: 5px;
    //         }
    //     }
    // }

}
</style>