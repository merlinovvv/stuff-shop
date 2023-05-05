import React from 'react';
import style from './style.module.css';

function CartProduct({ images, title, price, quantity, category: {name}, changeQuantity, item, removeFromCart }) {
  return (
    <div className={style.cart_product}>
      <div className={style.left_info}>
        <img className={style.product_img} src={images} alt={title} />
        <div className={style.product_text}>
          <p className={style.product_name}>{title}</p>
          <p className={style.product_category}>{name}</p>
        </div>
      </div>
      <p className={style.product_price}>{price}$</p>
      <div className={style.operations}>
        <button onClick={() => changeQuantity(item, Math.max(1, quantity - 1))} className={`${style.operation_btn} ${style.minus}`}>
          <span className={style.operations_dec}></span>
        </button>
        <p className={style.operations_count}>{quantity}</p>
        <button onClick={() => changeQuantity(item, Math.max(1, quantity + 1))} className={`${style.operation_btn} `}>
          <span className={style.operations_inc}></span>
        </button>
      </div>
      <div className={style.right_info}>
        <p className={style.total_price}>{price * quantity}$</p>
        <span onClick={() => removeFromCart(item)} className={style.delete_product}></span>
      </div>
    </div>
  );
}

export default CartProduct;
