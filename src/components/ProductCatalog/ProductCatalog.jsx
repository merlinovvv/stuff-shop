import React, { useState } from 'react';
import style from './style.module.css';
import ProductLink from '../ProductLink/ProductLink';
function ProductCatalog() {
    const [priceValue, setPriceValue] = useState(0)

  return (
    <div className={style.product_catalog}>
      <h3 className={style.title}>Sneakers</h3>
      <div className={style.filter}>
        <input
          placeholder="Product name"
          className={`${style.filter_input} ${style.filter_name}`}
          type="text"
        />
        <input
          placeholder="Price from"
          className={`${style.filter_input} ${style.filter_price}`}
          type="text"
        />
      </div>
      <div className={style.catalog}>
        <ProductLink />
        <ProductLink />
        <ProductLink />
        <ProductLink />
        <ProductLink />
        <ProductLink />
        <ProductLink />
        <ProductLink />
        <ProductLink />
        <ProductLink />
      </div>
      <div className={style.pagination}>
        <button className={`${style.page_btn} ${style.active}`}>1</button>
        <button className={`${style.page_btn}`}>2</button>
        <button className={`${style.page_btn}`}>3</button>
      </div>
    </div>
  );
}

export default ProductCatalog;
