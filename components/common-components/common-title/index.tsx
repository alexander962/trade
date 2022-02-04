import clsx from 'clsx';
import React, { FC } from 'react';

import cn from './style.module.sass';

interface ISmallTextProps {
  children: string;
  properties: string;
  color?: string;
}

const CommonTitle: FC<ISmallTextProps> = ({
  children = '',
  properties = '',
  color = 'text-black-200',
}) => (
  <div className={clsx(cn.title, `${color} text-42px font-gilroy + ${properties}`)}>{children}</div>
);

export default CommonTitle;
