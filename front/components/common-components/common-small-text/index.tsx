import clsx from 'clsx';
import React, { FC } from 'react';

import cn from './style.module.sass';

interface ISmallTextProps {
  children: any;
  properties?: string;
  color?: string;
}

const CommonSmallText: FC<ISmallTextProps> = ({
  children = '',
  properties = '',
  color = 'text-gray-100',
}) => (
  <div className={clsx(cn.small_text, `${color} text-base font-inter ${properties}`)}>
    {children}
  </div>
);

export default CommonSmallText;
