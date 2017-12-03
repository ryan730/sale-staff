/**
 * Created by ryan.zhu on 2017/11/7.
 　......(\_/)
 　　......( '_')
 　　..../"NOBUG"\======░ ▒▓▓█D
 　　/"""""""""""""""""""\
 　　\_@_@_@_@_@_@_@/
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//一级页
const home = r => require.ensure([], () => r(require('@/pages/page-home')), 'home');
const marketing = r => require.ensure([], () => r(require('@/pages/page-marketing')), 'marketing');
const customer = r => require.ensure([], () => r(require('@/pages/page-customer')), 'customer');
const stocks = r => require.ensure([], () => r(require('@/pages/page-stocks')), 'stocks');
const settings = r => require.ensure([], () => r(require('@/pages/page-settings')), 'settings');
const hoppingCart = r => require.ensure([], () => r(require('@/pages/page-hoppingCart')), 'hoppingCart');
const order = r => require.ensure([], () => r(require('@/pages/page-order')), 'order');

//二级页
const homeDetails = r => require.ensure([], () => r(require('@/pages/page-home/page-home-details')), 'homeDetails');
const pageHomeList = r => require.ensure([], () => r(require('@/pages/page-home/page-home-list')), 'pageHomeList');

const customerList = r => require.ensure([], () => r(require('@/pages/page-customer/page-customer-list')), 'customerList');
const customerDetails = r => require.ensure([], () => r(require('@/pages/page-customer/page-customer-details')), 'customerDetails');
const customerCreater = r => require.ensure([], () => r(require('@/pages/page-customer/page-customer-creater')), 'customerCreater');

const marketingList = r => require.ensure([], () => r(require('@/pages/page-marketing/page-marketing-list')), 'marketingList');
const marketingDetails  = r => require.ensure([], () => r(require('@/pages/page-marketing/page-marketing-details')), 'marketingDetails ');


const routes = [
    {
        path: '/home',
        component: home,
        props: (route) => ({ query: route.query.q }),
        children: [
            {
                path: '',
                component: pageHomeList,
                meta: [],
            },
            {
                path: 'list/:id',
                component: pageHomeList,
                meta: [{name:'首页',toPath:''}]
            }]
    },
    {
        path: '/home/details/1010',
        component: homeDetails,
        meta: [{name:'首页',toPath:'/home/list/1010'},{name:'口子窖',toPath:''}]
    },
    {
        path: '/home/details/1020',
        component: homeDetails,
        meta: [{name:'首页',toPath:'/home/list/1020'},{name:'香格里拉',toPath:''}]
    },
    {
        path: '/home/details/1030',
        component: homeDetails,
        meta: [{name:'首页',toPath:'/home/list/1030'},{name:'土特产',toPath:''}]
    },
    {
        path: '/marketing/list',
        component: marketingList,
        meta: [{name:'销售管理',toPath:'/marketing/list'},{name:'订单管理',toPath:''}]
    },
    {
        path: '/marketing/details',
        component: marketingDetails,
        meta: [{name:'销售管理',toPath:'/marketing/list'},{name:'订单管理',toPath:'/marketing/list'},{name:'订单详情',toPath:''}]
    },
    {
        path: '/customer/list',
        component: customerList,
        meta: [{name:'客户管理',toPath:'/customer/list'},{name:'客户列表',toPath:''}]
    },
    {
        path: '/customer/creater',
        component: customerCreater,
        meta: [{name:'客户管理',toPath:'/customer/creater'},{name:'创建客户',toPath:''}]
    },
    {
        path: '/customer/details',
        component: customerDetails,
        meta: [{name:'客户管理',toPath:'/customer/list'},{name:'客户列表',toPath:'/customer/list'},{name:'客户列表',toPath:''}]
    },
    {
        path: '/stocks',
        component: stocks,
        meta: [{name:'库存',toPath:''}]
    },
    {
        path: '/hoppingCart',
        component: hoppingCart,
        meta: [{name:'购物车',toPath:''}]
    },
    {
        path: '/settings',
        component: settings,
        meta: [{name:'个人设置',toPath:''}]
    },
    {
        path: '/order',
        component: order,
        meta: [{name:'我的订单',toPath:''}]
    },
    { path: '/home', redirect: '/home/list/1010' },
    { path: '/customer', redirect: '/customer/list' },
    { path: '/marketing', redirect: '/marketing/list' },
    { path: '/*', redirect: '/home' },
];

const router = new Router({
    routes,
    strict: process.env.NODE_ENV !== 'production',
});
router.beforeEach((to, from, next) => {
    //console.log('每次都调用!!',to, from, next);
    next();
});
export default router
