import React from 'react';
import styles from './Container.module.scss'
const Container = ({children,className = [], ...props}) => {
  return (
    <div className={[...className, styles['container']].join(' ')}>
      {
        children
      }
    </div>
  );
};

export default Container;