<template>
    <div class="my-drawer">
        <el-drawer v-model="showPlayList" :with-header="false" :show-close="false" :direction="direction"
            custom-class="drawer">
            <el-scrollbar>
                <div class="title">播放列表</div>
                <div class="title1">
                    共{{playListCount}}首歌曲
                    <div class="qingkong" @click="clearPlayList()">
                        <div class="lajitong"></div>
                        <span class="lajitong-title">清空</span>
                    </div>
                </div>
                <div @click="play(item.id)" class="list" v-for="item in playList" :key="item.id">
                    <img class="img1" :src="item.al.picUrl" alt="">
                    <div class="right">
                        <div class="name">{{item.al.name}}</div>
                        <div class="author">{{item.ar.first().name}}</div>
                    </div>
                    <div class="long">
                        {{useFormatDuring(item.dt/1000)}}
                    </div>
                </div>
            </el-scrollbar>
        </el-drawer>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs } from 'vue'
import { playerStore } from '@/stores/player'
import { useFormatDuring } from '@/utils/number'


const direction = ref('rtl')
const { showPlayList, playList,clearPlayList,playListCount,play } = toRefs(playerStore())


</script>
<style lang='less' scoped>
.my-drawer {

    :deep(.el-overlay) {
        position: absolute;

        .el-drawer__body {
            padding: 5px;
        }

        .drawer {
            width: 300px !important;
            background-color: #323235;
            display: flex;

            .title {
                height: 40px;
                font-size: 20px;
                color: #fff;
            }

            .title1 {
                height: 20px;
                font-size: 10px;
                color: #fff;
                display: flex;
                position: relative;

                .qingkong {
                    position: absolute;
                    right: 0;
                    top: 0;
                    display: flex;

                    .lajitong {
                        width: 16px;
                        height: 16px;
                        background: url(@/assets/icon-svg/lajitong.svg);
                    }

                    .lajitong-title:hover {
                        color: #1afa29;
                    }
                }

                .qingkong:hover {
                    color: #1afa29;

                    .lajitong {
                        width: 16px;
                        height: 16px;
                        background: url(@/assets/icon-svg/green-lajitong.svg);
                    }
                }
            }

            .list {
                width: 100%;
                height: 50px;
                display: flex;
                align-items: center;
                cursor: pointer;

                .img1 {
                    width: 40px;
                    height: 40px;
                    margin-left: 5px;
                }

                .right {
                    width: 200px;

                    .name {
                        margin-left: 10px;
                        font-size: 1rem;
                        color: #fff;
                    }

                    .author {
                        margin-left: 10px;
                        font-size: 0.8rem;
                        color: #fff;
                    }
                }

                .long {
                    color: #fff;
                    font-size: 0.8rem;
                }
            }
            .list:hover{
                background: rgba(0, 0, 0, 0.3);
            }
        }
    }
}
</style>