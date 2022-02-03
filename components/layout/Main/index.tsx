import clsx from 'clsx';
import React from 'react';

import cn from '../../../styles/Home.module.css';
import Assets from './assets';
import Promo from './Promo';
import Statistic from './Statistic';

const Main = () => (
  <section className={clsx(cn.main)}>
    <Promo />
    <Statistic />
    <Assets />
  </section>
);

export default Main;
