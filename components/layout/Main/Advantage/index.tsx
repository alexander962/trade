import clsx from 'clsx';
import React, { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import CommonSmallText from '../../../common-components/common-small-text';
import CommonTitle from '../../../common-components/common-title';
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

const Advantage = () => (
  <section className={(clsx(cn.advantage), 'pb-128px')}>
    <div className="container mx-auto px-4">
      <CommonTitle properties="text-center">Почему именно WhiteBIT?</CommonTitle>

      <div className={(clsx(cn.advantage__main), 'flex flex-wrap md:mt-64px mt-8')}>
        <div className={clsx(cn.advantage__block_external)}>
          <div className={clsx(cn.advantage__block_inner, 'text-center')}>
            <div className={clsx(cn.advantage__block_img)}>
              <img src="/img/advantage/advantage-img-1.png" alt="img" />
            </div>
            <CommonSmallText color="text-black-300 mt-38px">
              Техподдержка, которая поможет с любым вопросом 24/7
            </CommonSmallText>
            {/* <div>Техподдержка, которая поможет с любым вопросом 24/7</div> */}
          </div>
        </div>

        <div className={clsx(cn.advantage__block_external)}>
          <div className={clsx(cn.advantage__block_inner, 'text-center')}>
            <div className={clsx(cn.advantage__block_img)}>
              <img src="/img/advantage/advantage-img-2.png" alt="img" />
            </div>
            <CommonSmallText color="text-black-300 mt-38px">
              Пассивный заработок до 30% годовых в USDT
            </CommonSmallText>
            {/* <div>Пассивный заработок до 30% годовых в USDT</div> */}
          </div>
        </div>

        <div className={clsx(cn.advantage__block_external)}>
          <div className={clsx(cn.advantage__block_inner, 'text-center')}>
            <div className={clsx(cn.advantage__block_img)}>
              <img src="/img/advantage/advantage-img-3.png" alt="img" />
            </div>
            <CommonSmallText color="text-black-300 mt-38px">
              Безопасность, подтвержденная пользователями и рейтингом Cer.live
            </CommonSmallText>
            {/* <div>Безопасность, подтвержденная пользователями и рейтингом Cer.live</div> */}
          </div>
        </div>

        <div className={clsx(cn.advantage__block_external)}>
          <div className={clsx(cn.advantage__block_inner, 'text-center')}>
            <div className={clsx(cn.advantage__block_img)}>
              <img src="/img/advantage/advantage-img-4.png" alt="img" />
            </div>
            <CommonSmallText color="text-black-300 mt-38px">
              Торговая комиссия всего 0,1%
            </CommonSmallText>
            {/* <div>Торговая комиссия всего 0,1%</div> */}
          </div>
        </div>

        <div className={clsx(cn.advantage__block_external)}>
          <div className={clsx(cn.advantage__block_inner, 'text-center')}>
            <div className={clsx(cn.advantage__block_img)}>
              <img src="/img/advantage/advantage-img-5.png" alt="img" />
            </div>
            <CommonSmallText color="text-black-300 mt-38px">
              Реферальная программа с процентами за друзей
            </CommonSmallText>
            {/* <div>Реферальная программа с процентами за друзей</div> */}
          </div>
        </div>

        <div className={clsx(cn.advantage__block_external)}>
          <div className={clsx(cn.advantage__block_inner, 'text-center')}>
            <div className={clsx(cn.advantage__block_img)}>
              <img src="/img/advantage/advantage-img-6.png" alt="img" />
            </div>
            <CommonSmallText color="text-black-300 mt-38px">
              Бесплатные Демо токены для изучения торговли
            </CommonSmallText>
            {/* <div>Бесплатные Демо токены для изучения торговли</div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Advantage;
