import React, { useState } from 'react';
import style from './style.module.css';

const productImages = {
  imageUrl: [
    'img/product_card_img.jpg',
    'img/sale_img.jpg',
    'img/recommend_img.jpg',
    'img/product_card_img.jpg',
    'img/product_card_img.jpg',
  ],
};

function ProductCard() {
  const [selectImage, setSelectImage] = useState(0);
  const images = productImages.imageUrl;

  function onClickSelectImage(index) {
    setSelectImage(index);
  }

  return (
    <div className={style.product_card}>
      <div className={style.gallery}>
        <img
          className={style.selected_image}
          src={images[selectImage]}
          alt=""
        />
        <div className={style.images_list}>
          {images.map((image, index) => {
            if (index === selectImage) {
              return null; // пропускаем элемент
            }
            return (
              <img
                className={style.image_product}
                onClick={() => onClickSelectImage(index)}
                key={index}
                src={image}
                alt=""
              />
            );
          })}
        </div>
      </div>
      <div className={style.product_info}>
        <div className={style.main_info}>
          <h3 className={style.info_name}>Bouncing sneaker Hermès</h3>
          <p className={style.info_price}>599$</p>
          <div className={style.option}>
            <p className={style.option_name}>Color:</p>
            <span>Blanc</span>
          </div>
          <div className={style.option}>
            <p className={style.option_name}>Sizes:</p>
            <div className={style.operations_btns}>
              <button className={style.btn}>4.5</button>
              <button className={style.btn}>5</button>
              <button className={style.btn}>5.5</button>
            </div>
          </div>
          <div className={style.desc}>
            Sneaker in air mesh and suede goatskin.
            Light sole with contrasting design for a versatile and modern look.
          </div>
          <div className={style.info_btns}>
            <button className={style.info_btn}>Add to cart</button>
            <button className={style.info_btn + ' ' + style.disabled}>Add to favorites</button>
          </div>
        </div>
        <div className={style.other_info}>
          <p className={style.count_people}>19 people purchased</p>
          <a href="/" className={style.find_link}>
            Find in a store
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
