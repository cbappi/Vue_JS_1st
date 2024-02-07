
<template>
  <h1>{{ title }}</h1><br>
  <h2>{{ subject }}</h2><br>
  <button @click = "count++">{{ count }} </button>
</template>

<!-- Option API -->
<script>
  export default{
    data(){
      return{
        title : 'Programing',
        subject : 'Vie JS',
        count : 9
      }
    }

  }
</script>


