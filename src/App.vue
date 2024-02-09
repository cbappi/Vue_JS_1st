
<template>

  <h1 v-if = "showBtn">{{obj.title}}</h1>
  <h1 v-else-if = "!showBtn">{{showBtn}}</h1>
  <h1 v-else = "showBtn">Nothing</h1>
  <br/>
  <button @click = "showBtn = !showBtn">Show/Hide</button>
  
</template>


<script setup>

  import {ref, reactive} from 'vue';  
  let showBtn = ref(false);

  
  let obj = reactive({
        title: "Vue JS Function - V-if - V-else-if",
        class: "Seven"
     
      })


</script>


