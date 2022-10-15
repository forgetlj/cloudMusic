<template>
    <!-- 底部 -->
    <div class="footer">
        <div class="ft_left">
            <img class="_img" :src="song.al?.picUrl || 'src/assets/images/OpticalDisk.png'" alt="">
            <div class="songNameAndSinger">
                <span class="songName">{{song.name || '来源云音乐'}}<i class="iconfont icon-aixin"></i></span>
                <span class="singer">{{song.ar?.first().name || '你来唱'}}</span>
            </div>
        </div>

        <div class="ft_main">
            <!-- 播放栏工具 -->
            <ul class="tool_list">
                <li class="hover-li">
                    <IconPark :icon="loopType===0?PlayOnce:loopType===1?LoopOnce:ShuffleOne" size="20" :stroke-width="3"
                        class="hover-text" @click="toggleLoop" fill="#ffffff" />
                </li>
                <li @click="prev"><i class="iconfont icon-shangyishoushangyige"></i></li>
                <li @click="togglePlay()">
                    <i v-if="!isPlaying" class="iconfont icon-bofang _audio"></i>
                    <i v-else class="iconfont icon-weibiaoti--"></i>
                    <!-- <audio id="ado">
                    </audio> -->
                </li>
                <li @click="next"><i class="iconfont icon-xiayigexiayishou"></i></li>
                <li><i class="iconfont icon-geciweidianji"></i></li>
            </ul>
            <!-- 进度条 -->
            <!-- <div class="progress">
                <div class="slide"></div>
                <div class="fill"> </div>
                歌曲当前时间与总时间 
                <span class="currentTime time">00:00</span>
                <span class="duraTime time">00:00</span>
                 
            </div> -->
            <el-slider :show-tooltip="false" :min="0" v-model="currentTime" :max="duration" @change="onSliderChange"
                @input="onSliderInput" />
        </div>

        <div class="time">
            <span>{{useFormatDuring(currentTime)}}/{{useFormatDuring(duration)}}</span>
        </div>

        <ul class="ft_right">
            <li class="jigao">极高</li>
            <li class="iconfont icon-yinxiao"></li>
            <div class="popover">
                <el-popover placement="top" width="50px" popper-class="myPopoer">
                    <template #reference>
                        <li class="iconfont icon-yinliangkai _voice" @mouseenter="volumeIsShow"
                            @mouseleave="volumeIsShow">
                        </li>
                    </template>

                    <el-slider :max="100" :min="0" @input="setVolume" v-model="volume" vertical height="200px" />
                </el-popover>
            </div>
            <li class="iconfont icon-yiqipindan"></li>
            <li class="iconfont icon-24gl-playlistMusic" @click="showPlayList = !showPlayList">
            </li>
        </ul>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs } from 'vue'
import { playerStore } from '@/stores/player'
import { useFormatDuring } from '@/utils/number';
import { Play, PauseOne, LoopOnce, ShuffleOne, PlayOnce, GoEnd, GoStart, VolumeSmall } from "@icon-park/vue-next";
import footerPlayList from './footerPlayList.vue'

const drawer = ref(false)

const { toggleLoop, loopType, volume, showPlayList, muted, song, 
    songUrl, setVolume, isPlaying, isPause, duration,
     currentTime, onSliderInput, onSliderChange, togglePlay,
        next,prev
    } = toRefs(playerStore());

const volumeShow = ref(false)

const volumeIsShow = () => {
    volumeShow.value = !volumeShow.value
}

</script>
<style lang='less' scoped>
.footer {
    border-top: 1px #686868 solid;
    height: 68px;
    background-color: #343437;
    display: flex;
    position: relative;

    .ft_left {
        width: 220px;
        display: flex;
        align-items: center;

        img {
            width: 55px;
            margin-left: 5px;
            border-radius: 5px;
        }

        .songNameAndSinger {
            color: #fff;
            font-size: 14px;
            margin-left: 10px;
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            i {
                margin-left: 8px;
            }

            span.singer {
                font-size: 10px;
            }
        }
    }

    .ft_main {
        width: 550px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        position: relative;

        .tool_list {
            width: 40%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 30px;

            li {
                cursor: pointer;

                i {
                    color: #d4d4d4;
                    font-size: 20px;
                }
            }

            li:nth-child(3) i {
                font-size: 30px;
            }

        }

        .progress {
            position: relative;
            width: 60%;
            height: 2px;
            background-color: grey;
            position: relative;

            .slide {
                position: absolute;
                top: -1.6px;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background-color: #ec4141;
                z-index: 9;
            }

            .fill {
                position: absolute;
                top: 0;
                height: 2px;
                background-color: #ec4141;
            }

            .time {
                color: #fff;
                font-size: 10px;
                position: absolute;
                cursor: default;
            }

            .currentTime {
                top: -8px;
                left: -37px;
                .time;
            }

            .duraTime {
                top: -8px;
                right: -40px;
                .time;
            }
        }
    }

    .time {
        width: 30px;
        height: 100%;
        position: relative;

        span {
            position: absolute;
            color: #fff;
            font-size: 12px;
            left: 10px;
            bottom: 8px;
        }
    }

    .ft_right {
        width: 180px;
        height: 100%;
        margin-left: 50px;
        /* background-color: #bfa; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;

        .popover {
            :deep(el-popper-container-8207) {
                .myPopoer {
                    min-width: auto !important;
                }
            }
        }

        .jigao {
            font-size: 14px;
            color: red;
            border: red 2px solid;
            line-height: 100%;
            padding: 2px;
            border-radius: 4px;
            user-select: none;
        }

        .iconfont {
            color: #d4d4d4;
            font-size: 20px;
        }

    }
}



:deep(.el-slider__button) {
    width: 8px;
    height: 8px;
    background-color: rgb(52 211 153 1);
}

:deep(.el-slider) {
    height: 10px;
}
</style>
<style>

</style>


