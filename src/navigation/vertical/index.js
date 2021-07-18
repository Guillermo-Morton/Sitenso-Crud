import { Mail, Home } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'table',
    title: 'Desarrolladores',
    navLink: '/home:table'
  },
  {
    id: 'agregar',
    title: 'Agregar',
    navLink: '/home:table/agregar'
  }
]

