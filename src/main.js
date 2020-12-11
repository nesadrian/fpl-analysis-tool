import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css'
import './assets/style.css'
import store from './store'

createApp(App)
  .use(store)
  .mount('#app')
