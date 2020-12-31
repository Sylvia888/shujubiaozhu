import Vue from "vue"
import VueRouter from "vue-router"

import Layout from "@/layout"
import Login from '../views/login/index.vue'
import ChangePwd from '../views/login/ChangePwd.vue'


import SuperAdmin from '../views/sadmin/index.vue'
import ImportTask from '../views/Task/index.vue'
import ImportExport from '../views/Task/export'
import Engineer from '../views/Engineer/index'
import EngineerMainForm from "../views/Engineer/mainform"
import EngineerFailedData from "../views/Engineer/failedData"
import EngineerRecheckData from "../views/Engineer/recheckData"

import QualityControl from '../views/Sorter/index'
import QualityControlMainForm from "../views/Sorter/mainform"

import GroupLeader from '../views/HeadMan/Engineer/index'
import GroupLeaderEngineermainform from '../views/HeadMan/Engineer/mainform'
import GroupLeaderSorter from '../views/HeadMan/Sorter/index'
import GroupLeaderSortermainform from '../views/HeadMan/Sorter/mainform'
import GroupLeaderSpotCheck from '../views/HeadMan/SpotCheck/index'
import GroupLeaderSpotCheckmainform from '../views/HeadMan/SpotCheck/mainform'
//组长 广告，品牌，产品管理
import HeadmanAdvertising from '@/views/HeadMan/Advertising'
import HeadmanBrand from '@/views/HeadMan/brand'
import HeadmanProduct from '@/views/HeadMan/product'
import GroupLeaderResource from '../views/HeadMan/resource/index'
import SorterResource from '@/views/Sorter/Resources'

Vue.use(VueRouter)

