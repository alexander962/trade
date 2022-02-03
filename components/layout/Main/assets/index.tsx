import clsx from 'clsx';
import React, { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import CommonSmallText from '../../../common-components/common-small-text';
import CommonTitle from '../../../common-components/common-title';
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

const Assets = () => (
  <section className={clsx(cn.assets, 'md:pt-72px md:pb-112px')}>
    <CommonTitle properties="text-center">Огромный выбор</CommonTitle>
    <CommonSmallText properties="mt-24px text-center">
      От хорошо известных активов до новинок индустрии — тебе решать чем торговать!
    </CommonSmallText>

    <div className={clsx(cn.assets__blocks, 'flex flex-wrap')}>
      {obj.map(({ id, icon, text }, index) => (
        <div key={`assets+${id}`} className={clsx(cn.assets__block_out, 'px-4')}>
          <div className={clsx(cn.assets__block, 'flex items-center w-full w-288px')}>
            <img src={icon} alt="icon" className="mr-20px" />
            <span>{text}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Assets;

const obj = [
  {
    id: 0,
    icon: '/img/assets/assets-img-1.svg',
    text: 'NEO',
  },
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
    id: 5,
    icon: '/img/assets/assets-img-6.svg',
    text: 'Text',
  },
  {
    id: 6,
    icon: '/img/assets/assets-img-7.svg',
    text: 'Link',
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
  {
    id: 11,
    icon: '/img/assets/assets-img-12.svg',
    text: 'Tron',
  },
];
