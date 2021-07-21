import React, { useEffect, useState } from 'react'
import { NavBar, NavLink } from './NavElements'
import { useLocation } from "react-router-dom"
import { ChevronRight } from 'react-feather'

// ** Animations
import 'animate.css'

// ** Third Party Components
import classnames from 'classnames'

// ** Horizontal Menu Array
import navigation from '@src/navigation/horizontal'

const NavB = () => {
  // ** Obtenemos la ruta
  const location = useLocation()
  //  ** Creamos un interruptor
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    // ** Quitamos las clases de la barra de navegacion superior
    document.getElementById('nav').className = ''
    console.log(navigation)
  }, [])
  return (
    <div className='container'>
      <NavBar>
        {navigation.map((item) => (
          <NavLink 
            onClick={ () => setIsHidden(false)}
            // ** Clase con ternarios para el funcionamiento de las animaciones en el nav
            className={`animate__animated ${classnames({
              'd-none': (isHidden && !location.pathname.includes(item.id)),
              'active btn-link disabled': location.pathname.includes('editar') && item.title ===  'Agregar' ? true : location.pathname === item.navLink,
              animate__fadeInLeft: location.pathname.includes(item.id),
              'animate__fadeOutRight btn-link disabled': !location.pathname.includes(item.id)
              
            })}`}
            key={item.id}
            exact={true}
            to={item.navLink}>{item.icon}
            <span className='px-1'> <ChevronRight size={20} /></span>{item.title === 'Agregar' && location.pathname.includes('editar') ? 'Editar' : item.title}
          </NavLink>
        ))}
      </NavBar>
    </div>
  )
}
export default NavB