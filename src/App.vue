
<template>

  <h1 v-if = "showBtn">{{obj.title}}</h1>

 <div>
    <ul>
      <li v-for="(todo,index) in todos" :key="index">
        {{index+1 }}/{{todo.work }} /{{todo.class }}
      </li>
    </ul>
</div>
 
</template>


<script setup>

  import {ref, reactive} from 'vue';  
 
  let obj = reactive({
        title: "Vue JS For V-For",  
      })

  let todos = ref([
    {id:1, work:"work one", class: "one"},
    {id:2, work:"work two", class: "two"},
    {id:3, work:"work three", class: "three"},
  ]) 
  
</script>




