
<template>

  <h1>{{obj.title1}}</h1><br>
  <h1>{{obj.title2}}</h1><br>

<div class = "static" 
:style = "[isActive, hasError]">
  This is test message
</div>

</template>

<script setup>

  import {ref, reactive} from 'vue'; 

  let obj = reactive({
        title1: "Section-13: Class and Style Binding",  
        title2: "Binding Inline Styles using Array",  

      })

  const isActive = ref('font-size: 40px');   
  const hasError = ref('color: black;background-color:orange'); 
</script>




