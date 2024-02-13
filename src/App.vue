<template>

  <h1>{{obj.title1}}</h1><br>
  <h1>{{obj.title2}}</h1><br>

<div class = "static" 
:class = "{'bg-black':isActive, 'text-danger':hasError}">
  This is test message
</div>

</template>

<script setup>

  import {ref, reactive} from 'vue';  
 const isActive = ref(true);   
 const hasError = ref(false);    
  let obj = reactive({
        title1: "Section-13: Class and Style Binding",  
        title2: "Binding Objects - HTML Class",  

      })
</script>

<style>
.bg-black{

  background-color: black;
  font-size: 30px;
  color:white;

}

.text-danger{
  background-color: black;
  color:red;
  font-size:30px;
  font-style: italic;
}

.static{
  margin-top:60px;
}
</style>
