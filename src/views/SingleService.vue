<template>
    <h1>Single Service</h1>
    <p>{{ route.params.id}}</p>

</template>

<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();   
</script>