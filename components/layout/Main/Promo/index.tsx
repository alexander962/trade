import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Button from '../../../Button';
import CommonSmallText from '../../../common-components/common-small-text';
import { en } from '../../../local/locales/en';
import { ru } from '../../../local/locales/ru';
import cn from './style.module.sass';

interface IScroll {
  children: any;
}

const Reveal: FC<IScroll> = ({ children }) => (
  <ScrollAnimation
    animateIn="fadeIn"
    animateOut="fadeOut"
    duration={1}
    // offset={400}
  >
    {children}
  </ScrollAnimation>
);

const Promo = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <section className={clsx(cn.promo, 'bg-black-100')}>
      <div className="container mx-auto px-4 lg:flex lg:align-top lg:justify-between">
        <div className={clsx(cn.promo__block_left, 'animate__rubberBand')}>
          <h2 className="font-bold font-gilroy text-white text-32px leading-36px md:text-50px md:leading-54px">
            {t.promoTitle}
          </h2>
          <CommonSmallText properties="md:mt-8 mt-6">{t.promoText}</CommonSmallText>
          <Button properties="mt-40px w-full md:w-fit">{t.registrationBtn}</Button>
        </div>
        <div className={clsx(cn.promo__block_right, 'animate__rubberBand')}>
          <img src="/img/promo/promo.png" alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Promo;
