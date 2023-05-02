import React, { useState } from 'react';
import style from './style.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Sidebar() {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <aside className={style.sidebar}>
      <div className={style.menu}>
        <h4 className={style.menu_title}>Categories</h4>
        <ul className={style.menu_list}>
          {list.map(({ id, name }, index) => {
            return (
              <li key={`${id}_${name}`}>
                <NavLink
                  className={ ({isActive}) => `${style.menu_link} ${isActive ? style.active : ''}`}
                  key={`${index}_${id}`}
                  to={`/categories/${id}`}>
                  {name}
                </NavLink>
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
