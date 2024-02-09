
<template>
  <h1>{{ obj.title }}</h1>
  <br>
  <button @click = "increment">+</button>
  <br>
  <h2>{{ count }}</h2>
  <br>
  <button @click = "decrement(3)">-</button>
</template>

<!-- Script Set up -->
<script setup>
  import {ref, reactive} from 'vue';

      let count = ref(10);

      let obj = reactive({
        title: "Vue JS Function",
        class: "Seven",
        location: "Chittagong",
        description: "Now Placing Object Property"
      })

      function increment(){
        count.value++;
      }

      function decrement(amount){
        count.value -= amount;
      }
</script>


