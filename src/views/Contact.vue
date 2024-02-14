<template>

<br>
<h1>Pinia State</h1><br>
<p>{{ counterStore.title}}</p>

<h1>Pinia Action</h1><br>
    <button @click = "counterStore.increment">+</button>
    <br>
    <h2>{{ counterStore.count }}</h2>
    <br>
    <button @click = "counterStore.decrement">-</button>
<br><br>
<h1>Pinia Getters</h1><br>
<p>{{ serviceStore.ourServices }}</p>

</template>

<script setup>
 import { useCounterStore } from '../store/counter';
import { useServiceStore } from '../store/service';

const serviceStore = useServiceStore();
const counterStore = useCounterStore();

</script>