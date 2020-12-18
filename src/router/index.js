import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "@/layout";
import Login from '../views/login/index.vue'
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
        },
      ]
    },
    {
      path: "/Engineer",
      name: "Engineer",
      component: Layout,
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
            title: "操作面板",
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
            title: "操作面板",
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
            title: "操作面板",
            icon: "dashboard",
            keepAlive: true
          }
        }
      ]
    },
    {
      path: "/QualityControl",
      name: "QualityControl",
      component: Layout,
      name: "任务列表",
      hidden: localStorage.getItem("roleCode") != 'QualityControl' ? true : false,
      children: [
        {
          path: "Sorter",
          name: "Sorter",
          component: QualityControl,
          hidden: localStorage.getItem("roleCode") != 'QualityControl' ? true : false,
          meta: {
            title: "任务列表",
            icon: "dashboard"
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
    {
      path: "/GroupLeader",
      name: "GroupLeader",
      component: Layout,
      hidden: localStorage.getItem("roleCode") != 'GroupLeader' ? true : false,
      meta: {
        title: "任务列表",
        icon: "dashboard"
      },
      children: [
        {
          path: "GroupLeader",
          name: "GroupLeader",
          component: GroupLeader,
          hidden: localStorage.getItem("roleCode") != 'GroupLeader' ? true : false,
          meta: {
            title: "工程师报表",
            icon: "dashboard"
          }

        },
        {
          path: "GroupLeaderEngineermainform",
          name: "GroupLeaderEngineermainform",
          component: GroupLeaderEngineermainform,
          hidden: true,
          meta: {
            title: "操作面板",
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
            icon: "dashboard"
          }
        },
        {
          path: "GroupLeaderSortermainform",
          name: "GroupLeaderSortermainform",
          component: GroupLeaderSortermainform,
          hidden: true,
          meta: {
            title: "操作面板",
            icon: "dashboard",
            keepAlive: true
          }
        },
        {
          path: "GroupLeaderSpotCheck",
          name: "GroupLeaderSpotCheck",
          component: GroupLeaderSpotCheck,
          hidden: localStorage.getItem("roleCode") != 'GroupLeader' ? true : false,
          meta: {
            title: "数据抽检",
            icon: "dashboard"
          }
        },
        {
          path: "GroupLeaderSpotCheckmainform",
          name: "GroupLeaderSpotCheckmainform",
          component: GroupLeaderSpotCheckmainform,
          hidden: true,
          meta: {
            title: "操作面板",
            icon: "dashboard",
            keepAlive: true
          }
        },
      ]
    },

  ]
})

Router.beforeEach((to, from, next) => {

  if (to.path === '/login') next()
  if (!localStorage.getItem("accessToken")) next('/login')
  next()
})

export default Router;
