import React from 'react';
import style from './style.module.css';

function Sale() {
  return (
    <div className={style.sale}>
      <div className={style.sale_info}>
        <div className={style.info_text}>
          <h2 className={style.pre_title}>NEW YEAR</h2>
          <h1 className={style.title}>SALE</h1>
          <button className={style.see_more_btn}>See more</button>
        </div>
        <img className={style.sneaker} src="img/sale_sneaker.png" alt="" />
        <img className={style.gameboy} src="img/sale_gameboy.png" alt="" />
      </div>
      <div className={style.sale_background}>
        <img className={style.background_img} src="img/sale_img.jpg" alt="" />
        <p className={style.background_text}>save up to <span>50%</span> off</p>
      </div>
    </div>
  );
}

export default Sale;
