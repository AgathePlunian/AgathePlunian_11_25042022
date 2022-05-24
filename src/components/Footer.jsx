import whiteLogo from '../assets/img/logo-white.svg'
import { NavLink } from 'react-router-dom';

function Footer() {
    return (    
      <div className="main-footer">
        <div className='logo-container'>
        <NavLink to="/" >  <img src={whiteLogo} alt="White logo" /> </NavLink>   
        </div>
        <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
      </div>
    )
  }
  
  export default Footer
  