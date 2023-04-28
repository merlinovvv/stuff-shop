import React from 'react';
import style from './style.module.css'
import Product from '../Product/Product';

function ProductList({title}) {
  return (
    <div  className={style.content_block}>
        <h3 className={style.title}>
            {title}
        </h3>
        <div className={style.product_list}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
        <button className={style.see_more_btn}>See more</button>
    </div>
  )
}

export default ProductList