const Router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: "/login"
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/changepwd',
      component: ChangePwd,
    },
    // 超级管理员
    {
      path: "/SuperAdmin",
      name: "SuperAdmin",
      component: Layout,
      children: [
        {
          path: "/userlist",
          name: "userlist",
          component: SuperAdmin,
          hidden: localStorage.getItem("roleCode") != 'SuperAdmin' ? true : false,
          meta: {
            title: "用户列表",
            icon: "dashboard"
          }
        },
      ]
    },
    // 管理员
    {
      path: "/Administrator",
      name: "Administrator",
      component: Layout,
      hidden: localStorage.getItem("roleCode") != 'Administrator' ? true : false,
      meta: {
        title: "操作",
        icon: "dashboard"
      },
      children: [
        {
          path: "/Task",
          name: "Task",
          component: ImportTask,
          hidden: localStorage.getItem("roleCode") != 'Administrator' ? true : false,
          meta: {
            title: "导入数据",
            icon: "dashboard"
          }
        },
        {
          path: "/Export",
          name: "Export",
          component: ImportExport,
          hidden: localStorage.getItem("roleCode") != 'Administrator' ? true : false,
          meta: {
            title: "导出数据",
            icon: "dashboard",
            keepAlive: true
          }
        }
      ]
    },
    // 工程师
    {
      path: "/Engineer",
      name: "Engineer",
      component: Layout,
      redirect: '/Engineer/EngineerTask',
      hidden: localStorage.getItem("roleCode") != 'Engineer' ? true : false,
      children: [
        {
          path: "EngineerTask",
          name: "EngineerTask",
          component: Engineer,
          hidden: localStorage.getItem("roleCode") != 'Engineer' ? true : false,
          meta: {
            title: "任务列表",
            icon: "dashboard"
          }
        },
        {
          path: "EngineerMainForm",
          name: "EngineerMainForm",
          component: EngineerMainForm,
          hidden: true,
          meta: {
            title: "数据标注",
            icon: "dashboard",
            keepAlive: true
          }
        },
        {
          path: "EngineerFailedData",
          name: "EngineerFailedData",
          component: EngineerFailedData,
          hidden: true,
          meta: {
            title: "未通过数据",
            icon: "dashboard",
            keepAlive: true
          }
        },
        {
          path: "EngineerRecheckData",
          name: "EngineerRecheckData",
          component: EngineerRecheckData,
          hidden: true,
          meta: {
            title: "复核数据",
            icon: "dashboard",
            keepAlive: true
          }
        }
      ]
    },
    // 质检
    {
      path: "/QualityControl",
      name: "QualityControl",
      component: Layout,
      redirect: '/QualityControl/Sorter',
      meta: {
        title: "操作列表",
        icon: "el-icon-setting"
      },
      hidden: localStorage.getItem("roleCode") != 'QualityControl' ? true : false,
      children: [
        {
          path: "Sorter",
          name: "Sorter",
          component: QualityControl,
          hidden: localStorage.getItem("roleCode") != 'QualityControl' ? true : false,
          meta: {
            title: "任务列表",
            icon: "el-icon-s-grid"
          }
        },
        {
          path: "SorterResource",
          name: "SorterResource",
          component: SorterResource,
          hidden: localStorage.getItem("roleCode") != 'QualityControl' ? true : false,
          meta: {
            title: "资源列表",
            icon: "el-icon-s-claim"
          }
        },
        {
          path: "SorterMainForm",
          name: "SorterMainForm",
          component: QualityControlMainForm,
          hidden: true,
          meta: {
            title: "操作面板",
            icon: "dashboard",
            keepAlive: true
          }
        },
      ]
    },
    // 组长
    {
      path: "/GroupLeader",
      name: "GroupLeader",
      component: Layout,
      hidden: localStorage.getItem("roleCode") != 'GroupLeader' ? true : false,
      meta: {
        title: "任务列表",
        icon: "el-icon-s-tools"
      },
      children: [
        {
          path: "GroupLeader",
          name: "GroupLeader",
          component: GroupLeader,
          hidden: localStorage.getItem("roleCode") != 'GroupLeader' ? true : false,
          meta: {
            title: "工程师报表",
            icon: "el-icon-s-marketing"
          }
        },
        {
          path: "GroupLeaderEngineermainform",
          name: "GroupLeaderEngineermainform",
          component: GroupLeaderEngineermainform,
          hidden: true,
          meta: {
            title: "数据操作面板",
            icon: "dashboard",
            keepAlive: true
          }
        },
        {
          path: "GroupLeaderSorter",
          name: "GroupLeaderSorter",
          component: GroupLeaderSorter,
          hidden: localStorage.getItem("roleCode") != 'GroupLeader' ? true : false,
          meta: {
            title: "质检员报表",
            icon: "el-icon-picture-outline-round"
          }
        },

        {
          path: "GroupLeaderSpotCheck",
          name: "GroupLeaderSpotCheck",
          component: GroupLeaderSpotCheck,
          hidden: localStorage.getItem("roleCode") != 'GroupLeader' ? true : false,
          meta: {
            title: "数据抽检",
            icon: "el-icon-bell"
          }
        },
        {
          path: "GroupLeaderSpotCheckmainform",
          name: "GroupLeaderSpotCheckmainform",
          component: GroupLeaderSpotCheckmainform,
          hidden: true,
          meta: {
            title: "抽检操作面板",
            icon: "dashboard",
            keepAlive: true
          }
        },
      ]
    },
    {
      path: "/GroupLeaderAdmin",
      name: "GroupLeaderAdmin",
      component: Layout,
      hidden: localStorage.getItem("roleCode") != 'GroupLeader' ? true : false,
      meta: {
        title: "管理列表",
        icon: "el-icon-s-tools"
      },
      children: [
        {
          path: "GroupLeaderResource",
          name: "GroupLeaderResource",
          component: GroupLeaderResource,
          hidden: localStorage.getItem("roleCode") != 'GroupLeader' ? true : false,
          meta: {
            title: "资源管理",
            icon: "el-icon-s-management"
          }
        },
        {
          path: "HeadmanAdvertising",
          name: "HeadmanAdvertising",
          component: HeadmanAdvertising,
          hidden: localStorage.getItem("roleCode") != 'GroupLeader' ? true : false,
          meta: {
            title: "广告主管理",
            icon: "dashboard"
          }
        },
        {
          path: "HeadmanBrand",
          name: "HeadmanBrand",
          component: HeadmanBrand,
          hidden: localStorage.getItem("roleCode") != 'GroupLeader' ? true : false,
          meta: {
            title: "品牌管理",
            icon: "el-icon-s-flag",
            keepAlive: true
          }
        },
        {
          path: "HeadmanProduct",
          name: "HeadmanProduct",
          component: HeadmanProduct,
          hidden: localStorage.getItem("roleCode") != 'GroupLeader' ? true : false,
          meta: {
            title: "产品字段管理",
            icon: "el-icon-s-promotion",
            keepAlive: true
          }
        },
      ]
    }
  ]
})
// 挂载路由导航守卫beforeEach，如果用户没有登陆，需要重定到登陆页面，控制访问权限
// to代表将要访问的路径；from代表从哪个路径跳转而来；next是一个函数，表示放行
// next() 代表放行  next('/login') 强制跳转
Router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  if (!localStorage.getItem("accessToken")) next('/login')
  next()
})
export default Router
