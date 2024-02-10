import React, { useContext } from 'react';
import './ProductDisplay.css';
import starIcon from '../Assets/star_icon.png';
import stardullcon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
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

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={stardullcon} alt="" />
            <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
            <div className="product-display-right-old-price">${product.old_price}</div>
            <div className="product-display-right-new-price">${product.new_price}</div>
        </div>
        <div className="product-display-right-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, quasi excepturi! Laboriosam porro est sunt quae velit, illum voluptatum, necessitatibus tempora error blanditiis sequi itaque neque sit. Sed, animi pariatur.
        </div>
        <div className="product-display-right-size">
            <h1>Select Size</h1>
            <div className="product-display-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='product-display-right-category'>
            <span>Category: </span>Women, T-Shirt, Crop Top
        </p>
        <p className='product-display-right-category'>
            <span>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay
