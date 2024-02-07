
<template>
  <h1>{{ title }}</h1><br>
  <buttons title = "Normal Counter" :coun="counts" @increase-by = "increaseCount">
    <div>
      <p>Counter</p>
    </div>
  </buttons>
</template>

<script setup>

  import {provide,ref} from 'vue';
  import buttons from './components/buttons.vue'
  let title = ref("Vue JS Program"); 
  provide('message','How are you')
  let counts = ref(0);  
  const increaseCount =  (n) =>{
    counts.value += n
  } 
</script>


