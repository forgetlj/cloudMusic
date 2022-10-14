<template>
   <div class="left-box">
                <ul>
                    <li><span>发现音乐</span></li>
                    <li><span>播客</span></li>
                    <li><span>视频</span></li>
                    <li><span>关注</span></li>
                    <li><span>直播</span></li>
                    <li><span>私人FM</span></li>
                </ul>
                <div class="my_music">
                    <span>我的音乐</span>
                </div>
                <ul class="mine">
                    <li><i class="iconfont icon-bendixiazai"></i><span>本地与下载</span></li>
                    <li><i class="iconfont icon-zuijinbofang"></i><span>最近播放</span></li>
                    <li><i class="iconfont icon-yun"></i><span>我的音乐云盘</span></li>
                    <li><i class="iconfont icon-boke1"></i><span>我的播客</span></li>
                    <li><i class="iconfont icon-ego-favorite"></i><span>我的收藏</span></li>
                </ul>
                <div class="create_list">
                    <span>
                        创建的歌单
                        <i class="iconfont icon-ico_arrowright"></i>
                        <i class="iconfont icon-jia i_last"></i>
                    </span>
                </div>
                <div class="create_list">
                    <span>
                        收藏的歌单
                        <i class="iconfont icon-ico_arrowright"></i>
                    </span>
                </div>
            </div>
</template>
<script setup lang='ts'>
import {ref,reactive,toRefs} from 'vue'
</script>
<style lang='less' scoped>
    .left-box {
        width: 200px;
        height: 100%;

        border-right: 1px #686868 solid;
        color: #fff;
        font-size: 15px;

        ul {
            width: 90%;
            margin: 15px auto;

            li {
                cursor: pointer;
                width: 95%;
                display: flex;
                align-items: center;
                margin-bottom: 7px;
                padding: 5px;
            }

            & li:hover {
                border-radius: 7px;
                background-color: rgba(0, 0, 0, 0.3);
                color: skyblue;
            }
        }

        .my_music {
            font-size: 13px;
            color: #7c7c7c;
            display: flex;
            align-items: center;
            height: 20px;
            margin-left: 15px;

            span {
                padding: 0 0 0 5px;
            }
        }

        .mine {
            span {
                margin-left: 7px;
            }
        }

        .create_list {
            margin-bottom: 15px;
            position: relative;
            .my_music
        }

        .i_last {
            position: absolute;
            right: 15px;
            color: #fff;
        }
    }
</style>