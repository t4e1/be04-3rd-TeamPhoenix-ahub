import {createRouter, createWebHistory} from 'vue-router';


const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/board/fairs',
            component: () => import('../views/FairBoard.vue')
        },
        {
            path: '/'
        }
    ]
})

export default router;