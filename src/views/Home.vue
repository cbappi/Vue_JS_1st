<template>

    <h1>{{obj.title}}</h1><br>

</template>
  
  <script setup>
  
    import {reactive} from 'vue';  
   
    let obj = reactive({
          title: "This Home Page"
        })
  </script>
  
  