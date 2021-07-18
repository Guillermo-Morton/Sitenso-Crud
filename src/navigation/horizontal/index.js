import { Home } from 'react-feather'

export default [
  {
    id: 'inicio',
    title: 'Inicio',
    icon: <Home size={20} />,
    navLink: '/inicio'
  },
  {
    id: 'table',
    title: 'Desarrolladores',
    navLink: '/inicio:table'
  },
  {
    id: 'agregar',
    title: 'Agregar',
    navLink: '/inicio:table/agregar'
  }
]
