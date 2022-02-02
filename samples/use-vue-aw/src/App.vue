<template>
  <div class="container">
    <h1>Vue</h1>
    <aw-button v-on:click="sayHello" variant="primary" blocked>Botão</aw-button>
    <aw-button v-on:click="sayHello" variant="warning" blocked>Botão</aw-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import HelloWorld from './components/HelloWorld.vue';

  export default defineComponent({
    name: 'App',
    components: {
      HelloWorld
    },
    methods: {
      sayHello: function() {
        console.log('Hello Vue')
      }
    }
  });
</script>

<style>
  * {
    font-family: sans-serif;
  }
  .container {
    max-width: 300px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
</style>
