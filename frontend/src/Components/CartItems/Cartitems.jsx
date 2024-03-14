import React, { useContext } from 'react';
import './cartitems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const Cartitems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

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

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return <div>          <div className="cartitems-format cartitems-format-main" key={e.id}>
              <img src={e.image} alt="" className="carticon-product-icon" />
              <p>{e.name}</p>
              <p>₹{e.new_price*10}</p>
              <button className="carticons-qualnity">{cartItems[e.id]}</button>
              <p>₹{e.new_price * cartItems[e.id]*10}</p>
              <img className='remove-icons' src={remove_icon} alt="" onClick={() => removeFromCart(e.id)} />
            </div>
            <hr />
            </div>
   
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-items">
                    <p>Subtotal</p>
                    <p>₹{0*10}</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <h3>Total</h3>
                    <h3>₹{0*10}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
             <p>If you have a promocode , Enter it here </p>
             <div className="cartitems-promobox">
                <input type="text" placeholder='promo code ' />
                <button>submit</button>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
