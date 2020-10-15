import React from 'react'
import '../styles/Product.css'
import {useStateValue} from "../StateProvider.js"
import {motion} from 'framer-motion'

function Product({id,title,image,price,rating}) {
    const [{ basket },dispatch] = useStateValue();
    const addToBasket =()=>{
        //dispatch some item into datalayer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        });

    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small><strong>{price}</strong>
                    <div className="product__ratings">
                        {Array(rating).fill().map((_,i)=>(
                            <p>⭐️</p>))}
                    </div>
                </p>
            </div>
            <motion.img src={image} alt="product_thumb" whileHover={{scale:1.2}}/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
