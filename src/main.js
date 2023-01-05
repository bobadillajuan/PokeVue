import { createApp } from 'vue'
import './style.css'
import routes from "./routes";
import App from './App.vue'

import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({

    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');