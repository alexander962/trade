import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';

import { en } from '../../../locales/en';
import { ru } from '../../../locales/ru';
import cn from './style.module.sass';
import { Context } from '../../../pages/_app';
import { observer } from 'mobx-react-lite';

const Header = () => {
  const [auth, setAuth] = useState(true);
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;
  const { store } = useContext(Context);

  const logOut = async () => {
    try {
      await store.logout();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <header className={clsx(cn.header, 'bg-black-300')}>
      <div className="flex justify-between items-center container mx-auto px-4">
        <div className={clsx(cn.header__logo)}>
          <img src="/img/header/logo.png" alt="" />
        </div>
        <div className={clsx(cn.header__block, 'flex items-center')}>
          <Link href="/" locale="en">
            <a className="font-inter text-white uppercase">en</a>
          </Link>
          <Link href="/" locale="ru">
            <a className="font-inter text-white uppercase ml-4 380px:ml-8 md:ml-12">ru</a>
          </Link>
          {store.isAuth ? (
            <div className={clsx(cn.header__out, 'ml-4 380px:ml-8 md:ml-12')}>
              <span className="text-white">{store.user.email}</span>
              <div onClick={logOut} className="text-white cursor-pointer">
                Выход
              </div>
            </div>
          ) : (
            <Link href="/autorization">
              <button
                className={clsx(cn.header_button, 'cursor-pointer ml-4 380px:ml-8 md:ml-12')}
                type="button"
              >
                {t.headerBtn}
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default observer(Header);
