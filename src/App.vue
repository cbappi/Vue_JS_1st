
<template>

  <h1 v-show = "show">{{obj.title}}</h1>
  <br/>
  <button @click = "show=!show">Show/Hide</button>
  
</template>


<script setup>

  import {ref, reactive} from 'vue';  
  let show = ref(true);

  
  let obj = reactive({
        title: "Vue JS Function",
        class: "Seven"
     
      })


</script>


