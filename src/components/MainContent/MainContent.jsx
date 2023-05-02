import React from 'react';
import style from './style.module.css';
import BANNER from "../../img/banner_img.png"

function MainContent() {
  return (
    <div className={style.banner}>
      <div className={style.big_text}>BIG SALE 20%</div>
      <div className={style.text_info}>
        <p className={style.pre_text}>the bestseller of 2022</p>
        <h1 className={style.title}>LENNON r2d2 <br /> with NVIDIA 5090 TI</h1>
        <button className={style.buy_btn}>Shop Now</button>
      </div>
      <img className={style.banner_img} src={BANNER} alt="" />
    </div>
  );
}

export default MainContent;
