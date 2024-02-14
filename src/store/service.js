import { defineStore } from "pinia";

export const useServiceStore = defineStore(
    'service', {
        state:()=>({
            
          services:[
            {id:1, subject:"Web Design"},
            {id:2, subject:"Graphic Design"},
            {id:3, subject:"UI Design"},
            {id:4, subject:"Seb Development"},
            {id:5, subject:"Dev Ops"}
        ]
        }),

        getters:{
            ourServices:(state)=>{
                return state.services[0].subject + ' ' + state.services[1].subject
            }
        }


    }
)