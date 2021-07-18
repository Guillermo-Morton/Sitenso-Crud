// ** Icons Import
import { Heart } from 'react-feather'

const Footer = () => {
  return (
    <p className='clearfix mb-0 container'>
      <span className='float-md-left d-block d-md-inline-block mt-25'>
        COPYRIGHT © {new Date().getFullYear()}{' '}
        <a href='https://sitenso.com/' target='_blank' rel='noopener noreferrer'>
          Sitenso by Tensolite
        </a>
      </span>
      <span className='float-md-right d-none d-md-block'>
        Creado con
        <Heart size={14} />
      </span>
    </p>
  )
}

export default Footer
