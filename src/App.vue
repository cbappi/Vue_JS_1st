
<template>

  <!-- Example of computed method -->
  <h1>Full name is :  {{ fullName }}</h1>
  <br>
  <!-- Example of computed method -->
  <button @click = "increment">+</button>
  <br>
  <h2>{{ count }} / {{ numberChecker }}</h2>
  <br>
  <button @click = "decrement(3)">-</button>
</template>

<!-- Script Set up -->
<script setup>
  import {ref, reactive, computed} from 'vue';

      let count = ref(10);

      let obj = reactive({
        title: "Vue JS Function",
        class: "Seven"
     
      })

      const fullName = computed(
        ()=>{
          return obj.title + '' + obj.class;
        }
      )

      const increment = () =>{
        count.value++;
      }

      const decrement = amount => {
        count.value -= amount;
      }

      const numberChecker = computed(
        ()=>{
          if(count.value % 2==0){
            return 'even number'
          }
          else{
            return 'odd number'
          }
        }
      )



</script>


