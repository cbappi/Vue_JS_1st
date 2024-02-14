import { defineStore } from "pinia";

export const useCounterStore = defineStore(
    'counter', {
        state:()=>({
            count:10,
            title:'Vue JS Master Class'
        }),

        getters:{
            ppb:(state)=>state.count*3,
        },

        actions:{
                increment(){
                this.count++;
                },
                decrement(){
                    this.count--;
                    }
        }
    }
)