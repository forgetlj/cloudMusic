import { defineStore } from "pinia";
import {ref} from "vue";
import type { Banner } from "@/models/banners";
import {banner} from '@/utils/api'

export const commonStore = defineStore('common',()=>{
    const banners = ref<Banner[]>([]);

    const getBanners = async() =>{
        banners.value = await banner();
    }
    return{
        banners,
        getBanners
    }
})