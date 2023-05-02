import React, { useState } from 'react';
import style from './style.module.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../features/user/userSlice';
function Product(item) {
  const { title, images, description, price } = item;
  const dispatch = useDispatch();
  const [selectImage, setSelectImage] = useState(0);
  const [selectSize, setSelectsSize] = useState();

  function onClickSelectImage(index) {
    setSelectImage(index);
  }

  function onClickSelectsSize(index) {
    setSelectsSize(index);
  }

  const SIZES = [4.5, 5, 5.5];

  function addToCart() {
    dispatch(addItemToCart(item));
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
          <h3 className={style.info_name}>{title}</h3>
          <p className={style.info_price}>{price}$</p>
          <div className={style.option}>
            <p className={style.option_name}>Color:</p>
            <span>Blanc</span>
          </div>
          <div className={style.option}>
            <p className={style.option_name}>Sizes:</p>
            <div className={style.operations_btns}>
              {SIZES.map((size, index) => {
                return (
                  <button
                    onClick={() => onClickSelectsSize(index)}
                    key={`${index}_${size}`}
                    className={`${style.btn}  ${
                      selectSize === index ? style.active : ''
                    }`}>
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
          <div className={style.desc}>{description}</div>
          <div className={style.info_btns}>
            <button
            onClick={addToCart}
              className={`${style.info_btn} ${
                selectSize === undefined ? style.disabled : ''
              }`}>
              Add to cart
            </button>
            <button className={style.info_btn}>Add to favorites</button>
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

export default Product;
