import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { en } from '../../components/local/locales/en';
import { ru } from '../../components/local/locales/ru';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

import CommonTitle from '../../components/common-components/common-title';
import cn from './style.module.sass';
import Link from 'next/link';

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
      const response = await axios.post('http://localhost:3001/api/registration', {
        email: email,
        password: password,
      });
      setSeverity('success');
      setMessage('Вы удачно зарегестрированны');
      setOpen(true);
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('user', response.data.user.email);
      onResetFilters();
    } catch (e) {
      setSeverity('error');
      setMessage('Ошибка сервера');
      setOpen(true);
      // console.log('Это моя ошибка ' + e.process.data.message);
    }
  };

  const onClickRegisterBtn = e => {
    console.log('I am here!!!');
    if (email === '' || password === '' || repeatPassword === '') {
      setMessage('Заполните все поля!');
      setOpen(true);
    } else if (login.length < 6) {
      setMessage('Минимальное колличество символов для Login = 6');
      setOpen(true);
    } else if (
      !/^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setMessage('Введите корректный email, по типу example@mail.com');
      setOpen(true);
    } else if (password !== repeatPassword) {
      setMessage('Пароли не совпадают!');
      setOpen(true);
    } else {
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
                  alt="view"
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
