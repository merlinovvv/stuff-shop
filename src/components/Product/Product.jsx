import React from 'react';
import style from './style.module.css';

function Product() {
  return (
    <div className={style.product_block}>
      <img className={style.product_img} src="img/product_img.jpg" alt="" />
      <div className={style.description}>
        <div className={style.text}>
          <p className={style.name}>Nike ZoomX 2023</p>
          <p className={style.category}>Sneakers</p>
        </div>
        <div className={style.info}>
            <div className={style.price}>
                <p className={style.new_price}>99$</p>
                <p className={style.old_price}>79$</p>
            </div>
            <p className={style.purchases}>19 people purchased</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
