import React from 'react';
import style from './style.module.css'

function RecommendBlock() {
  return (
    <div className={style.block}>
        <img className={style.block_img} src="img/recommend_img.jpg" alt="" />
        <p className={style.block_name}>Sneakers</p>
    </div>
  )
}

export default RecommendBlock