import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from './routes'
import { inject } from '@vercel/analytics';


createApp(App).use(router).mount('#app');

inject();
