
<template>
  <h1>{{ title }}</h1><br>
  <h2>{{ subject }}</h2><br>
  <button @click = "count++">{{ count }} </button>
</template>

<!-- Composition API -->
<script>
  import {ref} from 'vue';
  export default{
    setup(){
      let count = ref(10);
      const title = ref('Programing');
      const subject = ref('Vie JS');
      return{ title,subject,count}
    }
  }
</script>


