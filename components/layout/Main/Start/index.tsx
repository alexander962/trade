import clsx from 'clsx';
import React, { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Button from '../../../Button';
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

const Start = () => (
  <section
    className={clsx(cn.start, 'bg-black-300 md:pt-72px md:pb-56px pt-56px pb-64px text-center')}
  >
    <CommonTitle color="text-white" properties="text-center">
      Легко начать
    </CommonTitle>
    <div className="container mx-auto px-4">
      <div
        className={clsx(
          cn.start__main,
          'flex lg:align-top lg:justify-between lg:flex-row flex-col'
        )}
      >
        <div className={clsx(cn.start__block_external)}>
          <div className={clsx(cn.start__block_inner, 'mb-34px text-center')}>
            <div className="mb-34px">
              <img
                src="/img/start/start-img-1.png"
                alt="Start-img"
                className="max-w-97px h-101px"
              />
            </div>
            <div className="font-inter text-22px leading-30px text-white">Зарегистрируйся</div>
          </div>
        </div>

        <div className={clsx(cn.start__img_external)}>
          <div className={clsx(cn.start__img_inner)}>
            <img src="/img/start/start-img-4.svg" alt="Start-img" />
          </div>
        </div>

        <div className={clsx(cn.start__block_external)}>
          <div className={clsx(cn.start__block_inner, 'mb-34px text-center')}>
            <div className="mb-34px">
              <img
                src="/img/start/start-img-2.png"
                alt="Start-img"
                className="max-w-97px h-101px"
              />
            </div>
            <div className="font-inter text-22px leading-30px text-white">Сделай депозит</div>
          </div>
        </div>

        <div className={clsx(cn.start__img_external)}>
          <div className={clsx(cn.start__img_inner)}>
            <img src="/img/start/start-img-4.svg" alt="Start-img" />
          </div>
        </div>

        <div className={clsx(cn.start__block_external)}>
          <div className={clsx(cn.start__block_inner, 'text-center')}>
            <div className="mb-34px">
              <img
                src="/img/start/start-img-3.png"
                alt="Start-img"
                className="max-w-97px h-101px"
              />
            </div>
            <div className="font-inter text-22px leading-30px text-white">
              Начни торговать и инвестировать
            </div>
          </div>
        </div>
      </div>
    </div>
    <Button properties="text-center mx-auto">Создать аккаунт</Button>
  </section>
);

export default Start;