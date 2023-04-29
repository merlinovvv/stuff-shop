import React from 'react';
import style from './style.module.css';

function Registration({ toggleForm, registerIsOpen }) {
  return (
    <div className={`${style.register_container} ${registerIsOpen ? style.open : ''}`}>
      <div
        className={`${style.registration} ${registerIsOpen ? style.open : ''}`}>
        <span
          onClick={() => toggleForm(false)}
          className={style.close_form}></span>
        <h4 className={style.title}>Register</h4>
        <form className={style.register_form} action="" method="post">
          <input
            className={style.form_input}
            placeholder="Email"
            type="email"
            name=""
            id=""
          />
          <input
            className={style.form_input}
            placeholder="Password"
            type="password"
            name=""
            id=""
          />
          <input
            className={style.form_input}
            placeholder="Username"
            type="text"
            name=""
            id=""
          />
          <button className={style.from_btn}>Create an account</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
