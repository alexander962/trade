import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Button from '../../../forms/Button';
import CommonSmallText from '../../../common-components/common-small-text';
import { en } from '../../../../locales/en';
import { ru } from '../../../../locales/ru';
import cn from './style.module.sass';
import { Context } from '../../../../pages/_app';
import { observer } from 'mobx-react-lite';

const Promo = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;
  const { store } = useContext(Context);

  return (
    <section className={clsx(cn.promo, 'bg-black-100')}>
      <div className="container mx-auto px-4 lg:flex lg:align-top lg:justify-between">
        <div className={clsx(cn.promo__block_left)}>
          <h2 className="font-bold font-gilroy text-white text-32px leading-36px md:text-50px md:leading-54px">
            <ScrollAnimation
              delay={0}
              animateIn="fadeInUp"
              offset={0}
              animateOnce={true}
              duration={1}
            >
              {t.promoTitle}
            </ScrollAnimation>
          </h2>
          <CommonSmallText properties="md:mt-8 mt-6">
            <ScrollAnimation
              delay={0}
              animateIn="fadeInUp"
              offset={0}
              animateOnce={true}
              duration={1}
            >
              {t.promoText}
            </ScrollAnimation>
          </CommonSmallText>
          {!store.isAuth && (
            <Button properties="mt-40px w-full md:w-fit">
              <ScrollAnimation
                delay={0}
                animateIn="fadeInUp"
                offset={0}
                animateOnce={true}
                duration={1}
              >
                {t.registrationBtn}
              </ScrollAnimation>
            </Button>
          )}
        </div>

        <div className={clsx(cn.promo__block_right)}>
          <ScrollAnimation
            delay={0}
            animateIn="heartBeat"
            offset={0}
            animateOnce={true}
            duration={1}
          >
            <img src="/img/promo/promo.png" alt="" />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default observer(Promo);
