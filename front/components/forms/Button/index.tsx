import clsx from 'clsx';
import React, { FC } from 'react';
import Link from 'next/link';

import cn from './style.module.sass';

interface ISmallTextProps {
  children: string;
  properties: string;
}

const MainButton: FC<ISmallTextProps> = ({ children = '', properties = '' }) => {
  return (
    <Link href="/registration">
      <button
        type="button"
        className={clsx(
          cn.btn_main,
          `text-black-200 text-14px font-inter font-4 bg-yellow rounded-xl ${properties}`
        )}
      >
        {children}
      </button>
    </Link>
  );
};

export default MainButton;
