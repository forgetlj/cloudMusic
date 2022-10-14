<template>
    <div class="right-box">
        <ul class="navigation">
            <li class="active"><span>个性推荐</span></li>
            <li><span>专属定制</span></li>
            <li><span>歌单</span></li>
            <li><span>排行榜</span></li>
            <li><span>歌手</span></li>
            <li><span>最新音乐</span></li>
        </ul>

        <div class="banner">
            <!-- <div class="infomation"> -->
                <!-- <h4>M♭</h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;M♭是TV动画《路人女主的养成方法》03话14:51时的插曲，同时也是加藤惠的角色歌，收录在同名角色歌专辑中（冴えない彼女の育てかたキャラクターイメージソング加藤恵）。由其声优：安野希世乃演唱。
                </p>
                <div class="btn_listen btn_listen_1">
                    <span>点击试听</span>
                </div>
                <div class="btn_listen btn_listen_2">
                    <span>点击收藏</span>
                </div> -->
                <el-carousel :interval="4000" arrow="always">
                    <el-carousel-item v-for="item in banners" :key="item">
                        <img :src="item.imageUrl" alt="">
                    </el-carousel-item>
                </el-carousel>
            <!-- </div> -->
        </div>

        <!-- <div class="dot">
            <ul class="dots">
                <li></li>
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
        </div> -->

            <PlayList/>
            <plsyListNewSong/>
         
        
    </div>
</template>
<script setup lang='ts'>
import playList from '@/components/layout/main/components/playList.vue'
import { ref, reactive, toRefs, onMounted } from 'vue'
import { commonStore } from '@/stores/common'
import PlayList from './playList.vue'
import plsyListNewSong from './plsyListNewSong.vue'

const { banners } = toRefs(commonStore())
const { getBanners } = commonStore()
onMounted(async () => {
    await getBanners();
})




</script>
<style lang='less' scoped>
.right-box {
    width: 819px;

    .navigation {
        width: 500px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .el-tab-pane {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            position: relative;
        }

        li {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            position: relative;

            span {
                color: #fff;
            }
        }

        .active {
            font-size: 20px;
        }

        .active::before {
            content: '';
            width: 80%;
            height: 2px;
            background-color: red;
            position: absolute;
            top: 42px;
        }
    }

    .banner {
        width: 780px;
        height: 200px;
        border-radius: 15px;
        margin: 10px auto;
        background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%);
        position: relative;

        .infomation {
            padding: 30px;
            width: 400px;
            height: 100%;
            color: #fff;
            position: relative;

            p {
                display: block;
                font-size: 13px;
                padding: 10px;
                user-select: none;
            }

            .btn_listen {
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                width: 80px;
                height: 30px;
                margin-top: 10px;
                position: absolute;

            }

            .btn_listen_1 {
                .btn_listen;
                top: 140px;
                left: 150px;
                background-color: #516FF6;
            }

            .btn_listen_2 {
                .btn_listen;
                top: 140px;
                left: 250px;
                background-color: #f5da3f;
            }
        }

        img {
            width: 100%;
            height: 200px;
            // display: block;
            // position: absolute;
            // top: 0;
            // right: 0;
        }
    }

    .dot {
        width: 96%;
        height: 20px;
        margin: 20px auto;
        /* background-color: red; */
        display: flex;
        justify-content: center;
        align-items: center;

        .dots {
            width: 180px;
            height: 100%;
            /* background-color: yellow; */
            display: flex;
            justify-content: space-around;
            align-items: center;

            li {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background-color: #2e3033;
                z-index: 100;
                cursor: default;
            }

            li:first-child {
                background-color: #ec4141;
            }

            li:hover {
                background-color: #ec4141;
            }
        }
    }

    
}
:deep(.el-carousel--horizontal){
    width: 780px;
    height: 200px;
    border-radius: 15px;
}
:deep(.el-carousel_item){
    width: 780px;
    height: 200px;
}
:deep(.el-carousel__container){
    height: 200px;
}
</style>