
import{NavLink} from 'react-router-dom'

import corazon from '../images/corazon.png'
import carrito from '../images/carrito-de-compras.png'
import logoPrincipal from '../images/logoPrincipal.png'
import acceso from '../images/acceso.png'

export default function NavBar(){

    
    
    return(
        <>
        <div className="container">
            <img src={logoPrincipal} alt="Logo de tienda" className='logo_principal'/>
            <nav className="menu">
                <NavLink to='/' className="menu__link" >Inicio</NavLink>
                <NavLink to='/bautizo' className="menu__link">Bautizo</NavLink>
                <NavLink to='/ninas' className="menu__link">Niñas</NavLink>
                <NavLink to='/ninos' className="menu__link">Niños</NavLink>
                <NavLink to='/accesorios' className="menu__link">Accesorios</NavLink>
                <NavLink to='/contacto' className="menu__link">Contacto</NavLink>
            </nav>
            <div className="container__logo">
                <NavLink to='/login' className="container__login">
                    <img src={acceso} alt="Login" className='logo_acceso' />
                </NavLink>
                <NavLink>
                    <img src={corazon} alt="Logo corazón" className='logo_corazon'/>
                </NavLink>
                <NavLink>
                    <img src={carrito} alt="Logo bolsa o carrito"  className='logo_carrito'/>
                </NavLink>
            </div>
        </div>
        </>
    )

}