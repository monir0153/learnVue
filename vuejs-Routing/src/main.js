import './assets/main.css'
import {createRouter, createWebHistory} from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import TheWelcome from './components/TheWelcome.vue';
import HelloWorld from './components/HelloWorld.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/welcome',
            name: 'TheWelcome',
            component: TheWelcome
        },
        {
            path: '/hello',
            name: 'Hello',
            component: HelloWorld,
        }
    ],
});
const app = createApp(App)
app.use(router)
app.mount('#app')
