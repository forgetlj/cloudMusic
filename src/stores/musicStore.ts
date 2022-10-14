import { defineStore } from "pinia";
import { ref } from "vue";
import type { Personalized ,PersonalizedNewSong } from "@/models/personalized";
import { usePersonalized,usePersonalizedNewSong } from "@/utils/api";

export const musicStore = defineStore("music", () => {

  const personalized = ref<Personalized[]>([]);

  const getPersonalized = async () => {
    if (personalized.value.length) return;
    personalized.value = await usePersonalized();
  }

  const personalizedNewSong = ref<PersonalizedNewSong[]>([])
  const getPersonalizedNewSong = async()=>{
    if(personalizedNewSong.value.length) return;
    personalizedNewSong.value = await usePersonalizedNewSong()
    return personalizedNewSong
  }

  return {
    personalized,
    getPersonalized,

    personalizedNewSong,
    getPersonalizedNewSong
  };
});
