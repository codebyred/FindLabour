import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/modules/Home/routes.js'
import Signin from '@/modules/Signin/routes.js'
import Hire from '@/modules/Hire/routes.js'
import Signup from '@/modules/Signup/routes.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    Home,
    Signin,
    Hire,
    Signup,
  ]
})

export default router
