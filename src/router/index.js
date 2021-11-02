import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/movie'
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('@/views/City')
  },
  {
    path: '/movie',
    // name: 'Movie',
    component: () => import('@/views/Movie'),
    children: [
      {
        path: '',
        redirect: 'hotMovie'
      },
      {
        path: 'hotMovie',
        name: 'HotMovie',
        component: () => import('@/components/HotMovie'),
        meta: {
          tabbarisShow: true
        }
      },
      {
        path: 'futureMovie',
        name: 'FutureMovie',
        component: () => import('@/components/FutureMovie'),
        meta: {
          tabbarisShow: true
        }
      },
    ]
  },
  {
    path: '/movie/:id',
    name: 'MovieXiang',
    component: () => import('@/components/MovieXiang')
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: () => import('@/views/Cinema'),
    meta: {
      tabbarisShow: true
    }
  },
  {
    path: '/cinema/:id',
    name: 'CinemaXiang',
    component: () => import('@/components/CinemaXiang')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Login'),
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/Mine'),
    meta: {
      tabbarisShow: true
    }
  },
  {
    path: '/mine/movieOrder',
    name: 'MovieOrder',
    component: () => import('@/components/Mine/MovieOrder.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/mine/shopOrder',
    name: 'ShopOrder',
    component: () => import('@/components/Mine/ShopOrder.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/mine/maiZuo',
    name: 'MaiZuo',
    component: () => import('@/components/Mine/MaiZuo.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/mine/hongBao',
    name: 'HongBao',
    component: () => import('@/components/Mine/HongBao.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/mine/yue',
    name: 'Yue',
    component: () => import('@/components/Mine/Yue.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/mine/sheZhi',
    name: 'SheZhi',
    component: () => import('@/components/Mine/SheZhi.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/loginPassword',
    name: 'LoginPassword',
    component: () => import('@/views/Password/LoginPassword.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (sessionStorage.getItem('gcj')) {
      next();
    }
    else {
      next({
        path: '/login',
      });
    }
  }
  else {
    next()
  }

})


export default router
