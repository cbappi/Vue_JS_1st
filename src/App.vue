
<template>

  <h1>{{obj.title1}}</h1><br>
  <h1>{{obj.title2}}</h1><br>

  
<div :class = "isActive ? 'color-one':'color-two' " >
  <h1>Ok</h1>
</div>

 
</template>

<script setup>

  import {ref, reactive} from 'vue';  


   let isActive = ref(true);
   
 
  let obj = reactive({
        title1: "Section-13: Class and Style Binding",  
        title2: "Binding HTML Classes",  

      })
</script>

<style>
.color-one{
  width:100px;
  height:100px;
  background-color:aqua ;
}
.color-two{
  width:100px;
  height:100px;
  background-color:brown;
}
</style>




