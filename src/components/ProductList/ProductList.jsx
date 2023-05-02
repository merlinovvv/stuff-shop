import React from 'react';
import style from './style.module.css';
import ProductLink from '../ProductLink/ProductLink';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { useSelector } from 'react-redux';
import Skeleton from '../Skeleton/Skeleton';

function ProductList({ title, amount, products, isLoading }) {
  const list = products.filter((_, i) => i < amount);

  return (
    <div className={style.content_block}>
      <h3 className={style.title}>{title}</h3>
      <div className={style.product_list}>
        {isLoading
          ? Array.from({ length: amount }, (_, index) => (
              <Skeleton key={index} />
            ))
          : list.map(
              (
                { id, images, title, category: { name: cat }, price },
                index
              ) => {
                return (
                  <Link
                    className={style.product_block}
                    key={id}
                    to={`/products/${id}`}>
                    <div
                      className={style.product_img}
                      style={{ backgroundImage: `url(${images[0]})` }}
                    />
                    <div className={style.description}>
                      <div className={style.text}>
                        <p className={style.name}>{title}</p>
                        <p className={style.category}>{cat}</p>
                      </div>
                      <div className={style.info}>
                        <div className={style.price}>
                          <p className={style.new_price}>{price}$</p>
                          <p className={style.old_price}>
                            {Math.floor(price * 1.5)}$
                          </p>
                        </div>
                        <p className={style.purchases}>
                          {Math.floor(Math.random() * 20 + 1)} purchased
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              }
            )}
      </div>
      <button className={style.see_more_btn}>See more</button>
    </div>
  );
}

export default ProductList;
