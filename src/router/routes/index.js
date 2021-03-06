import { lazy } from 'react'

// ** Default Route
const DefaultRoute = '/inicio'

// ** Merge Routes
const Routes = [
  {
    path: '/inicio',
    component: lazy(() => import('../../views/Inicio'))
  },
  {
    path: '/inicio:table/agregar',
    component: lazy(() => import('../../views/Agregar'))
  },
  {
    path: '/inicio:table/editar/:id',
    component: lazy(() => import('../../views/Editar'))
  },
  {
    path: '/inicio:table',
    component: lazy(() => import('../../views/TablaConBotones'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, Routes }
