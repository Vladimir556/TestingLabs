import React from 'react';
import styles from './Layout.module.scss'

const Layout = ({children, ...props}) => {
  return (
    <div className={styles['wrapper']}>
      {
        children
      }
    </div>
  );
};

export default Layout;