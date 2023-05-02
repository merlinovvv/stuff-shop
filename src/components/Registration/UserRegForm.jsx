import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import { createUser, toggleForm } from '../../features/user/userSlice';
import { useDispatch } from 'react-redux';

function UserRegForm({ formTypeToggle }) {
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
        value={values.name}
        onChange={handleChange}
        required
      />
      <input
        className={style.form_input}
        placeholder="URL photo"
        name="avatar"
        type="avatar"
        autoComplete="off"
        value={values.avatar}
        onChange={handleChange}
        required
      />
      <button type="submit" className={style.from_btn}>
        Create an account
      </button>
      <div onClick={() => formTypeToggle('login')} className={style.link}>
        I already have an account{' '}
      </div>
    </form>
  );
}

export default UserRegForm;
