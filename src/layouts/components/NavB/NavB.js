import React, { useEffect, useState } from 'react'
import { NavBar, NavLink } from './NavElements'
import { useLocation } from "react-router-dom"

// ** Horizontal Menu Array
import navigation from '@src/navigation/horizontal'
const NavB = () => {
  const location = useLocation()
  useEffect(() => {
    document.getElementById('nav').className = ''
  }, [])
  return (
    <div className='container'>
      <NavBar>
        {navigation.map((item) => (
          <NavLink 
            className={`${location.pathname.includes(item.id) ? '' : 'hidden'}
                        ${location.pathname === item.navLink ? 'activeStyle' : ''}`}
            key={item.id}
            to={item.navLink}>{item.icon}
            <span className='px-1'> {'>'}</span>{item.title}
          </NavLink>
        ))}
      </NavBar>
    </div>
  )
}

export default NavB