import React from 'react';
import style from './style.module.css'
import ProductLink from '../ProductLink/ProductLink';

function ProductList({title}) {
  return (
    <div  className={style.content_block}>
        <h3 className={style.title}>
            {title}
        </h3>
        <div className={style.product_list}>
            <ProductLink/>
            <ProductLink/>
            <ProductLink/>
            <ProductLink/>
            <ProductLink/>
        </div>
        <button className={style.see_more_btn}>See more</button>
    </div>
  )
}

export default ProductList