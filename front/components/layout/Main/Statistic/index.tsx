import 'animate.css/animate.min.css';

import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import CommonSmallText from '../../../common-components/common-small-text';
import { en } from '../../../local/locales/en';
import { ru } from '../../../local/locales/ru';
import cn from './style.module.sass';

interface IScroll {
  children: any;
}

const Reveal: FC<IScroll> = ({ children }) => (
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={100} delay={100} duration={1}>
    {children}
  </ScrollAnimation>
);

const Statistic = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <section className={clsx(cn.statistic, 'bg-black-300 md:py-80px py-64px')}>
      <div className="container mx-auto px-74px lg:flex lg:align-top lg:justify-between">
        <div className="flex flex-col items-center">
          <span className="font-gilroy font-bold text-white md:text-64px text-56px leading-36px">
            500K+
          </span>
          <CommonSmallText properties="mt-6">{t.statisticUsers}</CommonSmallText>
        </div>
        <div className="flex flex-col items-center lg:mt-0 mt-64px">
          <span className="font-gilroy font-bold text-white md:text-64px text-56px leading-36px">
            400+
          </span>
          <CommonSmallText properties="mt-6">{t.statisticTrading}</CommonSmallText>
        </div>
        <div className="flex flex-col items-center lg:mt-0 mt-64px">
          <span className="font-gilroy font-bold text-white md:text-64px text-56px leading-36px">
            190
          </span>
          <CommonSmallText properties="mt-6">{t.statisticCountries}</CommonSmallText>
        </div>
        <div className="flex flex-col items-center lg:mt-0 mt-64px">
          <span className="font-gilroy font-bold text-white md:text-64px text-56px leading-36px">
            10
          </span>
          <CommonSmallText properties="mt-6">{t.statisticSecurity}</CommonSmallText>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
