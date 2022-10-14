import http from '@/utils/http'
import type { Banner } from '@/models/banners'
import type { Personalized ,PersonalizedNewSong } from '@/models/personalized'
import type {SongUrl} from '@/models/song_url'
import type {Song} from '@/models/song'

export async function name(phone:string,password:string) {
    return await http.get<{
        code:number,
        cookie:string,
        token:string
    }>("/login/cellphone",{phone,password})
}

//banner
export async function banner(){
    const {banners} = await http.get<{banners:Banner[]}>('/banner',{type:0})
    
    return banners
}

//推荐歌单
export async function usePersonalized(){
    const {result} = await http.get<{ result: Personalized[] }>('/personalized')
    return result
}

//
export async function useSongUrl(id:number) {
    const {data} = await http.get<{data:SongUrl[]}>('/song/url',{id:id})
    return data.first()
}

export async function useDetail(id: number) {
    const {songs} = await http.get<{ songs: Song[] }>('/song/detail', {ids: id})
    return songs.first()
}

export async function usePersonalizedNewSong() {
    const {result} = await http.get<{ result: PersonalizedNewSong[] }>('/personalized/newsong')
    return result
}