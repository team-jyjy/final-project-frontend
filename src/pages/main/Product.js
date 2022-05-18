import * as React from 'react';
import "./Product.css";
import item1 from "./../../assets/images/introduce.png";
const Product = () => {
  return (
    <div>
      <div className='wrapProduct'>
        {/* <div className='product'>상품소개 페이지입니다.</div>\ */}
        <img className='product' src={item1}></img>
      </div>
    </div>
  );
}

export default Product;