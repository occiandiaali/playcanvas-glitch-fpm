import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createWebHistory, createRouter} from 'vue-router'
import {createBootstrap} from 'bootstrap-vue-next'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import './style.css'
import App from './App.vue'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Profile from './views/Profile.vue'
//import Play from './views/Play.vue'
import Experiences from './views/Experiences.vue'
import Experience from './views/Experience.vue'
import NotFound from './views/NotFound.vue'

const pinia = createPinia()

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/experiences", component: Experiences },
    {path: "/experiences/:id", name: 'experience', component: Experience},
    { path: "/profile", component: Profile },
    // { path: "/play", component: Play },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

createApp(App).use(pinia).use(createBootstrap()).use(router).mount('#app')
