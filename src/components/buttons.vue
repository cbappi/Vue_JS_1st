<template>
    <h1>{{title }}</h1>
    <div class ="count">
    
        <button  @click = "$emit('increaseBy',1)">+</button>
        <p>{{coun }}</p>
      
    
    </div>
</template>
  
  <script setup>
  
    import {ref} from 'vue';
    const props = defineProps(['title', 'coun'])
  
  </script>
  
  <style scoped>
   .count{
    padding-top: 10px;
    padding-bottom: 10px;
    width:200px;
    display: flex;
    background-color: aqua;
    justify-content:space-between;
  
   }
  
  </style>
  
  