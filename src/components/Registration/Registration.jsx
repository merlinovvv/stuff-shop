import React from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm, toggleFormType } from '../../features/user/userSlice';
import UserLoginForm from './UserLoginForm';
import UserRegForm from './UserRegForm';

function Registration() {
  const dispatch = useDispatch();

  const { showForm, formType } = useSelector(({ user }) => user);

  function handleClick() {
    dispatch(toggleForm(false));
  }

  function formTypeToggle(type) {
    dispatch(toggleFormType(type));
  }

  return (
    <div
      className={`${style.register_container} ${showForm ? style.open : ''}`}>
      <div className={`${style.registration} ${showForm ? style.open : ''}`}>
        <span onClick={handleClick} className={style.close_form}></span>
        <h4 className={style.title}>
          {formType === 'signup' ? 'Register' : 'Login'}
        </h4>
        {formType === 'signup' ? (
          <UserRegForm formTypeToggle={formTypeToggle} />
        ) : (
          <UserLoginForm formTypeToggle={formTypeToggle} />
        )}
      </div>
    </div>
  );
}

export default Registration;
