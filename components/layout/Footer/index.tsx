import clsx from 'clsx';
import React from 'react';

import cn from '../../../styles/Home.module.css';

const Footer = () => (
  <footer className={clsx(cn.footer, 'outline outline-offset-1 outline-gray-100')}>
    <div className="container mx-auto px-4 font-inter"> Это у нас footer </div>
  </footer>
);

export default Footer;
