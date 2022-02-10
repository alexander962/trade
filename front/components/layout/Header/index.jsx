import 'animate.css';

import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useLayoutEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

import { en } from '../../local/locales/en';
import { ru } from '../../local/locales/ru';
import cn from './style.module.sass';
import axios from 'axios';

const useWindowSize = () => {
  React.useLayoutEffect = React.useEffect;
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

const Header = ({ user, setUser }) => {
  const [width, height] = useWindowSize();
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  const logOut = async () => {
    try {
      await axios.post('http://localhost:3001/api/logout');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      setUser('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <header className={clsx(cn.header, 'bg-black-300')}>
      <ScrollAnimation animateIn="fadeInUp" offset={50} animateOnce={true} duration={1}>
        <div className="flex justify-between items-center container mx-auto px-4">
          <div className={clsx(cn.header__logo)}>
            <img src="/img/header/logo.png" alt="logo" />
          </div>
          <div className={clsx(cn.header__block, 'flex items-center')}>
            <Link href="/" locale="en">
              <a className="font-inter text-white uppercase mr-4 380px:mr-8 md:mr-12">en</a>
            </Link>
            <Link href="/" locale="ru">
              <a className="font-inter text-white uppercase mr-4 380px:mr-8 md:mr-12">ru</a>
            </Link>
            {user ? (
              <div className={clsx(cn.header__out)}>
                <span className="text-white">
                  {/*{user.length > 7 ? user.slice(0, 7) + '...' : user}*/}
                  {width > 640
                    ? user.length > 30
                      ? user.slice(0, 30) + '...'
                      : user
                    : user.length > 7
                    ? user.slice(0, 7) + '...'
                    : user}
                </span>
                <div onClick={logOut} className="text-white cursor-pointer">
                  Выход
                </div>
              </div>
            ) : (
              <Link href="/autorization">
                <button className={clsx(cn.header_button, 'cursor-pointer')} type="button">
                  {t.headerBtn}
                </button>
              </Link>
            )}
          </div>
        </div>
      </ScrollAnimation>
    </header>
  );
};

export default Header;
