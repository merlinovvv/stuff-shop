import React from 'react';
import style from './style.module.css';
import { CartProduct } from '../../components/index';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
} from '../../features/user/userSlice';

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector(({ user }) => user);
  var totalPrice = 0;

  function changeQuantity(item, quantity) {
    dispatch(addItemToCart({ ...item, quantity }));
  }

  function removeFromCart(item) {
    dispatch(removeItemFromCart(item.id));
  }
  return (
    <div className={style.cart}>
      <h2 className={style.title}>Your cart</h2>

      <div className={style.product_list}>
        {!cart.length ? (
          <p className={style.title}>Your cart is empty</p>
        ) : (
          cart &&
          cart.map((item) => {
            const { id, title, price, quantity } = item;
            totalPrice += price * quantity;
            return (
              <CartProduct
                key={`${id}_${title}`}
                {...item}
                item={item}
                changeQuantity={changeQuantity}
                removeFromCart={removeFromCart}
              />
            );
          })
        )}
        {/* <p className={style.empty_cart}>Your cart is empty</p> */}
      </div>
      <div className={style.info}>
        <p className={style.price}>
          TOTAL PRICE: <span className={style.price_num}>{totalPrice}$</span>
        </p>
        <button className={style.checkout}>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default Cart;
