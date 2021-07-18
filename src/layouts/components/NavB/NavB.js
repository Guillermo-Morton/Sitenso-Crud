import React, {useEffect, useState} from 'react'
import { NavBar, NavLink } from './NavElements'

// ** Horizontal Menu Array
import navigation from '@src/navigation/horizontal'
const NavB = () => {
  const [home, setHome] = useState(false)
  const [table, setTable] = useState(false)
  const [agregar, setAgregar] = useState(false)

  const toggle = () => {
    
  }
  console.log(navigation)
  useEffect(() => {
      document.getElementById('nav').className = '' 
  }, [])
  return (
    <div className='container'>
      <NavBar>
        {navigation.map((item) => (
          <NavLink onClick={ () => toggle(item.state) } key={item.id} to={item.navLink}>{item.icon}<span className='px-1'> {'>'}</span>{item.title}</NavLink>
        ))}
      </NavBar>
    </div>
  )
}

export default NavB