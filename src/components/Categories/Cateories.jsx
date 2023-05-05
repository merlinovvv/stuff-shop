import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import Skeleton from '../Skeleton/Skeleton';

function Categories({ categories, amount, isLoading }) {
  const list = categories.filter((_, i) => i < amount);

  return (
    <div className={style.recommend}>
      <h3 className={style.title}>Worth seeing</h3>
      <div className={style.recommend_list}>
        {isLoading
          ? Array.from({ length: amount }, (_, index) => (
              <Skeleton key={index} />
            ))
          : list.map(({ id, name, image }) => {
              return (
                <Link to={`/categories/${id}`} key={id} className={style.block}>
                  <div
                    className={style.block_img}
                    style={{ backgroundImage: `url(${image})` }}
                  />
                  <p key={id} className={style.block_name}>
                    {name}
                  </p>
                </Link>
              );
            })}
      </div>
    </div>
  );
}

export default Categories;
