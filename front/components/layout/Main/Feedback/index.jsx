import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';
import Slider from 'react-slick';
import { useWindowSize } from '../../../../hooks/useWindowSize';

import CommonSmallText from '../../../common-components/common-small-text';
import CommonTitle from '../../../common-components/common-title';
import { en } from '../../../../locales/en';
import { ru } from '../../../../locales/ru';
import cn from './style.module.sass';
import ScrollAnimation from 'react-animate-on-scroll';

const Feedback = () => {
  const [width, height] = useWindowSize();

  const settings = {
    dots: true,
    dotsClass: 'slick-dots feedback-slick-dots',
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <section className={clsx(cn.feedback, 'md:pt-72px md:pb-64px pt-56px pb-64px')}>
      <div className="container mx-auto px-4">
        <ScrollAnimation
          animateIn="fadeIn"
          offset={100}
          animateOnce={true}
          delay={200}
          duration={1.5}
        >
          <CommonTitle properties="text-center">{t.feedbackTitle}</CommonTitle>
        </ScrollAnimation>
        {width > 1024 ? (
          <div className={clsx(cn.feedback__blocks)}>
            {obj.map(({ id, date, header, text }, index) => (
              <ScrollAnimation
                animateIn="flipInY"
                offset={100}
                animateOnce={true}
                delay={5}
                duration={1.5}
                className={clsx(cn.feedback__block_external)}
                key={`assets+${id}`}
              >
                <div className={clsx(cn.feedback__block_inner)}>
                  <img src="/img/feedback/feedback-icon.svg" alt="" className="mr-20px" />
                  <div className="font-inter text-15px text-gray-200 leading-21px mt-14px">
                    {date}
                  </div>
                  <CommonSmallText color="text-black-400" properties="mt-19px">
                    {header}
                  </CommonSmallText>
                  <CommonSmallText properties="mt-1">{text}</CommonSmallText>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        ) : (
          <Slider {...settings} className={clsx(cn.feedback__blocks)}>
            {obj.map(({ id, date, header, text }, index) => (
              <div key={`assets+${id}`} className={clsx(cn.feedback__block_external)}>
                <div className={clsx(cn.feedback__block_inner)}>
                  <img src="/img/feedback/feedback-icon.svg" alt="" className="mr-20px" />
                  <div className="font-inter text-15px text-gray-200 leading-21px mt-14px">
                    {date}
                  </div>
                  <CommonSmallText color="text-black-400" properties="mt-19px">
                    {header}
                  </CommonSmallText>
                  <CommonSmallText properties="mt-1">{text}</CommonSmallText>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Feedback;

const obj = [
  {
    id: 0,
    date: '02.02.2021',
    header: 'Александр Мелнис',
    text: 'Отличное приложение, удобный интерфейс, мне дня хватило чтобы разобраться. 👍',
  },
  {
    id: 1,
    date: '13.02.2021',
    header: 'Вася Санько',
    text: 'Если разобраться, приложение довольно таки крутое. Буквально сегодня верифицировали, а я уже немного в прибыли!??!',
  },
  {
    id: 2,
    date: '03.02.2021',
    header: 'Александр Шаплыко',
    text: 'Хорошая, простая платформа. Главный плюс - доступно любому, даже ребенку. просто вводить деньги, выводить пока не пробовал. есть большой выбор инструментов, можно',
  },
  {
    id: 3,
    date: '04.02.2021',
    header: 'Алексей Шлык',
    text: 'Удобное приложение для совершения сделок и просмотра графиков. Быстро и удобно помогает ввести/вывести средства на другие финансовые сервисы.',
  },
  {
    id: 4,
    date: '21.02.2021',
    header: 'Olga',
    text: 'Хороший и оперативный сервис. Удобный интерфейс.',
  },
  {
    id: 5,
    date: '12.01.2021',
    header: 'melanholidi',
    text: 'Протрите мне глаза, если есть недочёты в приложении. Все ок.',
  },
];
