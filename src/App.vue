
<template>
  <h1>{{ title }}</h1><br>
  <h2>{{ subject }}</h2><br>
  <h2>{{ obj.description }}</h2><br>
  <button @click = "count++">{{ count }} </button>
</template>

<!-- Script Set up -->
<script setup>
  import {ref, reactive} from 'vue';

      let count = ref(10);
      
      // if we declare count = 100, may dom will lost reactivity
      // so count.value should use and reactivity regain
      count.value = 100;
      const title = ref('Programing journy');
      const subject = ref('Vie JS Tutorial'); 

      let obj = reactive({
        name: "Shorig",
        class: "Seven",
        location: "Chittagong",
        description: "Now Placing Object Property"
      })
</script>


