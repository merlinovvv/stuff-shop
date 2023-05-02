import React from 'react';
import style from './style.module.css';
import BANNER from "../../img/sale_img.jpg";
import SNEAKER from "../../img/sale_sneaker.png";
import GAMEBOY from "../../img/sale_gameboy.png"

function Sale() {
  return (
    <div className={style.sale}>
      <div className={style.sale_info}>
        <div className={style.info_text}>
          <h2 className={style.pre_title}>NEW YEAR</h2>
          <h1 className={style.title}>SALE</h1>
          <button className={style.see_more_btn}>See more</button>
        </div>
        <img className={style.sneaker} src={SNEAKER} alt="" />
        <img className={style.gameboy} src={GAMEBOY} alt="" />
      </div>
      <div className={style.sale_background}>
        <img className={style.background_img} src={BANNER} alt="" />
        <p className={style.background_text}>save up to <span>50%</span> off</p>
      </div>
    </div>
  );
}

export default Sale;
