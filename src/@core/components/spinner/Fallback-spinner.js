// ** Logo
import logo from '@src/assets/images/logo/logo.png'

const SpinnerComponent = () => {
  return (
    <div className='fallback-spinner vh-100 d-flex flex-column justify-content-center align-items-center'>
      <div className='mb-5 pb-5'>
        <img src={logo} alt='logo' />
        <h1 className='text-center text-primary mt-1'>Sitenso</h1>
      </div>
      <div className='loading mt-3'>
        <div className='effect-1 effects'></div>
        <div className='effect-2 effects'></div>
        <div className='effect-3 effects'></div>
      </div>
    </div>
  )
}

export default SpinnerComponent
