import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import CommonTitle from '../../components/common-components/common-title';
import cn from './style.module.sass';
import Link from 'next/link';
import { en } from '../../locales/en';
import { ru } from '../../locales/ru';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Autorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('error');
  const errors = [];
  let validEmail = false;
  let validPassword = false;

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
      const response = await axios.post('http://localhost:3001/api/login', {
        email: email,
        password: password,
      });
      setSeverity('success');
      setMessage('Вы удачно авторизованы');
      setOpen(true);
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('user', response.data.user.email);
      onResetFilters();
    } catch (e) {
      setMessage('Пользователь с таким email не найден');
      setOpen(true);
    }
  };

  const onClickSignInBtn = e => {
    if (email === '' || password === '') {
      errors.push(`Заполните все поля! `);
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
        'Введите в поле password не менее 6 латинских символов, минимум 1 из которых является числом'
      );
      setMessage(errors);
      setOpen(true);
    } else {
      validPassword = true;
    }
    if (validEmail && validPassword) {
      signInCheck(email, password);
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
        <ScrollAnimation animateIn="fadeInUp" offset={50} animateOnce={true} duration={1}>
          <div className={clsx(cn.registration__form, 'bg-white p-16')}>
            <CommonTitle color="text-black-100">{t.loginTitle}</CommonTitle>
            <form onSubmit={handleSubmit}>
              <label className="font-inter text-black-100 text-2xl inline-block" htmlFor="login">
                {t.loginLogin}
              </label>
              <input
                type="text"
                id="login"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                  src="/img/registration/invisible.svg"
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

export default Autorization;
