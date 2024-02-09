
<template>

  <h1>{{obj.title}}</h1><br>

<div>
  <img v-bind:src="imgUrl"/>
</div>
 
</template>

<script setup>

  import {ref, reactive} from 'vue';  
   let imgUrl = ref("https://picsum.photos/200/300")
 
  let obj = reactive({
        title: "Vue JS For V-Bind",  
      })
</script>




