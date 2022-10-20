<template>
    <div class="songContainer">
        <div class="title">你好<i class="iconfont icon-jiantou-xiangyou"></i></div>
        <el-row>
            <el-col @click="play(item.id)" :span="12" v-for="(item) in personalizedNewSong" :key="item.id">
                <img :src="item.picUrl" alt="">
                <div class="name">
                    <div class="name1">
                        {{item.name}}
                    </div>
                    <div class="name2">
                        {{item.song.artists[0].name}}
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, toRefs, onMounted } from 'vue'
import {musicStore} from '@/stores/musicStore'
import {playerStore} from '@/stores/player'

const {play} = playerStore()
const {personalizedNewSong} = toRefs(musicStore())
const {getPersonalizedNewSong} = musicStore()

onMounted(async()=>{
    await getPersonalizedNewSong()
})

</script>
<style lang='less' scoped>
img{
    width: 48px;
    height: 48px;
    border-radius: 5px;
}
.songContainer{
    position: relative;
    /* background-color: red; */
    margin: auto;
    width: 96%;
    .title {
    width: 100px;
    height: 30px;
    color: #fff;
    font-size: 20px;
    margin-bottom: 10px;
    }
    .name{
        width: 200px;
        margin-left: 10px;
        margin-top: 5px;
        .name1{
            color:#fff;
            font-size: 0.75rem;
            line-height: 1rem;
        }
        .name2{
            font-size: 0.75rem;
            line-height: 1rem;
            margin-top: 0.375rem;
            color:rgb(148 163 184 1);
        }
    }
}
:deep(.el-col-12){
    display: flex;
    margin-bottom: 5px;
    border-radius: 5px;
}
:deep(.el-col-12:hover){
    background-color: rgba(0, 0, 0, 0.5);
}
</style>