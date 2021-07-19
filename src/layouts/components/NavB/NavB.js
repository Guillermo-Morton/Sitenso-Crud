import React, { useEffect, useState } from 'react'
import { NavBar, NavLink } from './NavElements'
import { useLocation } from "react-router-dom"
import { ChevronRight } from 'react-feather'

import 'animate.css'

// ** Horizontal Menu Array
import navigation from '@src/navigation/horizontal'
const NavB = () => {
  const location = useLocation()
  const [isHidden, setIsHidden] = useState(true)
  useEffect(() => {
    document.getElementById('nav').className = ''
  }, [])
  return (
    <div className='container'>
      <NavBar>
        {navigation.map((item) => (
          <NavLink 
            onClick={ () => setIsHidden(false)}
            className={`animate__animated  ${location.pathname.includes(item.id) ? 'animate__fadeInLeft' : `btn-link disabled ${isHidden === true ? 'hidden' : 'animate__fadeOutRight'}`} ${location.pathname === item.navLink ? 'activeStyle btn-link disabled' : ''}`}
            key={item.id}
            to={item.navLink}>{item.icon}
            <span className='px-1'> <ChevronRight size={20} /></span>{item.title}
          </NavLink>
        ))}
      </NavBar>
    </div>
  )
}

export default NavB