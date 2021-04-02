import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   如果设置为 true, 此项将不在边栏中显示(默认为 false)
 * alwaysShow: true               如果设置为 true, 将始终显示在根菜单
 *                                如果不设置 alwaysShow 参数, 当项目有多个子路由时，
 *                                它将变成嵌套模式，否则不显示根菜单。
 * redirect: noRedirect           如果设置 noRedirect 参数， 则不会在面包屑中重定向
 * name:'router-name'             这个名称由 <keep-alive> 使用(必须设置!!!)
 * meta : {
    roles: ['admin','editor']    控制页面角色（可以设置多个角色）
    title: 'title'               侧边栏和面包屑中显示的名称（推荐设置）
    icon: 'svg-name'/'el-icon-x' 图标显示在侧边栏中
    breadcrumb: false            如果设置为 false, 此项将在面包屑中隐藏(默认为 true)
    activeMenu: '/example/list'  如果设置了 path, 侧边栏将高粱显示你设置的路径
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '控制台', icon: 'dashboard' }
    }]
  },

  {
    path: '/pre',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Pre',
      component: () => import('@/views/pre/index'),
      meta: { title: '降水量', icon: 'example' }
    }]
  },

  {
    path: '/tem',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Tem',
        component: () => import('@/views/tem/index'),
        meta: { title: '气温', icon: 'form' }
      }
    ]
  },

  {
    path: '/win',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Win',
        component: () => import('@/views/win/index'),
        meta: { title: '风向风速', icon: 'user' }
      }
    ]
  },

  {
    path: '/prs',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Prs',
        component: () => import('@/views/prs/index'),
        meta: { title: '气压', icon: 'nested' }
      }
    ]
  },

  {
    path: '/rhu',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Rhu',
        component: () => import('@/views/rhu/index'),
        meta: { title: '相对湿度', icon: 'table' }
      }
    ]
  },

  {
    path: '/vis',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Vis',
        component: () => import('@/views/vis/index'),
        meta: { title: '能见度', icon: 'tree' }
      }
    ]
  },

  {
    path: '/lig',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Lig',
        component: () => import('@/views/lig/index'),
        meta: { title: '闪电', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
