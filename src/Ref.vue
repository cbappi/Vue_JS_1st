<template>
    <h1>IT FIRM : {{fulitName}}</h1><br> 
    <h1>COMPUTED METHOD</h1><br> 
</template>
  
  <script setup>
        import {reactive,computed} from 'vue';
    
  
        let info = reactive({
          name : 'Zahid',
          city : "Dhaka",
          itFirstName: 'Genious',
          itLastName: 'Learning'
        }
  
        )
  
    //FUNCTION COMPUTED METHOD 
     const fulitName = computed(()=>
      {return info.itFirstName+ ' ' +info.itLastName;}
     )
    