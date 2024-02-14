<template>

<div>
 <h1>This is service page</h1><br>

<ul>
    <li v-for="service in services" :key="service.id">
      <router-link :to = "{name:'single-service', params:{id:service.id}}">
      {{ service.subject }}</router-link></li>
</ul>
 <button @click="gohome">Home</button>
</div>

</template>

<script setup>
  import {ref} from 'vue'; 
  import {useRouter} from 'vue-router'; 

  let services = ref([
    {id:1, subject:"Web Design"},
    {id:2, subject:"Graphic Design"},
    {id:3, subject:"UI Design"},
    {id:4, subject:"Seb Development"},
    {id:5, subject:"Dev Ops"}
  ]);
  const route = useRouter();
  
  const gohome = ()=>{
    route.push({name:'home'})
  }
 
</script>
