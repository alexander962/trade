import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import CommonSmallText from '../../../common-components/common-small-text';
import CommonTitle from '../../../common-components/common-title';
import { en } from '../../../local/locales/en';
import { ru } from '../../../local/locales/ru';
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

const Advantage = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <section className={(clsx(cn.advantage), 'pb-128px')}>
      <div className="container mx-auto px-4">
        <CommonTitle properties="text-center">{t.advantageTitle}</CommonTitle>

        <div className={(clsx(cn.advantage__main), 'flex flex-wrap md:mt-64px mt-8')}>
          <div className={clsx(cn.advantage__block_external)}>
            <div className={clsx(cn.advantage__block_inner, 'text-center')}>
              <div className={clsx(cn.advantage__block_img)}>
                <img src="/img/advantage/advantage-img-1.png" alt="img" />
              </div>
              <CommonSmallText color="text-black-300 mt-38px">{t.advantageText1}</CommonSmallText>
            </div>
          </div>

          <div className={clsx(cn.advantage__block_external)}>
            <div className={clsx(cn.advantage__block_inner, 'text-center')}>
              <div className={clsx(cn.advantage__block_img)}>
                <img src="/img/advantage/advantage-img-2.png" alt="img" />
              </div>
              <CommonSmallText color="text-black-300 mt-38px">{t.advantageText2}</CommonSmallText>
            </div>
          </div>

          <div className={clsx(cn.advantage__block_external)}>
            <div className={clsx(cn.advantage__block_inner, 'text-center')}>
              <div className={clsx(cn.advantage__block_img)}>
                <img src="/img/advantage/advantage-img-3.png" alt="img" />
              </div>
              <CommonSmallText color="text-black-300 mt-38px">{t.advantageText3}</CommonSmallText>
            </div>
          </div>

          <div className={clsx(cn.advantage__block_external)}>
            <div className={clsx(cn.advantage__block_inner, 'text-center')}>
              <div className={clsx(cn.advantage__block_img)}>
                <img src="/img/advantage/advantage-img-4.png" alt="img" />
              </div>
              <CommonSmallText color="text-black-300 mt-38px">{t.advantageText4}</CommonSmallText>
            </div>
          </div>

          <div className={clsx(cn.advantage__block_external)}>
            <div className={clsx(cn.advantage__block_inner, 'text-center')}>
              <div className={clsx(cn.advantage__block_img)}>
                <img src="/img/advantage/advantage-img-5.png" alt="img" />
              </div>
              <CommonSmallText color="text-black-300 mt-38px">{t.advantageText5}</CommonSmallText>
            </div>
          </div>

          <div className={clsx(cn.advantage__block_external)}>
            <div className={clsx(cn.advantage__block_inner, 'text-center')}>
              <div className={clsx(cn.advantage__block_img)}>
                <img src="/img/advantage/advantage-img-6.png" alt="img" />
              </div>
              <CommonSmallText color="text-black-300 mt-38px">{t.advantageText6}</CommonSmallText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
