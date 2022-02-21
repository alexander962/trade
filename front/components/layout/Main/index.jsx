import clsx from 'clsx';
import React from 'react';

import cn from '../../../styles/Home.module.css';
import Advantage from './Advantage';
import Assets from './Assets';
import Feedback from './Feedback';
import Promo from './Promo';
import Statistic from './Statistic';
import Tools from './Tools';
import Start from './Start';

const Main = () => (
  <div className={clsx(cn.main)}>
    <Promo />
    <Statistic />
    <Assets />
    <Advantage />
    <Tools />
    <Feedback />
    <Start />
  </div>
);

export default Main;
