<template>
    <div class="lycrics">
        <div class="recordPlayer">
            <div :class="isPlaying == false? circle1:circle">
                <img :src="song?.al.picUrl || 'https://p2.music.126.net/8y8KJC1eCSO_vUKf2MyZwA==/109951165796899183.jpg'"
                    alt="">
            </div>
        </div>

        <div class="lyric">
            <div class="geci" ref="pLabel">
                <p v-show="w.length > 0" v-for="(item,index) in w" :key="index"
                    :class="currentTime > t[index-1] && currentTime <= t[index] ? active : '' ">
                    {{item}}
                </p>
            </div>
        </div>
        <footerPlayList />
    </div>

</template>
<script setup lang='ts'>

import { watch, ref, reactive, toRefs, onMounted, nextTick, getCurrentInstance, type ComponentInternalInstance } from 'vue'
import { useRoute } from 'vue-router'
import { playerStore } from '@/stores/player'
import { useLyric, useDetail } from '@/utils/api'
import type { lrc } from '@/models/lyric'
import type { Song } from '@/models/song'
import footerPlayList from '@/components/layout/footer/footerPlayList.vue'


const route = useRoute()
const { isPlaying, currentTime, song, id } = toRefs(playerStore())



interface lyric {
    t: string[],//时间
    w: string[] //歌词
}

const lrc = ref<lrc>()

const lyricList = ref<lyric[]>([

]) //存歌词

const t = reactive<number[]>([]) //每一句歌词的时间

const w = reactive<string[]>([]) //歌词



//歌曲id
// const id = Number(route.query.id)


//获取歌曲详情
// const getSong = async ()=>{
//     song.value =  await useDetail(id.value)
//     return song
// }

//获取歌词并处理
const getLrc = async () => {

    w.splice(0)
    t.splice(0)

    lrc.value = await useLyric(id.value)

    const data = lrc.value.lyric.split('\n')



    // const a: lyric = { t: [], w: [] }

    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const time = element.substring(element.indexOf('[') + 1, element.indexOf(']'))
        const word = element.substring(element.lastIndexOf(']') + 1)



        const s = time.split(":")//时间分离
        if (element.substring(element.lastIndexOf(']') + 1) == "") {

        } else if (s.length == 0) {

        } else {
            const time1 = parseInt(s[0]) * 60 + Math.round(parseFloat(s[1]))
            // a.t.push(time)
            // a.w.push(word)
            t.push(time1)
            w.push(word)
            // obj.value[time.slice(0, 5)] = word
        }


    }



    // lyricList.value.push(a)
}

//定义class="geci"这个div的scrollTop
const top = ref(0)
//实现歌词滚动
const roll = () => {

    const active = document.getElementsByClassName("active").item(0) as HTMLElement;

    const index = $(".geci").children().index(active);
    const geci = document.getElementsByClassName("geci").item(0) as HTMLElement;

    // let { proxy } = getCurrentInstance() as ComponentInternalInstance;

    // if (active) {
    //     if (active.offsetTop >= 30) {
    //         $(".geci").css("transform", `translateY(-${index * 30}px)`)
    //     }
    // }
    try {
        if (active && active.offsetTop) {
            // $(".geci").css("scrollTop", `${top.value-100}`)
            top.value = active.offsetTop
            if (top.value) {
                $(".geci").scrollTop(top.value - 170)
                // console.log("改变",top.value-100)
            }
        }
    } catch (error) {
        return
    }

}

//监听当前时间的变化
watch(currentTime, (newVal, oldVal) => {
    // console.log("时间变化了");
    roll()
})

//监听当前歌曲id的变化
watch(id, (newVal, oldVal) => {
    getLrc()
})

onMounted(
    () => {
        getLrc();
        // await getSong()
    },
)



const obj = ref({})


//动态绑定的样式
const circle = "circle"
const circle1 = "circle1"
const active = "active"


/**实现鼠标拖动歌词效果 */


</script>
<style lang='less' scoped>
.lycrics {
    width: 1030px;
    height: 560px;
    display: flex;
    position: relative;

    .recordPlayer {
        position: relative;
        width: 30%;
        height: 300px;

    }

    .lyric {
        width: 50%;
        flex-flow: column;
        justify-content: center;
        position: relative;
        overflow: auto;
        margin-top: 100px;

        // cursor: grab; //cursor: grab 表示元素可以点击和拖动。

        .geci {
            width: 515px;
            height: 400px;
            flex-flow: column;
            overflow: auto;

            p {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                margin-top: 20px;
                height: 30px;
                // transform: translateY(v-bind(translateY)px);

                // .lyricItemShow {
                //     color: #fff;
                // }
            }

            .active {
                display: flex;
                align-items: center;
                justify-content: center;
                color: red;
                font-size: 20px;
                // animation: changeColor 2s ;
                // transform: translateY(-10px);
            }
        }


    }

    .geci::-webkit-scrollbar {
        width: 8px;
        height: 5px;
    }

    /*正常时候的主干部分*/
    .geci::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0);
        border-radius: 10px;
        // box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1);
    }

    /*正常时候的主干部分*/
    .geci:hover::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1);
    }

    // /*正常时候的主干部分*/
    // .lyric::-webkit-scrollbar-thumb:hover {
    //     background-color: rgba(0, 0, 0, .4);
    //     box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1);
    // }

    // /*正常时候的主干部分*/
    // .lyric::-webkit-scrollbar-track {
    //     border-radius: 10px;
    //     box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    //     background-color: white;
    // }

    // /*鼠标悬浮在滚动条上的主干部分*/

    // .lyric::-webkit-scrollbar-track:hover {
    //     box-shadow: inset 0 0 6px rgba(0, 0, 0, .4);
    //     background-color: rgba(0, 0, 0, .01);
    // }

}

.circle {
    position: absolute;
    left: 30%;
    top: 50%;
    width: 200px;
    height: 200px;
    background-color: gray;
    border-radius: 50%;
    border: 2px solid gray;
    animation: rotation 5s linear infinite;

    img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
}

.circle1 {
    position: absolute;
    left: 30%;
    top: 50%;
    width: 200px;
    height: 200px;
    background-color: gray;
    border-radius: 50%;
    border: 2px solid gray;

    img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
}

@keyframes rotation {
    from {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg)
    }
}

@keyframes changeColor {
    0% {
        color: #fff;
    }

    100% {
        color: red;
    }
}
</style>