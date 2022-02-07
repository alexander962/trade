import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import CommonSmallText from '../../../common-components/common-small-text';
import CommonTitle from '../../../common-components/common-title';
import { en } from '../../../local/locales/en';
import { ru } from '../../../local/locales/ru';
import cn from './style.module.sass';

interface IScroll {
  children: any;
}

type obj = {
  id: number;
  title: string;
  date: string;
};

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

const Assets = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <section className={clsx(cn.assets, 'md:pt-72px md:pb-112px pt-56px pb-80px')}>
      <div className="container mx-auto px-4">
        <CommonTitle properties="text-center">{t.assetsTitle}</CommonTitle>
        <CommonSmallText properties="mt-24px text-center">{t.assetsSubTitle}</CommonSmallText>

        <div className={clsx(cn.assets__blocks)}>
          {obj.map(({ id, icon, text }, index) => (
            <div key={`assets+${id}`} className={clsx(cn.assets__block_external)}>
              <div className={clsx(cn.assets__block_inner)}>
                <img src={icon} alt="icon" className="mr-20px" />
                <span>{text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assets;

const obj = [
  {
    id: 1,
    icon: '/img/assets/assets-img-2.svg',
    text: 'Bitcoin',
  },
  {
    id: 2,
    icon: '/img/assets/assets-img-3.svg',
    text: 'Etherum',
  },
  {
    id: 3,
    icon: '/img/assets/assets-img-4.svg',
    text: 'Tether',
  },
  {
    id: 4,
    icon: '/img/assets/assets-img-5.svg',
    text: 'Doge',
  },
  {
    id: 7,
    icon: '/img/assets/assets-img-8.svg',
    text: 'Ripple',
  },
  {
    id: 8,
    icon: '/img/assets/assets-img-9.svg',
    text: 'Dash',
  },
  {
    id: 9,
    icon: '/img/assets/assets-img-10.svg',
    text: 'Litecoin',
  },
  {
    id: 10,
    icon: '/img/assets/assets-img-11.svg',
    text: 'Stellar',
  },
];
