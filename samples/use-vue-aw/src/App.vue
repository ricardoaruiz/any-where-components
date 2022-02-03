<template>
  <div class="container">
    <h1>Vue</h1>
    <aw-button 
      id="primary" 
      @click="sayHello" 
      variant="primary" 
      blocked
    >
      Botão
    </aw-button>

    <aw-button 
      id="secondary" 
      @click="sayHello" 
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
    mounted() {
      const primaryButton = document.querySelector('#primary')      
      primaryButton && primaryButton.addEventListener('awClicked1', this.sayHelloCustom)
    },    
    methods: {
      sayHello: function() {
        console.log('Hello Vue')
      },
      sayHelloCustom: function() {
        console.log('Hello Vue - customEvent')
      }
    },
    beforeDestroy() {
      const primaryButton = document.querySelector('#primary')
      primaryButton && primaryButton.removeEventListener('awClicked1', this.sayHelloCustom)
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
