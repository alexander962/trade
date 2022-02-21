import clsx from 'clsx';
import React, { useCallback, useContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { en } from '../../locales/en';
import { ru } from '../../locales/ru';
import ScrollAnimation from 'react-animate-on-scroll';

import CommonTitle from '../../components/common-components/common-title';
import cn from './style.module.sass';
import Link from 'next/link';
import { Context } from '../_app';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('error');
  const { store } = useContext(Context);
  const errors = [];
  let validEmail = false;
  let validPassword = false;
  let validRepeatPassword = false;
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  const onResetFilters = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const addNewUser = async () => {
    try {
      await store.registration(email, password);
      setSeverity('success');
      setMessage('Вы удачно зарегестрированны');
      setOpen(true);
      onResetFilters();
    } catch (e) {
      setMessage('Пользователь с таким email уже существует');
      setOpen(true);
    }
  };

  const onClickRegisterBtn = e => {
    if (email === '' || password === '' || repeatPassword === '') {
      errors.push('Заполните все поля! ');
      setMessage('Заполните все поля!');
      setOpen(true);
    }
    if (
      !/^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      errors.push(`Введите корректный email, например: example@gmail.com! `);
      setMessage(errors);
      setOpen(true);
    } else {
      validEmail = true;
    }
    if (!/(?=.*[0-9])(?=.*[A-Za-z]){5,}/.test(password)) {
      errors.push(
        'Введите в поле password не менее 6 латинских символов, минимум 1 из которых является числом! '
      );
      setMessage(errors);
      setOpen(true);
    } else {
      validPassword = true;
    }
    if (password !== repeatPassword) {
      errors.push('Пароли не совпадают!');
      setMessage(errors);
      setOpen(true);
    } else {
      validRepeatPassword = true;
    }
    if (validEmail && validPassword && validRepeatPassword) {
      addNewUser();
      setEmail('');
      setPassword('');
      setRepeatPassword('');
    }
  };

  function showHidePassword() {
    const input = document.getElementById('password');
    const linkA = document.getElementById('password_control');
    console.log(linkA);
    if (input.getAttribute('type') === 'password') {
      linkA.src = '/img/registration/view.svg';
      input.setAttribute('type', 'text');
    } else {
      linkA.src = '/img/registration/invisible.svg';
      input.setAttribute('type', 'password');
    }
    return false;
  }

  function showHidePasswordRepeat() {
    let input = document.getElementById('password-repeat');
    let linkA = document.getElementById('password_control__repeat');
    if (input.getAttribute('type') == 'password') {
      linkA.src = '/img/registration/view.svg';
      input.setAttribute('type', 'text');
    } else {
      linkA.src = '/img/registration/invisible.svg';
      input.setAttribute('type', 'password');
    }
    return false;
  }

  return (
    <section className={clsx(cn.registration, 'bg-black-100 h-full')}>
      <div className="container mx-auto px-4 text-white">
        <ScrollAnimation animateIn="fadeInUp" offset={50} animateOnce={true} duration={1}>
          <div className={clsx(cn.registration__form, 'bg-white p-16')}>
            <CommonTitle color="text-black-100">{t.registrationTitle}</CommonTitle>
            <form onSubmit={handleSubmit}>
              <label className="font-inter text-black-100 text-2xl inline-block" htmlFor="login">
                {t.registrationLogin}
              </label>
              <input
                type="text"
                id="login"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

              <label className="font-inter text-black-100 text-2xl" htmlFor="password">
                {t.registrationPassword}
              </label>
              <div className={clsx(cn.password_block, 'password_block')}>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <img
                  src="/img/registration/invisible.svg"
                  alt=""
                  className={clsx(cn.password_control, 'password_control')}
                  id="password_control"
                  onClick={() => showHidePassword()}
                />
              </div>

              <label className="font-inter text-black-100 text-2xl" htmlFor="password">
                {t.registrationRepeatPassword}
              </label>
              <div className={clsx(cn.password_block__repeat, '')}>
                <input
                  type="password"
                  id="password-repeat"
                  placeholder="Password"
                  value={repeatPassword}
                  onChange={e => setRepeatPassword(e.target.value)}
                />
                <img
                  src="/img/registration/invisible.svg"
                  className={clsx(cn.password_control__repeat, 'password_control__repeat')}
                  id="password_control__repeat"
                  onClick={() => showHidePasswordRepeat()}
                />
              </div>

              <div className={clsx(cn.send_block, '')}>
                <button onClick={e => onClickRegisterBtn(e)}>{t.registrationButton}</button>
                <Link href="/autorization">
                  <span className="text-black-100 cursor-pointer">{t.registrationLogIn}</span>
                </Link>
                <Link href="/">
                  <span className="text-black-100 cursor-pointer mt-20px">{t.comeBack}</span>
                </Link>
              </div>
            </form>
          </div>
        </ScrollAnimation>
      </div>

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Registration;
