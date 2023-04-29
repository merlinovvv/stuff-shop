import React from 'react';
import style from './style.module.css';

function CartProduct() {
  return (
    <div className={style.cart_product}>
      <div className={style.left_info}>
        <img className={style.product_img} src="img/product_img.jpg" alt="" />
        <div className={style.product_text}>
          <p className={style.product_name}>Nike ZoomX 2023</p>
          <p className={style.product_category}>Sneakers</p>
        </div>
      </div>
      <p className={style.product_price}>99$</p>
      <div className={style.operations}>
        <button className={`${style.operation_btn} ${style.minus}`}>
          <span className={style.operations_dec}></span>
        </button>
        <p className={style.operations_count}>1</p>
        <button className={`${style.operation_btn} `}>
          <span className={style.operations_inc}></span>
        </button>
      </div>
      <div className={style.right_info}>
        <p className={style.total_price}>99$</p>
        <span className={style.delete_product}></span>
      </div>
    </div>
  );
}

export default CartProduct;
