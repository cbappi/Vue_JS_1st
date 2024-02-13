<template>

  <h1>{{obj.title1}}</h1><br>
  <h1>{{obj.title2}}</h1><br>

<div class = "static" 
:class = [isActive,hasError]>
  This is test message
</div>

</template>

<script setup>

  import {ref, reactive} from 'vue';  
 const isActive = ref('bg-black');   
 const hasError = ref('text-danger');    
  let obj = reactive({
        title1: "Section-13:Class and Style Binding",  
        title2: "Binding Array - HTML Class",  

      })
</script>

<style>
.bg-black{
  font-size: 40px;
}

.text-danger{
  background-color: black;
  color:red;
  font-style: italic;
}

.static{
  margin-top:60px;
}
</style>
