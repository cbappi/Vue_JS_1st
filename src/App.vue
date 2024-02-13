
<template>

  <h1>{{obj.title1}}</h1><br>
  <h1>{{obj.title2}}</h1><br>

<div class = "static" 
:style = "inlineStyle">
  This is test message
</div>

</template>

<script setup>

  import {reactive} from 'vue';  

  let obj = reactive({
        title1: "Section-13: Class and Style Binding",  
        title2: "Binding Objects - HTML Class",  

      })
  let inlineStyle = reactive({
        color:'orange',  
        fontSize:'60px',
        backgroundColor:'black',  

      })

</script>




