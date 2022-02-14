import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';
import Slider from 'react-slick';

import Button from '../../../Button';
import CommonSmallText from '../../../common-components/common-small-text';
import CommonTitle from '../../../common-components/common-title';
import { en } from '../../../../locales/en';
import { ru } from '../../../../locales/ru';
import cn from './style.module.sass';
import { useWindowSize } from '../../../../hooks/useWindowSize';
import AOS from 'aos';
import 'aos/dist/aos.css';

/* const Reveal = ({ children }) => (
  <ScrollAnimation
    animateIn="fadeIn"
    animateOut="fadeOut"
    duration={1}
    // offset={400}
  >
    {children}
  </ScrollAnimation>
); */

const Tools = ({ user }) => {
  const [width, height] = useWindowSize();

  const settings = {
    dots: true,
    dotsClass: 'slick-dots tools-slick-dots',
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    AOS.init({
      // duration : 5000
    });
  }, []);

  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <section className={clsx(cn.tools, 'bg-black-100 pt-56px relative')}>
      <div className="container mx-auto px-4">
        <ScrollAnimation
          animateIn="fadeIn"
          offset={100}
          animateOnce={true}
          delay={200}
          duration={1.5}
        >
          <CommonTitle properties="text-center" color="text-white">
            {t.toolsTitle}
          </CommonTitle>
          <CommonSmallText properties="text-center mt-6">{t.toolsSubTitle}</CommonSmallText>
        </ScrollAnimation>

        {width > 1024 ? (
          <div className={clsx(cn.tools__main, 'flex justify-between')}>
            <ScrollAnimation
              animateIn="flip"
              offset={100}
              animateOnce={true}
              delay={5}
              duration={1.5}
              className={clsx(cn.tools__block_external)}
            >
              <div className={clsx(cn.tools__block_inner, 'text-center')}>
                <CommonSmallText color="text-white" properties="mb-36px">
                  {t.toolsText1}
                </CommonSmallText>
                <div className={clsx(cn.tools__block_img)}>
                  <img src="/img/tools/tools-img-1.png" alt="img" />
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="flip"
              offset={100}
              animateOnce={true}
              delay={5}
              duration={1.5}
              className={clsx(cn.tools__block_external)}
            >
              <div className={clsx(cn.tools__block_inner, 'text-center')}>
                <CommonSmallText color="text-white" properties="mb-36px">
                  {t.toolsText2}
                </CommonSmallText>
                <div className={clsx(cn.tools__block_img)}>
                  <img src="/img/tools/tools-img-2.png" alt="img" />
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="flip"
              offset={100}
              animateOnce={true}
              delay={5}
              duration={1.5}
              className={clsx(cn.tools__block_external)}
            >
              <div className={clsx(cn.tools__block_inner, 'text-center')}>
                <CommonSmallText color="text-white" properties="mb-36px">
                  {t.toolsText3}
                </CommonSmallText>
                <div className={clsx(cn.tools__block_img)}>
                  <img src="/img/tools/tools-img-3.png" alt="img" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        ) : (
          <Slider {...settings} className="md:mt-102px mt-40px">
            <ScrollAnimation
              animateIn="flip"
              offset={100}
              animateOnce={true}
              delay={5}
              duration={1.5}
              className={clsx(cn.tools__block_external)}
            >
              <div className={clsx(cn.tools__block_inner, 'text-center')}>
                <CommonSmallText color="text-white" properties="mb-36px">
                  {t.toolsText1}
                </CommonSmallText>
                <div className={clsx(cn.tools__block_img)}>
                  <img src="/img/tools/tools-img-1.png" alt="img" />
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="flip"
              offset={100}
              animateOnce={true}
              delay={5}
              duration={1.5}
              className={clsx(cn.tools__block_external)}
            >
              <div className={clsx(cn.tools__block_inner, 'text-center')}>
                <CommonSmallText color="text-white" properties="mb-36px">
                  {t.toolsText2}
                </CommonSmallText>
                <div className={clsx(cn.tools__block_img)}>
                  <img src="/img/tools/tools-img-2.png" alt="img" />
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="flip"
              offset={100}
              animateOnce={true}
              delay={5}
              duration={1.5}
              className={clsx(cn.tools__block_external)}
            >
              <div className={clsx(cn.tools__block_inner, 'text-center')}>
                <CommonSmallText color="text-white" properties="mb-36px">
                  {t.toolsText3}
                </CommonSmallText>
                <div className={clsx(cn.tools__block_img)}>
                  <img src="/img/tools/tools-img-3.png" alt="img" />
                </div>
              </div>
            </ScrollAnimation>
          </Slider>
        )}

        <div className={clsx(cn.tools__block_shadow)}>
          {!user && <Button properties="md:mt-220px">{t.toolsButton}</Button>}
        </div>
      </div>
    </section>
  );
};

export default Tools;
