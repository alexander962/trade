import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import CommonTitle from '../../components/common-components/common-title';
import cn from './style.module.sass';
import Link from 'next/link';
import { en } from '../../components/local/locales/en';
import { ru } from '../../components/local/locales/ru';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Autorization = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('error');

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

  const signInCheck = async () => {
    try {
      await axios.post('http://localhost:3001/checkUser', {
        login: login,
        password: password,
      });
      setSeverity('success');
      setMessage('Вы удачно авторизованы');
      setOpen(true);
      localStorage.setItem('user', login);
      onResetFilters();
    } catch (e) {
      setSeverity('error');
      setMessage('Вы ввели неверный логин или пароль');
      setOpen(true);
    }
  };

  const onClickSignInBtn = e => {
    if (login === '' || password === '') {
      setMessage('Заполните все поля!');
      setOpen(true);
    } else if (login.length < 6) {
      setMessage('Минимальное колличество символов для Login = 6');
      setOpen(true);
    } else if (!/(?=.*[0-9])(?=.*[A-Za-z]){5,}/.test(password)) {
      setMessage(
        'Введите в поле password не менее 6 латинских символов, минимум 1 из которых является числом'
      );
      setOpen(true);
    } else {
      signInCheck();
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

  return (
    <section className={clsx(cn.registration, 'bg-black-100 h-full')}>
      <div className="container mx-auto px-4 text-white">
        <div className={clsx(cn.registration__form, 'bg-white p-16')}>
          <CommonTitle color="text-black-100">{t.loginTitle}</CommonTitle>
          <form onSubmit={handleSubmit}>
            <label className="font-inter text-black-100 text-2xl inline-block" htmlFor="login">
              {t.loginLogin}
            </label>
            <input
              type="text"
              id="login"
              placeholder="Login"
              value={login}
              onChange={e => setLogin(e.target.value)}
            />

            <label className="font-inter text-black-100 text-2xl" htmlFor="password">
              {t.loginPassword}
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
                src="/img/registration/view.svg"
                alt="view"
                className={clsx(cn.password_control, 'password_control')}
                id="password_control"
                onClick={() => showHidePassword()}
              />
            </div>

            <div className={clsx(cn.send_block, '')}>
              <button onClick={e => onClickSignInBtn(e)}>{t.loginButton}</button>
              <Link href="/registration">
                <span className="text-black-100 cursor-pointer">{t.loginRegistration}</span>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Autorization;
