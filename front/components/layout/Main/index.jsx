import clsx from 'clsx';
import React, { FC } from 'react';

import cn from '../../../styles/Home.module.css';
import Advantage from './Advantage';
import Assets from './Assets';
import Feedback from './Feedback';
import Promo from './Promo';
import Statistic from './Statistic';
import Tools from './Tools';
import Start from './Start';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.compat.css';

const Main = ({ user }) => (
  <section className={clsx(cn.main)}>
    <Promo user={user} />
    <Statistic />
    <Assets />
    <Advantage />
    <Tools user={user} />
    <Feedback />
    <Start user={user} />
  </section>
);

export default Main;
