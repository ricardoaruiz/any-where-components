import { createApp } from 'vue'
import App from './App.vue'

import { applyPolyfills, defineCustomElements } from 'aw-components/loader';

applyPolyfills().then(() => {
  defineCustomElements();
});

createApp(App).mount('#app')
