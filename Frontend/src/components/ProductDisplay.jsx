import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import ping from '../Assets/ping.mp3'
// import heart from '../Assets/heart.png'


const play_audio=()=>{
    var audio=new Audio(ping);

    audio.play();
}



const ProductDisplay = (props) => {
        
    
    var [add,setAdd]=useState(0);

    const {product}=props;
    const {addToCart}=useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img className='i1' src={product.image} alt="" />
            <img className='i1'src={product.image} alt="" />
            <img className='i1'src={product.image} alt="" />
            <img className='i1'src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img src={product.image} alt="" className="productdisplay-main-img" />
        </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>

                <div className="productdisplay-right-price-new"></div>
            </div>
            <div className="productdisplay-right-description">
                A lightweight, usually knitted, pullover shirt, close-fitting and a round neckline and short sleeves worn as a garment
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
            </div>

            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
               <div className="buttons">
               <button onClick={()=>{addToCart(product.id);play_audio();}}>ADD TO CART</button>
               <button className="add-to-wishlist" onClick={()=>{setAdd(add===0?1:0)}} >{add===0?'ADD TO WISHLIST':'REMOVE FROM WISHLIST'}</button>
               </div>
               
               
             
            

            <p className="productdisplay-right-category"><span>Category :</span>Women, T-shirt, Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
        </div>
       
      
    </div>
  )
}

export default ProductDisplay
