'use client';

import React from 'react';
import styles from './Button.module.scss';
import { IButtonProps } from './Button.interface';
import cn from 'classnames';

export const Button = ({
  onClick,
  variant = 'square',
  size = 'medium',
  text,
  isLoading,
  styleProps,
}: IButtonProps) => {
  return (
    <button className={styles.addBtn} onClick={onClick} disabled={isLoading}>
      {text}
    </button>
  );
};
