<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script> -->

<template>
  <h1>{{staticEtring}}</h1><br>
  <h1>Course Name :{{courseName}}</h1><br>
  <h2>{{ info.name }} and {{ info.city }}</h2><br>
  <h3>{{ mentor }}</h3><br>
  <p><input type = "text" v-model="courseName"/></p>
  <p><input type = "number" v-model="count"/></p>
  <span><button @click="count++">+</button></span><br>
  {{ count }}<br>
  <span><button @click="count--">-</button></span>
  <br>
  <br>
  <span><button @click="increment(2)">+</button></span><br>
  {{ measure }}<br>
  <span><button @click="decrement(1)">-</button></span>

</template>

<script setup>
      import {reactive, ref} from 'vue';
      const staticEtring = "This value has no reactivity"
      const courseName = ref("Go on Vue JS");
      const mentor = ref("Muhammed Ibrahim");
      let count=ref(0);
      let measure=ref(33);
      measure.value = 40;
      count.value = 100;

      let info = reactive({
        name : 'Zahid',
        city : "Dhaka"
      }

      )

      info.city = "Khulna";

      function increment(amount){
           measure.value +=amount;
      }

      
      function decrement(amount){
           measure.value -=amount;
      }
     
</script>

