import React from 'react';
import style from './style.module.css';

function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <div className={style.menu}>
        <h4 className={style.menu_title}>Categories</h4>
        <ul className={style.menu_list}>
          <li className={style.menu_link + ' ' + style.active}>Computers</li>
          <li className={style.menu_link}>Clothes</li>
          <li className={style.menu_link}>Shoes</li>
          <li className={style.menu_link}>Furniture</li>
          <li className={style.menu_link}>Cosmetics</li>
          <li className={style.menu_link}>Travel</li>
          <li className={style.menu_link}>Automotive</li>
        </ul>
      </div>
      <div className={style.help_terms}>
        <a className={style.help_terms_link} href="/">Help</a>
        <a className={style.help_terms_link + " " + style.underline} href="/">Terms & Conditions</a>
      </div>
    </aside>
  );
}

export default Sidebar;
