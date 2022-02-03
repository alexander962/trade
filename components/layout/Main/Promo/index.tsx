import clsx from 'clsx';
import React, { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Button from '../../../Button';
import CommonSmallText from '../../../common-components/common-small-text';
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

const Promo = () => (
  <section className={clsx(cn.promo, 'bg-black-100')}>
    <Reveal>
      <div className="container mx-auto px-4 lg:flex lg:align-top lg:justify-between">
        <div className={clsx(cn.promo__block_left, '')}>
          <Reveal>
            <h2 className="font-bold font-gilroy text-white text-32px leading-36px md:text-50px md:leading-54px">
              WhiteBIT: Торгуй криптовалютой где угодно и когда угодно
            </h2>
          </Reveal>
          <CommonSmallText properties="md:mt-8 mt-6">
            Пользуйся всеми преимуществами нашей лицензионной биржи на сайте или через приложение
          </CommonSmallText>
          <Button properties="mt-40px w-full md:w-fit">Зарегистрироваться</Button>
        </div>
        <div className={clsx(cn.promo__block_right, '')}>
          <img src="/img/promo/promo.png" alt="img" />
        </div>
      </div>
    </Reveal>
  </section>
);

export default Promo;
