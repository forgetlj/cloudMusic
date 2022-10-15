<template>
   <div class="firstHalf">
         <img id="img1" :src="playlist.coverImgUrl" alt="">
         <div class="information">
            <div class="playListTitle">
              {{playlist.name}}
            </div>
            <div class="author">
               <img id="img2" :src="playlist.creator.avatarUrl" alt="">
               <span>--{{playlist.creator.nickname}}</span>
               <div class="label">
                  <a href="javascript:void(0)" v-for="item in playlist.creator.expertTags">#{{item}}</a>
               </div>
            </div>
            <div class="aa">
               {{playlist.description.substring(0,length) + '~~~'}}
               <span @click="aaSpan()">{{aaShow}}</span>
            </div>
            <div class="someButton">
               <div class="all" @click="playAll">
                  <i class="iconfont icon-bofang _audio"></i>
                  <span>播放全部</span>
               </div>
               <div class="collect">
                  <i class="iconfont icon-aixin"></i>
                  <span>收藏</span>
               </div>
            </div>
         </div>
      </div>
</template>
<script setup lang='ts'>
import {ref,reactive,toRefs,onMounted,defineProps} from 'vue'
import type {PlayListDetail} from '@/models/playlist'
import {playerStore} from '@/stores/player'
import type {Song} from '@/models/song'

const {play,pushPlayList} = playerStore()

defineProps<{
    playlist:PlayListDetail
    playAll:()=>void
}>()

let aaShow = ref("[详情]")
let length = ref(0)

function aaSpan (){
   if (aaShow.value == "[详情]") {
      length.value = 100
      aaShow.value = "[收起]"
   } else {
      length.value = 80
      aaShow.value = "[详情]"
   }
}


onMounted(()=>{
   aaSpan()
}
)
</script>
<style lang='less' scoped>
.firstHalf {
      height: 200px;
      display: flex;
      align-items: center;
      margin-top: 20px;
      margin-left: 20px;

      .information {
         width: 619px;
         height: 200px;
         display: flex;
         flex-direction: column;
         margin-left: 20px;
         margin-top: 20px;
         position: relative;

         .playListTitle {

            height: 50px;
            font-size: 20px;
            font-weight: bolder;
            color: #fff;
         }

         .author {
            margin-top: 10px;
            display: flex;
            align-items: center;

            #img2 {
               width: 25px;
               height: 25px;
               border-radius: 50%;
            }

            span {
               color: #94a3b8;
               margin-left: 5px;
            }

            .label {
               width: 200px;
               height: 100%;
               margin-left: 20px;

               a {
                  margin-left: 10px;
               }

               a:hover {
                  color: #059669;
               }
            }
         }

         .aa {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            color: #6b7280;
            span:hover {
               color: #059669;
            }
         }

         .someButton {

            height: 40px;
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 10px;
            left: 0;

            .all {
               width: 100px;
               height: 40px;
               margin-left: 10px;
               background-color: #059669;
               border-radius: 20px;
               display: flex;
               align-items: center;
               justify-content: center;

               span {
                  font-size: 14px;
                  color: #fff;
                  margin-left: 5px;
               }
            }

            .all:hover {
               background-color: #0b7151;
            }

            .collect {
               width: 100px;
               height: 40px;
               margin-left: 20px;
               background-color: #059669;
               border-radius: 20px;
               display: flex;
               align-items: center;
               justify-content: center;

               span {
                  font-size: 14px;
                  color: #fff;
                  margin-left: 5px;
               }
            }

            .collect:hover {
               background-color: #0b7151;
            }

         }
      }

      #img1 {
         width: 200px;
         height: 200px;
         border-radius: 20px;
      }
   }
</style>