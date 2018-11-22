const error404 = () => import('../pages/404/error404.vue')
const Wrapper = () => import('../components/Wrapper.vue')

const routes = [
  {
    path: '/',
    component: Wrapper,
    redirect: {name: 'error404'},
    children: [
      {
        path: '/404',
        component: error404,
        name: 'error404'
      }
    ]
  }
]

export default routes