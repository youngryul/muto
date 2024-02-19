import { createRouter, createWebHistory } from 'vue-router'
import calendar from '../components/Calendar.vue'
import main from '../components/Main.vue'
import diary from '../components/Diary.vue'

const routes = [
    {
        path: '/',
        name :  'Main',
        component: main
    },
    {
        path : '/calendar',
        name : 'Calendar',
        component: calendar
    },
    {
        path : '/diary',
        name : 'Diary',
        component: diary
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router