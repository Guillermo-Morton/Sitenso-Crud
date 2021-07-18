import { Mail, Home } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home',
    state: setHome(!home)
  },
  {
    id: 'table',
    title: 'Desarrolladores',
    navLink: '/table',
    state: setTable(!table)
  },
  {
    id: 'agregar',
    title: 'Agregar',
    navLink: '/agregar',
    state: setAgregar(!agregar)
  }
]
