import React, { useContext } from 'react'
import '../Pages/Css/shopcategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/item/Item'

const ShopCategory = (props) => {
  const {all_product}  = useContext(ShopContext);
  console.log({all_product});
  console.log(props.category);
  
  return (
    <div className='shop-category'>
    <img src={props.banner} alt="" className='shopcategory-banner'/>
      <div className="shopcategory-indexsort">
       <p>
        <span>Showing 1-12</span> out of 36 products
       </p>
       <div className="shopcategory-sort">
        Sort by <img src={dropdown_icon} alt="" />

       </div>
      </div>

      {/* <h1>All Products</h1> */}


      <div className="shopcategory-products">

        {
         all_product.map((item,i)=>{
          if(props.category === item.category)
          {
            return     <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
          }
         })
        }

      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
    
  )
}

export default ShopCategory