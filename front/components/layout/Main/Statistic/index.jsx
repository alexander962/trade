import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import CommonSmallText from '../../../common-components/common-small-text';
import { en } from '../../../../locales/en';
import { ru } from '../../../../locales/ru';
import cn from './style.module.sass';

const Statistic = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <div className={clsx(cn.statistic, 'bg-black-300 md:py-80px py-64px')}>
      <div className="container mx-auto px-74px lg:flex lg:align-top lg:justify-between">
        <ScrollAnimation
          animateIn="slideInLeft"
          offset={100}
          animateOnce={true}
          delay={5}
          duration={1.5}
          className="flex flex-col items-center"
        >
          <span className="font-gilroy font-bold text-white md:text-64px text-56px leading-100%">
            500K+
          </span>
          <CommonSmallText properties="mt-6">{t.statisticUsers}</CommonSmallText>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="slideInLeft"
          offset={100}
          animateOnce={true}
          delay={5}
          duration={1.5}
          className="flex flex-col items-center lg:mt-0 mt-64px"
        >
          <span className="font-gilroy font-bold text-white md:text-64px text-56px leading-100%">
            400+
          </span>
          <CommonSmallText properties="mt-6">{t.statisticTrading}</CommonSmallText>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="slideInLeft"
          offset={100}
          animateOnce={true}
          delay={5}
          duration={1.5}
          className="flex flex-col items-center lg:mt-0 mt-64px"
        >
          <span className="font-gilroy font-bold text-white md:text-64px text-56px leading-100%">
            190
          </span>
          <CommonSmallText properties="mt-6">{t.statisticCountries}</CommonSmallText>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="slideInLeft"
          offset={100}
          animateOnce={true}
          delay={5}
          duration={1.5}
          className="flex flex-col items-center lg:mt-0 mt-64px"
        >
          <span className="font-gilroy font-bold text-white md:text-64px text-56px leading-100%">
            10
          </span>
          <CommonSmallText properties="mt-6">{t.statisticSecurity}</CommonSmallText>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Statistic;
