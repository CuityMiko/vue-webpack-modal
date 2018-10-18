const homeContainer = r => require.ensure([], () => r(require('../views/home.vue')), 'home')
const NoFindContainer = r => require.ensure([], () => r(require('../views/404.vue')), '404')

export default[
    {
        path: '/home',
        component: homeContainer,
    },
    {path: '/',redirect: '/home'},
    {path:'*',component: NoFindContainer}
]