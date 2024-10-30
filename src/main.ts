import '@csstools/normalize.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'iconify-icon';
import 'virtual:svg-icons-register';
import 'virtual:uno.css';

createApp(App).use(createPinia()).use(router).mount('#app');
