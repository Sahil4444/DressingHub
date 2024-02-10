import React from 'react';
import './css/Category.css'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from "../Components/Items/Item"

const Category = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopCategory-banner' src={props.banners} alt="" />
      <div className="ShopCategoryIndexSort">
        <p><span>Showing 1-12</span> out of 36 products</p>
        <div className="ShopCategorySort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategoryProducts">
        {all_product.map((item, i)=>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }else{
            return null;
          }
        })}
      </div>
      <button>Explore More</button>
    </div>
  )
}

export default Category
