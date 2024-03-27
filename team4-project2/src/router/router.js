import {createRouter, createWebHistory} from 'vue-router';


const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/board/fairs',
            component: () => import('../views/FairBoard.vue')
        },
        {
            path: '/',
            component: () => import('../views/MainPage.vue')
        },
        {
            path: '/board/fairs/1',
            component: () => import('../views/FairPost.vue')
        }
    ]
})

export default router;