
<template>
  <h1>{{ title }}</h1><br>
  <h2>{{ subject }}</h2><br>
  <button @click = "count++">{{ count }} </button>
</template>

<!-- Script Set up -->
<script setup>
  import {ref} from 'vue';

      let count = ref(10);
      const title = ref('Programing journy');
      const subject = ref('Vie JS Tutorial'); 
</script>


