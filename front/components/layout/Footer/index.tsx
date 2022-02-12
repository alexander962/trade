import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';

import { en } from '../../local/locales/en';
import { ru } from '../../local/locales/ru';
import cn from './style.module.sass';

const Footer = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <footer className={clsx(cn.footer, 'bg-black-100')}>
      <div className="container mx-auto px-4 font-inter text-gray-100">
        <div className={clsx(cn.footer__main, 'flex item-center')}>
          <div className={clsx(cn.footer__external)}>
            <a href="#" className="flex align-center">
              <img src="/img/footer/footer-svg-1.svg" alt="LinkedIn" className="lg:mr-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className={clsx(cn.footer__external)}>
            <a href="#" className="flex align-center">
              <img src="/img/footer/footer-svg-2.svg" alt="Telegram" className="lg:mr-4" />
              <span>Telegram</span>
            </a>
          </div>

          <div className={clsx(cn.footer__external)}>
            <a href="#" className="flex align-center">
              <img src="/img/footer/footer-svg-3.svg" alt="Reddit" className="lg:mr-4" />
              <span>Reddit</span>
            </a>
          </div>

          <div className={clsx(cn.footer__external, 'flex')}>
            <a href="#" className="flex align-center">
              <img src="/img/footer/footer-svg-4.svg" alt="Medium" className="lg:mr-4" />
              <span>Medium</span>
            </a>
          </div>

          <div className={clsx(cn.footer__external)}>
            <a href="#" className="flex align-center">
              <img src="/img/footer/footer-svg-5.svg" alt="Facebook" className="lg:mr-4" />
              <span>Facebook</span>
            </a>
          </div>

          <div className={clsx(cn.footer__external)}>
            <a href="#" className="flex align-center">
              <img src="/img/footer/footer-svg-6.svg" alt="Twitter" className="lg:mr-4" />
              <span>Twitter</span>
            </a>
          </div>

          <div className={clsx(cn.footer__external)}>
            <a href="#" className="flex align-center">
              <img src="/img/footer/footer-svg-7.svg" alt="YouTube" className="lg:mr-4" />
              <span>YouTube</span>
            </a>
          </div>
        </div>
        <hr />
        <div className={clsx(cn.footer__text, 'text-14px font-inter text-gray-100 leading-21px')}>
          {t.footerSub}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
