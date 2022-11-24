import React from 'react';
import styles from './Button.module.scss'

const Button = ({title, style, ...props}) => {
  return (
    <div>
      <button {...props} style={style} className={styles['button']}>{title}</button>
    </div>
  );
};

export default Button;