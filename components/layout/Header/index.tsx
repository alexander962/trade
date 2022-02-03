import clsx from 'clsx';
import React from 'react';

import cn from './style.module.sass';

const languages = [
  {
    name: 'РУС',
    link: '/',
    active: true,
  },
  {
    name: 'ENG',
    link: '/',
  },
];

const Header = () => (
  <header className={clsx(cn.header, 'bg-black-300')}>
    <div className="flex justify-between items-center container mx-auto px-4">
      <div>
        <img src="/img/header/logo.png" alt="logo" />
      </div>
      <div>
        <span className="font-inter text-white uppercase mr-8 md:mr-12">ru</span>
        <button className={clsx(cn.header_button, 'cursor-pointer')} type="button">
          Войти
        </button>
      </div>
    </div>
  </header>
);

export default Header;
