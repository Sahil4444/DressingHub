import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt='logo' />
        <p>Dressing Hub</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Shop</Link>{menu==='shop'?<hr />:<></>}</li>
        <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration: 'none', color: 'black'}} to='/kids'>Kids</Link>{menu==='kids'?<hr />:<></>}</li>
        <li onClick={()=>{setMenu('men')}}><Link style={{textDecoration: 'none', color: 'black'}} to='/men'>Men</Link>{menu==='men'?<hr />:<></>}</li>
        <li onClick={()=>{setMenu('women')}}><Link style={{textDecoration: 'none', color: 'black'}} to='/women'>Women</Link>{menu==='women'?<hr />:<></>}</li>
        <li onClick={()=>{setMenu('unisex')}}><Link style={{textDecoration: 'none', color: 'black'}} to='/unisex'>Unisex</Link>{menu==='unisex'?<hr />:<></>}</li>
      </ul>
      <div className="login-cart">
        <button>
          <Link style={{textDecoration: 'none', color: 'white', display: 'flex'}} to='/login'>Login
            <div class="arrow-wrapper">
              <div class="arrow"></div>

            </div>
          </Link>
        </button>
        <Link style={{textDecoration: 'none', color: 'black'}} to='/cart'>
          <i class="bi bi-cart"></i>
        </Link>
          <div className="cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
