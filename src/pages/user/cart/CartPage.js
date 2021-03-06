import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../contexts/UserState';
import '../../../assets/style/user/Cart.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Cart from '../../../components/cart/Cart';


function CartPage() {

    const { user, setUser } = useContext(UserContext);

    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"

    useEffect(() => {
            axios.get(baseUrl + '/user/carts/current',
            {
                headers: {
                    'Authorization': `Token ${user.knoxToken}`
                }
            }).then((res) => {
                console.log(res)
                localStorage.setItem('cart', JSON.stringify(res.data[0]))
                
            }).then(() => {
                setUser({
                    username: localStorage.getItem('username'),
                    email: localStorage.getItem('email'),
                    knoxToken: localStorage.getItem('knox_token'),
                    cart: JSON.parse(localStorage.getItem('cart'))
                })
            })
            .catch(err => console.log(err))
    }, [])

  return (
    <div className="cart-page">
        <div className="cart-header border-blue">
            {user.username ? <h1>{user.username}'s Cart</h1>: <h1>Cart</h1>}
        </div>
        
        <Cart />
    </div>
  )
}

export default CartPage