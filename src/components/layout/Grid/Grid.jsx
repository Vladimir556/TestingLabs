import React from 'react';
import styles from './Grid.module.scss'

const Grid = ({children, style, ...props}) => {
  return (
    <div className={styles['grid']} style={style}>
      {children}
    </div>
  );
};

export default Grid;