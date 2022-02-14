import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';

import CommonSmallText from '../../../common-components/common-small-text';
import CommonTitle from '../../../common-components/common-title';
import { en } from '../../../../locales/en';
import { ru } from '../../../../locales/ru';
import cn from './style.module.sass';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const Advantage = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <section className={(clsx(cn.advantage), 'pb-128px')}>
      <div className="container mx-auto px-4">
        <ScrollAnimation
          animateIn="fadeIn"
          offset={100}
          animateOnce={true}
          delay={200}
          duration={1.5}
        >
          <CommonTitle properties="text-center">{t.advantageTitle}</CommonTitle>
        </ScrollAnimation>
        <div className={(clsx(cn.advantage__main), 'flex flex-wrap md:mt-64px mt-8')}>
          <ScrollAnimation
            animateIn="slideInUp"
            offset={100}
            animateOnce={true}
            delay={5}
            duration={1.5}
            className={clsx(cn.advantage__block_external)}
          >
            <div className={clsx(cn.advantage__block_inner, 'text-center')}>
              <div className={clsx(cn.advantage__block_img)}>
                <img src="/img/advantage/advantage-img-1.png" alt="img" />
              </div>
              <CommonSmallText color="text-black-300 mt-38px">{t.advantageText1}</CommonSmallText>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="slideInUp"
            offset={100}
            animateOnce={true}
            delay={150}
            duration={1.5}
            className={clsx(cn.advantage__block_external)}
          >
            <div className={clsx(cn.advantage__block_inner, 'text-center')}>
              <div className={clsx(cn.advantage__block_img)}>
                <img src="/img/advantage/advantage-img-2.png" alt="img" />
              </div>
              <CommonSmallText color="text-black-300 mt-38px">{t.advantageText2}</CommonSmallText>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="slideInUp"
            offset={100}
            animateOnce={true}
            delay={300}
            duration={1.5}
            className={clsx(cn.advantage__block_external)}
          >
            <div className={clsx(cn.advantage__block_inner, 'text-center')}>
              <div className={clsx(cn.advantage__block_img)}>
                <img src="/img/advantage/advantage-img-3.png" alt="img" />
              </div>
              <CommonSmallText color="text-black-300 mt-38px">{t.advantageText3}</CommonSmallText>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="slideInUp"
            offset={100}
            animateOnce={true}
            delay={450}
            duration={1.5}
            className={clsx(cn.advantage__block_external)}
          >
            <div className={clsx(cn.advantage__block_inner, 'text-center')}>
              <div className={clsx(cn.advantage__block_img)}>
                <img src="/img/advantage/advantage-img-4.png" alt="img" />
              </div>
              <CommonSmallText color="text-black-300 mt-38px">{t.advantageText4}</CommonSmallText>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="slideInUp"
            offset={100}
            animateOnce={true}
            delay={600}
            duration={1.5}
            className={clsx(cn.advantage__block_external)}
          >
            <div className={clsx(cn.advantage__block_inner, 'text-center')}>
              <div className={clsx(cn.advantage__block_img)}>
                <img src="/img/advantage/advantage-img-5.png" alt="img" />
              </div>
              <CommonSmallText color="text-black-300 mt-38px">{t.advantageText5}</CommonSmallText>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="slideInUp"
            offset={100}
            animateOnce={true}
            delay={750}
            duration={1.5}
            className={clsx(cn.advantage__block_external)}
          >
            <div className={clsx(cn.advantage__block_inner, 'text-center')}>
              <div className={clsx(cn.advantage__block_img)}>
                <img src="/img/advantage/advantage-img-6.png" alt="img" />
              </div>
              <CommonSmallText color="text-black-300 mt-38px">{t.advantageText6}</CommonSmallText>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
