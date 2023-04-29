import React from 'react';
import style from './style.module.css';
import CartProduct from '../CartProduct/CartProduct';

function Cart() {
  return (
    <div className={style.cart}>
      <h2 className={style.title}>Your cart</h2>

      <div className={style.product_list}>
        <CartProduct/>
        <CartProduct/>
        <CartProduct/>
        <CartProduct/>
        {/* <p className={style.empty_cart}>Your cart is empty</p> */}
      </div>
      <div className={style.info}>
        <p className={style.price}>
          TOTAL PRICE: <span className={style.price_num}>198$</span>
        </p>
        <button className={style.checkout}>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default Cart;
