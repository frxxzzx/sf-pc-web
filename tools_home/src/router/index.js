import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/test',
      component: () => import('@/components/test/test'),
    },
    {
      path: '/test_service',
      component: () => import('@/components/test/service/service'),
    },
    {
      path: '/notepad_vue',
      component: () => import('@/components/tools/notepad'),
    },
    {
      path: '/clock_vue',
      component: () => import('@/components/tools/older/clock'),
    },

    {
      path: '/math_postures',
      component: () => import('@/components/tools/math_postures'),
    },
    {
      path: '/',
      component: () => import('@/components/index'),
    },
  ],
});
export default router;
