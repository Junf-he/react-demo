
// import BasicLayout from './layouts/BasicLayout';
import asyncComponent from '@common/asyncComponent';

// ========系统首页============ //
const routers = [
  // {
  //   path: '*',
  //   component: asyncComponent(() => import('./routers/home'))
  // },
  {
    path: '/home',
    component: asyncComponent(() => import('./routers/home'))
  },
  {
    path: '/todo',
    component: asyncComponent(() => import('./routers/todo'))
  }
];

export default routers;
