import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm, updateUser } from '../../features/user/userSlice';
import style from './style.module.css';

function Profile() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);
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
    dispatch(updateUser(values));
    dispatch(toggleForm(false));
  }

  useEffect(()=>{
    if (!currentUser) {
      return
    }
    setValues(currentUser)
  },[currentUser])

 useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <div className={style.profile}>
      {!currentUser ? (
        <span className={style.title}>You need to login</span>
      ) : (
        <form className={style.register_form} onSubmit={handleSubmit}>
          <input
            className={style.form_input}
            placeholder={currentUser.email}
            name="email"
            type="email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            required
          />
          <input
            className={style.form_input}
            placeholder={currentUser.password}
            name="password"
            type="password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
            required
          />
          <input
            className={style.form_input}
            placeholder={currentUser.name}
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
            Update a account
          </button>
          {/* <div onClick={() => formTypeToggle('login')} className={style.link}>I already have an account </div> */}
        </form>
      )}
    </div>
  );
}

export default Profile;
