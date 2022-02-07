import 'animate.css';

import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { en } from '../../local/locales/en';
import { ru } from '../../local/locales/ru';
import cn from './style.module.sass';

const Header = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <header className={clsx(cn.header, 'bg-black-300 animate__backInDown')}>
      <div className="flex justify-between items-center container mx-auto px-4">
        <div className={clsx(cn.header__logo)}>
          <img src="/img/header/logo.png" alt="logo" />
        </div>
        <div>
          <Link href="/" locale="en">
            <a className="font-inter text-white uppercase mr-4 380px:mr-8 md:mr-12">en</a>
          </Link>
          <Link href="/" locale="ru">
            <a className="font-inter text-white uppercase mr-4 380px:mr-8 md:mr-12">ru</a>
          </Link>
          <button className={clsx(cn.header_button, 'cursor-pointer')} type="button">
            {t.headerBtn}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
