import React, { useContext } from 'react'
import './cartitems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
// const {all_product,cartItems,removeFromCart} = useContext(ShopContext);

const Cartitems = () => {
  return (
<div className="cartitems">
<div className="cartitems-format-main">
<p>Products</p>
<p>items</p>
<p>Price</p>
<p>Quantity</p>
<p>Total</p>
<p>Remove</p>
</div>
<hr />


<hr />
{all_product.map((e)=>{
    if(cartItems[e.id]>0)
    return <div className="cartitems-format">
    <img src={e.image} alt=""  className='carticon-product-icon'/>
    <p>{e.name}</p>
    <p>${e.new_price}</p>
    <button className='carticons-qualnity'>{cartItems[e.id]}</button>
    <p> {e.new_price*cartItems[e.id]}</p>

 <img src={remove_icon} alt="" onClick={()=>removeFromCart(e.id)}/>

</div>
})}
</div>  )
}

export default Cartitems