import clsx from 'clsx';
import React, { FC } from 'react';

import cn from './style.module.sass';

interface ISmallTextProps {
  children: string;
  properties: string;
}

const CommonSmallText: FC<ISmallTextProps> = ({ children = '', properties = '' }) => (
  <div className={clsx(cn.small_text, `text-gray-100 text-base font-inter + ${properties}`)}>
    {children}
  </div>
);

export default CommonSmallText;
