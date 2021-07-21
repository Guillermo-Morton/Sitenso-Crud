import React, { useEffect, useState } from 'react'
import { NavBar, NavLink } from './NavElements'
import { useLocation } from "react-router-dom"
import { ChevronRight } from 'react-feather'

import 'animate.css'

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
  }, [])
  return (
    <div className='container'>
      <NavBar>
        {navigation.map((item) => (
          <NavLink 
            onClick={ () => setIsHidden(false)}
            // ** Clase con ternarios para el funcionamiento de las animaciones en el nav
            className={`animate__animated  ${location.pathname.includes(item.id) || (location.pathname.includes('editar') && item.id === 'agregar') ? `animate__fadeInLeft ${item.id === 'agregar' ? 'activeStyle btn-link disabled' : ''}` : `btn-link disabled ${isHidden === true ? 'hidden' : 'animate__fadeOutRight'}`} ${location.pathname === item.navLink ? 'activeStyle btn-link disabled' : ''}`}
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