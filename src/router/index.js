import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Cards',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cards.vue')
  },
  {
    path: '/modal',
    name: 'Modal',
    component: () => import(/* webpackChunkName: "Modal" */ '../views/Modal.vue')
  },
  {
    path: '/cols',
    name: 'Cols',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cols.vue')
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import(/* webpackChunkName: "about" */ '../views/Grid.vue')
  },
   {
    path: '/botones',
    name: 'Botones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Botones.vue')
  },
   {
    path: '/tareas-crud',
    name: 'Tareas-Crud',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tareas-Crud.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
