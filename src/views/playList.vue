<template>
   <div class="description">
      <firstHalf v-if="playlist" :playlist="playlist" :play-all="playAll"/>
      <div class="secondHalf">
         <el-tabs v-model="activeName" class="demo-tabs">
            <el-tab-pane label="歌曲" name="first">
               <songList v-if="songs" :songs="songs"/>
            </el-tab-pane>
            <el-tab-pane label="评论" name="second">Config</el-tab-pane>
         </el-tabs>
      </div>
   </div>
</template>
<script setup lang='ts'>
import {useRoute} from "vue-router";
import { ref, reactive, toRefs, toRef, onMounted } from 'vue'
import {useFormatDuring} from '@/utils/number'
import {playerStore} from '@/stores/player'
import {usePlayListDetail,usePlayListTrackAll} from '@/utils/api'
import firstHalf from './components/playList/firstHalf.vue'
import songList from './components/playList/songList.vue'
import type {Song} from '@/models/song'
import type {PlayListDetail} from '@/models/playlist'

// tab的activeName
const activeName = ref('first')

const pageSize = ref(10)
const page = ref(1)


const playlist = ref<PlayListDetail>();

const songs = ref<Song[]>([])


const route = useRoute();

const {pushPlayList,play} = playerStore()

const playAll = ()=>{
   pushPlayList(true,...songs.value)

   play(songs.value.first().id)

}

const loadMore = ()=>{
   page.value = page.value + 1
}

const getData = ()=>{
   const id:number = Number(route.query.id)
   usePlayListDetail(id).then(res => {
    playlist.value = res
  })
  usePlayListTrackAll(id).then(res => {
    songs.value = res
  })
}

onMounted(()=>{
   getData()
})






</script>
<style lang='less' scoped>
a {
   text-decoration: none;
}

.description {
   width: 819px;
   height: 300px;


   .secondHalf {
      margin-left: 20px;
      margin-top: 15px;

      .secondHalfImg {
         width: 50px;
         height: 50px;
      }
   }
}

:deep(.el-tabs__nav-wrap::after) {
   height: 0px;
}
</style>