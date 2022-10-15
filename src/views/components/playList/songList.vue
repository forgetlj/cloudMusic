<template>
   <div class="item">
        <div class="item-header">
            <div class="gequ">歌曲</div>
            <div class="geshou">歌手</div>
            <div class="geshou">专辑</div>
            <div class="geshou">时长</div>
        </div>
        <div class="item-content" 
        @mouseenter="featureShowById(item.id)" 
        @mouseleave="featureShowById(item.id)"
        v-for="item in songs.slice(0,page*pageSize)"
        :key="item.id"
        >
            <div class="name">
                <i></i>
                <span>{{item.name}}</span>
                <div class="features" v-if="featureShow && featureId === item.id">
                    <div class="icon1" @click="play(item.id)"></div>
                    <div class="icon2" @click="pushPlayList(false,item)"></div>
                    <div class="icon3"></div>
                    <div class="icon4"></div>
                </div>
            </div>
            <div class="singer">{{item.ar.first().name}}</div>
            <div class="ablum">{{item.al.name}}</div>
            <div class="time">{{useFormatDuring(item.dt / 1000)}}</div>
        </div>
        <div class="button">
            <button class="load" @click="loadMore">加载更多</button>
        </div>
   </div>
</template>
<script setup lang='ts'>
import {ref,reactive,toRefs} from 'vue'
import type {Song} from '@/models/song'
import {useFormatDuring} from '@/utils/number'
import { useSongUrl } from '@/utils/api';
import {playerStore} from '@/stores/player'

const a = defineProps<{
    songs:Song[]
}>()

const {play,pushPlayList} = playerStore()


const page = ref(1)
const pageSize = ref(10)

const featureShow = ref(false)
const featureId = ref(0)

function featureShowById(id:number){
    featureShow.value = !featureShow.value
    featureId.value = id
}

const loadMore = ()=>{
    page.value = page.value + 1
}

</script>
<style lang='less' scoped>
.item{
    .item-header{
        height: 40px;
        display: flex;
        align-items: center;
        color: #bfbfbf;
        .gequ{
            width: 319.6px;
        }
        .geshou{
            width: 159.8px;
        }
    }
    .item-content{
        display: flex;
        align-items: center;
        height: 30px;
        color: #f1f5f9;
        font-size: 12px;
        .name{
            width: 319.6px;
            display: flex;
            align-items: center;
            color: #f1f5f9;
            position:relative;
            i{
                width: 16px;
                height: 16.8px;
                background:url(@/assets/icon-svg/black-aixin.svg);
            }
            i:hover{
                background: url(@/assets/icon-svg/aixin.svg);
            }
            .features{
                width: 100px;
                position: absolute;
                right: 0;
                top: 0;
                display: flex;
                .icon1{
                    width: 16px;
                    height: 16px;
                    background: url(@/assets/icon-svg/bofang.svg);
                }
                .icon1:hover{
                    background: url(@/assets/icon-svg/green-bofang.svg);
                }

                .icon2{
                    width: 16px;
                    height: 16px;
                    background: url(@/assets/icon-svg/tianjia.svg);
                    margin-left: 5px;
                }
                .icon2:hover{
                    background: url(@/assets/icon-svg/green-tianjia.svg);
                }
                .icon3{
                    width: 16px;
                    height: 16px;
                    background: url(@/assets/icon-svg/tianjia.svg);
                    margin-left: 5px;
                }
                .icon3:hover{
                    background: url(@/assets/icon-svg/green-tianjia.svg);
                }
                .icon4{
                    width: 16px;
                    height: 16px;
                    background: url(@/assets/icon-svg/tianjia.svg);
                    margin-left: 5px;
                }
                .icon4:hover{
                    background: url(@/assets/icon-svg/green-tianjia.svg);
                }

            }
        }
        .singer{
            width: 159.8px;
            color: #f1f5f9;
        }
        .ablum{
            width: 159.8px;
            color: #f1f5f9;
        }
        .time{
            width: 159.8px;
            color: #f1f5f9;
        }
    }
    .item-content:hover{
        background-color: rgba(0, 0, 0, 0.5);
    }
    .button{
        width: 799px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        .load{
            border: none;
            background-color: #434343;
            color: #059669;
        }
    }
}
</style>