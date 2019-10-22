import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Tables from './views/Tables.vue';
import Login from './views/Login.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        layout: 'login-layout',
      },
    },
    {
      path: '',
      name: 'tables',
      component: Tables,
    },
    {
      path: '*',
      redirect: '/errors',
    },
  ],
});

export default router;

router.beforeEach((to, from, next) => {
  const user = firebase.auth().currentUser;
  // console.log(user);
  if (to.path !== '/login' && !user) {
    next('/login');
  } else if (to.path === '/login' && user) {
    next('/');
  } else {
    next();
  }
});
