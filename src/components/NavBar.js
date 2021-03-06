import React, { useState } from 'react';
import '../assets/style/NavBar.css';
import { Link } from 'react-router-dom';



function NavBar() {

    const [nav, setNav] = useState({
        cartIcon: 'https://i.imgur.com/4JpVowC.png',
        loginIcon: 'https://i.imgur.com/l6zEpG2.png'
    })
  
  
    return (
    <div className="navbar">
        
            <Link to={`/`} className="nav-link brand-name">
                <h1>Tech Excess</h1>
            </Link>
            <Link to={`/monitors`} className="nav-link cat-link">
                <h2>Monitors</h2>
            </Link>
            <Link to={`/keyboards`} className="nav-link cat-link">
                <h2>Keyboard</h2>
            </Link>
            <Link to={`/mouses`} className="nav-link cat-link">
                <h2>Mouses</h2>
            </Link>
            <Link to={`/headphones`} className="nav-link cat-link">
                <h2>Headphones</h2>
            </Link>
            {/* <Link to={`/user/reviews`} className="nav-link cat-link">
                <h2>Users Reviews</h2>
            </Link> */}
        
        <div className="cart-container">
            <Link to={`/user/cart`} className="nav-link">
                <img className="cart-icon" src={nav.cartIcon} alt='shopping cart icon'/>
            </Link>
        </div>
        <div className="cart-container">
            <Link to={`/profile`} className="nav-link">
                <img className="profile-icon" src={nav.loginIcon} alt='login/profile icon' />
            </Link>
        </div>
    </div>
  )
}

export default NavBar