import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import CommonSmallText from '../../../common-components/common-small-text';
import CommonTitle from '../../../common-components/common-title';
import { en } from '../../../local/locales/en';
import { ru } from '../../../local/locales/ru';
import cn from './style.module.sass';

/* const Reveal: FC<IScroll> = ({ children }) => (
  <ScrollAnimation
    animateIn="fadeIn"
    animateOut="fadeOut"
    duration={1}
    // offset={400}
  >
    {children}
  </ScrollAnimation>
); */

const Assets = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <section className={clsx(cn.assets, 'md:pt-72px md:pb-112px pt-56px pb-80px')}>
      <div className="container mx-auto px-4">
        <ScrollAnimation
          animateIn="fadeIn"
          offset={100}
          animateOnce={true}
          delay={200}
          duration={1.5}
        >
          <CommonTitle properties="text-center">{t.assetsTitle}</CommonTitle>
          <CommonSmallText properties="mt-24px text-center">{t.assetsSubTitle}</CommonSmallText>
        </ScrollAnimation>

        <div className={clsx(cn.assets__blocks)}>
          {obj.map(({ id, icon, text }, index) => (
            <ScrollAnimation
              animateIn="flipInX"
              offset={100}
              animateOnce={true}
              delay={150}
              duration={1.5}
              className={clsx(cn.assets__block_external)}
              key={`assets+${id}`}
            >
              <div className={clsx(cn.assets__block_inner)}>
                <img src={icon} alt="icon" className="mr-20px" />
                <span>{text}</span>
              </div>
            </ScrollAnimation>
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
