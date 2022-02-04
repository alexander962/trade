import clsx from 'clsx';
import React, { FC, useLayoutEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from 'react-slick';

import Button from '../../../Button';
import CommonSmallText from '../../../common-components/common-small-text';
import CommonTitle from '../../../common-components/common-title';
import cn from './style.module.sass';

interface IScroll {
  children: any;
}

const useWindowSize = () => {
  React.useLayoutEffect = React.useEffect;
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
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

const Tools = () => {
  const [width, height] = useWindowSize();

  const settings = {
    dots: true,
    dotsClass: 'slick-dots',
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={clsx(cn.tools, 'bg-black-100 pt-56px relative')}>
      <div className="container mx-auto px-4">
        <CommonTitle properties="text-center" color="text-white">
          Все необходимые инструменты в одном месте
        </CommonTitle>
        <CommonSmallText properties="text-center mt-6">
          Мы создали для тебя удобную платформу с быстрой регистрацией и понятным интерфейсом
        </CommonSmallText>

        {width > 1024 ? (
          <div className={clsx(cn.tools__main, 'flex justify-between')}>
            <div className={clsx(cn.tools__block_external)}>
              <div className={clsx(cn.tools__block_inner, 'text-center')}>
                <CommonSmallText color="text-white" properties="mb-36px">
                  6 видов ордеров <br /> и множество индикаторов
                </CommonSmallText>
                <div className={clsx(cn.tools__block_img)}>
                  <img src="/img/tools/tools-img-1.png" alt="img" />
                </div>
              </div>
            </div>

            <div className={clsx(cn.tools__block_external)}>
              <div className={clsx(cn.tools__block_inner, 'text-center')}>
                <CommonSmallText color="text-white" properties="mb-36px">
                  Всегда актуальные <br /> курсы
                </CommonSmallText>
                <div className={clsx(cn.tools__block_img)}>
                  <img src="/img/tools/tools-img-2.png" alt="img" />
                </div>
              </div>
            </div>

            <div className={clsx(cn.tools__block_external)}>
              <div className={clsx(cn.tools__block_inner, 'text-center')}>
                <CommonSmallText color="text-white" properties="mb-36px">
                  Разделение на основной <br /> и торговый балансы
                </CommonSmallText>
                <div className={clsx(cn.tools__block_img)}>
                  <img src="/img/tools/tools-img-3.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Slider {...settings} className="md:mt-102px mt-40px">
            <div className={clsx(cn.tools__block_external)}>
              <div className={clsx(cn.tools__block_inner, 'text-center')}>
                <CommonSmallText color="text-white" properties="mb-36px">
                  6 видов ордеров <br /> и множество индикаторов
                </CommonSmallText>
                <div className={clsx(cn.tools__block_img)}>
                  <img src="/img/tools/tools-img-1.png" alt="img" />
                </div>
              </div>
            </div>

            <div className={clsx(cn.tools__block_external)}>
              <div className={clsx(cn.tools__block_inner, 'text-center')}>
                <CommonSmallText color="text-white" properties="mb-36px">
                  Всегда актуальные <br /> курсы
                </CommonSmallText>
                <div className={clsx(cn.tools__block_img)}>
                  <img src="/img/tools/tools-img-2.png" alt="img" />
                </div>
              </div>
            </div>

            <div className={clsx(cn.tools__block_external)}>
              <div className={clsx(cn.tools__block_inner, 'text-center')}>
                <CommonSmallText color="text-white" properties="mb-36px">
                  Разделение на основной <br /> и торговый балансы
                </CommonSmallText>
                <div className={clsx(cn.tools__block_img)}>
                  <img src="/img/tools/tools-img-3.png" alt="img" />
                </div>
              </div>
            </div>
          </Slider>
        )}

        <div className={clsx(cn.tools__block_shadow)}>
          <Button properties="md:mt-220px">Зарегистрироваться</Button>
        </div>
      </div>
    </section>
  );
};

export default Tools;