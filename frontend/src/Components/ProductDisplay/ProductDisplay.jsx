import React, { useContext } from 'react'
import './productDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
  const {product} = props;
  // console.log(product.id);
  
  const {addToCart} =useContext(ShopContext);
    return (
    <>
    <div className="productdisplay">
      <div className="productdisplay-left">
       <div className="productdisplay-img-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />

       </div>
       <div className="productdisplay-img">
        <img className='productdisplay-main-img' src={product.image} alt="" />

       </div>
      </div>


    <div className="productdiaplay-right">
    <h1>{product.name}</h1>
    <div className="productdisplay-right-star"> 
       <img src={star_icon} alt="" />
       <img src={star_icon} alt="" />
       <img src={star_icon} alt="" />
       <img src={star_icon} alt="" />
       <img src={star_dull_icon} alt="" />
    <p>({120})</p>
 
    </div>
    <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">₹{product.old_price*10} </div>
        <div className="product-display-right-price-new">₹{product.new_price*10}</div>
    </div>
    <div className="productdisplay-right-description">
        A light weight , usually knitted ,pulledover shirt, close-fittinh and lookss very good 
        .It has a rounded neckline and short sleeves , worn as an undershirt ot oute wear as a garment.
    </div>
    <div className="productdisplay-right-size">
        <h1> Select Size</h1>
        <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
    </div>
    <button className='btnn' onClick={()=>{addToCart(product.id)} } >  ADD TO CART</button>

  <p className="productdisplay-right-category"> <span>Category: </span> Women, T-Shirt , Crop Top</p>
  <p className="productdisplay-right-category"> <span>Tags: </span> Modern,Latest </p>

  </div>
    </div>
    
    </>
  )
}

export default ProductDisplay