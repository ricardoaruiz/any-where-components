<template>
  <div class="container">
    <h1>Vue</h1>
    <aw-button 
      id="primary" 
      @click="sayHello"
      @awclicked="sayHelloCustom"
      variant="primary" 
      blocked
    >
      Botão
    </aw-button>
    <p>This button was clicked {{numClicks}} times</p>

    <aw-button 
      id="secondary" 
      @click="sayHello" 
      @awclicked="sayHelloCustom"
      variant="warning" 
      blocked 
      disabled
    >
      Botão
    </aw-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App',
    data() {
      return {
        numClicks: 0
      }
    },
    methods: {
      sayHello: function() {
        console.log('Hello Vue - sayHelloNativeEvent')
      },
      sayHelloCustom: function() {
        console.log('Hello Vue - sayHelloCustomEvent')
        this.numClicks = this.numClicks + 1
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
