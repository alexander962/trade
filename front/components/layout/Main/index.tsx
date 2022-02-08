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

interface Props {
  user: string;
}

const Main: FC<Props> = ({ user }) => (
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
