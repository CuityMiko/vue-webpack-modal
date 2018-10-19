// 首页
const homeContainer = r => require.ensure([], () => r(require('../views/home.vue')), 'home')
// 销售
const saleContainer = r => require.ensure([], () => r(require('../views/sale.vue')), 'sale')
// 主管
const directorContainer = r => require.ensure([], () => r(require('../views/director.vue')), 'director')
// 设置
const settingContainer = r => require.ensure([], () => r(require('../views/setting.vue')), 'setting')
// 404
const NoFindContainer = r => require.ensure([], () => r(require('../views/404.vue')), '404')

export default[
    {
        path: '/home',
        component: homeContainer,
        name: '首页'
    },
    {
        path: '/sale',
        component: saleContainer,
        name: '销售'
    },
    {
        path: '/director',
        component: directorContainer,
        name: '主管'
    },
    {
        path: '/setting',
        component: settingContainer,
        name: '设置'
    },
    {path:'*',component: NoFindContainer}
]