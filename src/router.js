import { createRouter, createWebHistory } from 'vue-router';

import AppMain from "../src/assets/pages/AppMain.vue";
import MainProject from "../src/assets/pages/MainProject.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppMain
        },
        {
            path: '/projects',
            name: 'projects',
            component: MainProject
        },
    ]
});

export { router };