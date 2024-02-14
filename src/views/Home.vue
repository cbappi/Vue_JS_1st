<template>

    <h1>{{counterStore.title}}</h1><br>
    <button @click = "counterStore.increment">+</button>
    <br>
    <h2>{{ counterStore.count }}</h2>
    <br>
    <button @click = "counterStore.decrement">-</button>

    <h1>Our Service</h1><br>

    <ul>
        <li v-for="service in serviceStore.services" :key="service.id">
          <router-link :to = "{name:'single-service', params:{id:service.id}}">
          {{ service.subject }}</router-link></li>
    </ul>


</template>
  
  <script setup>
  
    import { useCounterStore } from '../store/counter';
    import { useServiceStore } from '../store/service';

    const counterStore = useCounterStore();
    const serviceStore = useServiceStore();
    
  </script>
  
  