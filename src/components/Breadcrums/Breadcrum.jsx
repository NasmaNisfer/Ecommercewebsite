import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'

const Breadcrum = (Props) => {
  const { product } = Props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} />
    </div>
  );
}

export default Breadcrum
