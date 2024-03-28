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
            path: '/board/fairs/:fairId',
            component: () => import('../views/FairPost.vue')
        },
        {
            path: '/board/fairs/edit',
            component: () => import('../views/FairPostEdit.vue')
        }
    ]
})

export default router;