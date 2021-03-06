import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Button from '../../../forms/Button';
import CommonTitle from '../../../common-components/common-title';
import { en } from '../../../../locales/en';
import { ru } from '../../../../locales/ru';
import cn from './style.module.sass';
import { Context } from '../../../../pages/_app';
import { observer } from 'mobx-react-lite';

const Start = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;
  const { store } = useContext(Context);

  return (
    <section
      className={clsx(cn.start, 'bg-black-300 md:pt-72px md:pb-56px pt-56px pb-64px text-center')}
    >
      <ScrollAnimation
        animateIn="fadeIn"
        offset={100}
        animateOnce={true}
        delay={200}
        duration={1.5}
      >
        <CommonTitle color="text-white" properties="text-center">
          {t.startTitle}
        </CommonTitle>
      </ScrollAnimation>
      <div className="container mx-auto px-4">
        <div
          className={clsx(
            cn.start__main,
            'flex lg:align-top lg:justify-between lg:flex-row flex-col'
          )}
        >
          <ScrollAnimation
            animateIn="zoomIn"
            offset={100}
            animateOnce={true}
            delay={5}
            duration={1.5}
            className={clsx(cn.start__block_external)}
          >
            <div className={clsx(cn.start__block_inner, 'mb-34px text-center')}>
              <div className="mb-34px">
                <img src="/img/start/start-img-1.png" alt="" className="max-w-97px h-101px" />
              </div>
              <div className="font-inter text-22px leading-30px text-white">{t.startText1}</div>
            </div>
          </ScrollAnimation>

          <div className={clsx(cn.start__img_external)}>
            <div className={clsx(cn.start__img_inner)}>
              <img src="/img/start/start-img-4.svg" alt="" />
            </div>
          </div>

          <ScrollAnimation
            animateIn="zoomIn"
            offset={100}
            animateOnce={true}
            delay={150}
            duration={1.5}
            className={clsx(cn.start__block_external)}
          >
            <div className={clsx(cn.start__block_inner, 'mb-34px text-center')}>
              <div className="mb-34px">
                <img src="/img/start/start-img-2.png" alt="" className="max-w-97px h-101px" />
              </div>
              <div className="font-inter text-22px leading-30px text-white">{t.startText2}</div>
            </div>
          </ScrollAnimation>

          <div className={clsx(cn.start__img_external)}>
            <div className={clsx(cn.start__img_inner)}>
              <img src="/img/start/start-img-4.svg" alt="" />
            </div>
          </div>

          <ScrollAnimation
            animateIn="zoomIn"
            offset={100}
            animateOnce={true}
            delay={300}
            duration={1.5}
            className={clsx(cn.start__block_external)}
          >
            <div className={clsx(cn.start__block_inner, 'text-center')}>
              <div className="mb-34px">
                <img src="/img/start/start-img-3.png" alt="" className="h-101px" />
              </div>
              <div className="font-inter text-22px leading-30px text-white">{t.startText3}</div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {!store.isAuth && <Button properties="text-center mx-auto">{t.startButton}</Button>}
    </section>
  );
};

export default observer(Start);
