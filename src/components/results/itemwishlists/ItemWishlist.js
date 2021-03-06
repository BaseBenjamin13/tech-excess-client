import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../../contexts/UserState';

function ItemWishlist({ wishlist, item }) {

    const {user, setUser} = useContext(UserContext)
    const [newWishlists, setNewWishlists] = useState()
    const baseUrl = process.env.REACT_APP_IS_DEPLOYED === 'true'
    ? "https://tech-excess-server.herokuapp.com"
    : "http://127.0.0.1:8000"
    const newWishlistUrl = baseUrl + '/user/wishlists/' + wishlist.id
    const addToWishlist = () => {
        const copy = item.wishlists
        copy.push(newWishlistUrl)
        setNewWishlists(copy)
    }
    if(newWishlists) {
        axios.put(baseUrl + '/items/edit/' + item.id, {
            "category": item.category,
            "description": item.description,
            "price": item.price,
            "image_urls": item.image_urls,
            "wishlists": newWishlists,
            "carts": item.carts,
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

  return (
    <div className="item-wishlist">
        <button className="add-to-btn" onClick={addToWishlist}>Add To</button>
        <h2>{wishlist.name}{item.wishlists.includes(newWishlistUrl + '?format=json') && ' ✅'}</h2>
    </div>
  )
}

export default ItemWishlist