import 'animate.css';

import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { en } from '../../local/locales/en';
import { ru } from '../../local/locales/ru';
import cn from './style.module.sass';

interface Props {
  user: string;
  setUser: any;
}

const Header: FC<Props> = ({ user, setUser }) => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  const outHandle = () => {
    localStorage.removeItem('user');
    setUser('');
  };

  return (
    <header className={clsx(cn.header, 'bg-black-300 animate__backInDown')}>
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
              <span className="text-white">{user}</span>
              <div onClick={outHandle} className="text-white cursor-pointer">
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
    </header>
  );
};

export default Header;

// Header.propTypes = {
//   user: PropTypes.string,
//   setUser: PropTypes.any,
// };
