<template>

<div>
 <h1>This is service page</h1><br>
 <button @click="gohome">Home</button>
</div>

</template>

<script setup>
  
  import {useRouter} from 'vue-router'; 
  const x = useRouter();
  
  const gohome = ()=>{
    x.push({name:'home'})
  }
 
</script>
