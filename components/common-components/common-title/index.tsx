import clsx from 'clsx';
import React, { FC } from 'react';

import cn from './style.module.sass';

interface ISmallTextProps {
  children: string;
  properties: string;
}

const CommonTitle: FC<ISmallTextProps> = ({ children = '', properties = '' }) => (
  <div className={clsx(cn.title, `text-black-200 text-42px font-gilroy + ${properties}`)}>
    {children}
  </div>
);

export default CommonTitle;
