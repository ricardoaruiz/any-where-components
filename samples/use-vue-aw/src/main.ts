import { createApp } from 'vue'
import App from './App.vue'

import { applyPolyfills, defineCustomElements } from 'aw-components/loader';

applyPolyfills().then(() => {
  defineCustomElements(window, {
    ce: (eventName: string, opts: any) => new CustomEvent(eventName.toLowerCase(), opts)
  }as any);
});

createApp(App).mount('#app')
