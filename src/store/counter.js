import { defineStore } from "pinia";

export const useCounterStore = defineStore(
    'counter', {
        state:()=>({
            count:10,
            title:'Vue JS Master Class'
        })
    }
)