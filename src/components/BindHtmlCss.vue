<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script> -->

<template>
    <h1>WATCH METHOD </h1><br>
  
  
   
    <br>
    <br>
    <span><button @click="increment(2)">+</button></span><br>
    {{ measure }} // {{ sayNumber }} <br>
    <span><button @click="decrement(1)">-</button></span>
  
  </template>
  
  <script setup>
        import {ref,watch,computed} from 'vue';
        let measure=ref(33);
        measure.value = 40;
     
  
   //FUNCTION METHOD ES6 TYPE
        const increment = amount => measure.value +=amount;
        const decrement = amount => measure.value -=amount;
      
  
  
     const sayNumber = computed(()=>
    {
      if( measure.value%2==0){
        return "Even number"
      }else{ return "Odd number"}
    }
   )
  
    //WATCH METHOD 
  
    watch(()=>measure.value, (newValue, oldValue)=>{
      console.log(newValue);
      console.log(oldValue);
      if(newValue>50){
        alert("Stock nearly short")
      }
    })
     
   //FUNCTION TYPE
        // function increment(amount){
        //      measure.value +=amount;
        // }
  
        
        // function decrement(amount){
        //      measure.value -=amount;
        // }
  
        
       
  </script>
  
  