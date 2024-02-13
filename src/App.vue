<template>
      
  <div>
    <router-link :to="{name:'home'}">Home</router-link> |
    <router-link :to="{name:'about'}">About</router-link> |
    <router-link :to="{name:'service'}">Service</router-link> |
    <router-link :to="{name:'contact'}">Contact</router-link>
  
  </div> 
  <router-view/>

</template>