import clsx from 'clsx';
import React from 'react';

import cn from '../../../styles/Home.module.css';

const Main = () => (
  <section className={clsx(cn.main)}>
    <div className="container mx-auto px-4 font-inter"> Это у нас Main </div>
  </section>
);

export default Main;
