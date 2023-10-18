import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css'


const Item = (Props) => {
  return (
    <div className="item">
      <Link to={'/product/${Props.id}'}><img src={Props.image} alt="" /></Link>
      <p>{Props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${Props.new_price}</div>
        <div className="item-price-old">${Props.old_price}</div>
      </div>
    </div>
  );
}

export default Item
