import React, { useState } from 'react';
import style from './style.module.css';
import { loginUser, toggleForm } from '../../features/user/userSlice';
import { useDispatch } from 'react-redux';

function UserLoginForm({formTypeToggle}) {
    const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: '',
    password: '',
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
    dispatch(loginUser(values));
    dispatch(toggleForm(false));
  }
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
    <button type="submit" className={style.from_btn}>
      Login in account
    </button>
    <div onClick={() => formTypeToggle('signup')} className={style.link}>Create an account </div>
  </form>
  )
}

export default UserLoginForm