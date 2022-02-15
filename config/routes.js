export default [
  {
    path: '/home',
    name: 'Dashboard',
    icon: 'home',
    component: './Dashboard'
  },
  {
    path: '/transaction',
    name: 'Transaction',
    icon: 'stock',
    component: './Transaction'
  },
  {
    path: '/employee',
    name: 'Employee',
    icon: 'user',
    component: './Employee'
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];
