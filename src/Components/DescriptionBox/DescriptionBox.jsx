import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi maiores quaerat dolorem, quas eius nihil ab unde illum voluptas aperiam corrupti deserunt, vero ducimus amet quam pariatur, fugit eum!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione quam debitis beatae nulla voluptate.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
