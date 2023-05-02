import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, toggleForm } from '../../features/user/userSlice';

function Registration() {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: '',
    password: '',
    name: '',
    avatar: '',
  });

  function handleChange({ target: { value, name } }) {
    setValues({ ...values, [name]: value });
  }

  const { showForm } = useSelector(({ user }) => user);

  function handleClick() {
    dispatch(toggleForm(false));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isNotEmpty = Object.values(values).some((val) => val);
    if (!isNotEmpty) {
      return;
    }
    console.log(values);
    dispatch(createUser(values));
    dispatch(toggleForm(false));
  }

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <div
      className={`${style.register_container} ${showForm ? style.open : ''}`}>
      <div className={`${style.registration} ${showForm ? style.open : ''}`}>
        <span onClick={handleClick} className={style.close_form}></span>
        <h4 className={style.title}>Register</h4>
        <form className={style.register_form} onSubmit={handleSubmit}>
          <input
            className={style.form_input}
            placeholder="Email"
            name="email"
            type="email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            required
          />
          <input
            className={style.form_input}
            placeholder="Password"
            name="password"
            type="password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
            required
          />
          <input
            className={style.form_input}
            placeholder="Username"
            name="name"
            type="name"
            autoComplete="off"
            value={values.username}
            onChange={handleChange}
            required
          />
          <input
            className={style.form_input}
            placeholder="Photo"
            name="avatar"
            type="avatar"
            autoComplete="off"
            value={values.avatar}
            onChange={handleChange}
            required
          />
          {/* <div className={style.file_input}>
            <input
              type='file'
              name="avatar"
              id="file-input"
              className={style.file_input__input}
              value={values.avatar}
              onChange={handleChange}
            />
            <label className={style.file_input__label} htmlFor="file-input">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="upload"
                className={style.svg_file}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
              </svg>
              <span>Upload photo</span>
            </label>
          </div> */}

          <button type="submit" className={style.from_btn}>
            Create an account
          </button>
          <div className={style.link}>I already have an account </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
