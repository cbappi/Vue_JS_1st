<template>
    <h1>COMPUTED METHOD BELOW</h1><br> 
  <h1>IT FIRM : {{fulitName}}</h1><br> 

  <br>
    <span><button @click="increment(2)">+</button></span><br>
    {{ measure }} / {{ sayNumber }}<br>
    <span><button @click="decrement(1)">-</button></span>

</template>

<script setup>
      import {reactive,ref,computed} from 'vue';
  
    
     
        let measure=ref(33);
        measure.value = 40;
      
      let info = reactive({
        name : 'Zahid',
        city : "Dhaka",
        itFirstName: 'Genious',
        itLastName: 'Learning'
      }

      )

  //FUNCTION METHOD ES6 TYPE
    const increment = amount => measure.value +=amount;
    const decrement = amount => measure.value -=amount;    

  //FUNCTION COMPUTED METHOD 
   const fulitName = computed(()=>
    {return info.itFirstName+ ' ' +info.itLastName;}
   )

   const sayNumber = computed(()=>
    {
      if( measure.value%2==0){
        return "Even number"
      }else{ return "Odd number"}
    }
   )

   </script>
  