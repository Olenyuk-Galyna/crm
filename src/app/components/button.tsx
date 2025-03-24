'use client';

import clsx from 'clsx';
import React from 'react';

export interface ButtonProps
  extends Partial<React.ReactHTMLElement<HTMLButtonElement>> {
  disabled?: boolean;
}

export default function Button({ disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'ry-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-crnter font-medium rounded',
        !disabled && 'hover:bg-gray-800 activ:bg-gray-950',
        disabled && 'text-zinc-100',
      )}
    />
  );
}
