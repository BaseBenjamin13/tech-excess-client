import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/UserState';
import { Link, useNavigate } from 'react-router-dom';


function WishlistItem({ itemUrl, wishlist }) {

    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)

    const [item, setItem] = useState()
    const [replaceWishlist, setReplaceWishlist] = useState()

    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"
    
    const newWishlistUrl = baseUrl + '/user/wishlists/' + wishlist.id;
    const removeItem = () => {
        const index = item.wishlists.indexOf(newWishlistUrl);
        const copy = item.wishlists;
        copy.splice(index, 1);
        setReplaceWishlist(copy)
    }

    if(replaceWishlist) {
        axios.put(baseUrl + '/items/edit/' + item.id, {
            "carts": item.carts,
            "category": item.category,
            "description": item.description,
            "price": item.price,
            "image_urls": item.image_urls,
            "wishlists": replaceWishlist,
        },{
            headers: {
                'Authorization': `Token ${user.knoxToken}`
            }
        })
        .then(() => {
            window.location.reload()
        })
        .catch(err => console.log(err))
    }


    useEffect(() => {
        axios.get(itemUrl)
            .then((res) =>{
                setItem(res.data);
            })
            .catch(err => console.log(err))
        
    }, [])

    if(!item) {
        return <h2>Loding...</h2>
    }

  return (
    <div className="wishlist-item-container">
        <div className="wishlist-img-container">
            <img className="wishlist-img" src={item.image_urls[0]}></img>
        </div>
        <div className="wishlist-title-container">
            <button className="remove-item-btn" onClick={removeItem}>Remove Item</button>
            <Link className="item-link" to={`/${item.category}s/${item.id}`}>
                <h2>{item.title}</h2>
            </Link>
        </div>
        <div className="wishlist-price-container">
            <h2>${item.price}</h2>
        </div>
    </div>
  )
}

export default WishlistItem