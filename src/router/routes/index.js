import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

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

export { DefaultRoute, TemplateTitle, Routes }
