import clsx from 'clsx';
import React from 'react';

import cn from '../../../styles/Home.module.css';
import Advantage from './Advantage';
import Assets from './Assets';
import Feedback from './Feedback';
import Promo from './Promo';
import Statistic from './Statistic';
import Tools from './Tools';

const Main = () => (
  <section className={clsx(cn.main)}>
    <Promo />
    <Statistic />
    <Assets />
    <Advantage />
    <Tools />
    <Feedback />
  </section>
);

export default Main;
