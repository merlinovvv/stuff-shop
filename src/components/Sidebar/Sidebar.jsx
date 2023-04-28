import React, { useState } from 'react';
import style from './style.module.css';

const menu = [
  'Computers',
  'Clothes',
  'Shoes',
  'Furniture',
  'Cosmetics',
  'Travel',
  'Automotive',
];

function Sidebar() {
  const [selectLink, setSelectLink] = useState(0);

  function onClickSelectLink(index) {
    setSelectLink(index);   
  }

  return (
    <aside className={style.sidebar}>
      <div className={style.menu}>
        <h4 className={style.menu_title}>Categories</h4>
        <ul className={style.menu_list}>
          {menu.map((link, index) => {
            return (
              <li
                key={`${index}_${link}`}
                onClick={() => onClickSelectLink(index)}
                className={`${style.menu_link} ${selectLink === index ? style.active : ''}`}>
                {link}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.help_terms}>
        <a className={style.help_terms_link} href="/">
          Help
        </a>
        <a className={style.help_terms_link + ' ' + style.underline} href="/">
          Terms & Conditions
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
