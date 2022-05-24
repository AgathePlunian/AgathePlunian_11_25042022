import logo from '../assets/img/LOGO.png'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='main-header'>
      <div className='main-nav'> 
        
        <div className='img-container'>
          <NavLink to="/" > <img src={logo} alt="Logo" /> </NavLink>     
        </div>

        <ul className='nav-container'>
          <li className="nav-item"><NavLink
            className={(navData) => (navData.isActive ? 'active' : 'link')}
            to="/"
          >
            Accueil
          </NavLink>
          </li>

          <li className="nav-item"><NavLink
            className={(navData) => (navData.isActive ? 'active' : 'link')}
            to="/about"
          >
            À propos 
          </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
