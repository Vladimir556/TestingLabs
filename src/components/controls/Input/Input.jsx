import React, { useId } from 'react';
import styles from './Input.module.scss'
const Input = ({title, type, register,errMsg}) => {

  const id = useId()
  return (
    <div className={styles['input']}>
      <label htmlFor={id} className={errMsg ? [styles['input__label'], styles['error-label']].join(' ') : styles['input__label']}>{title}</label>
      <input {...register} id={id} type={type} className={errMsg ? [styles['input__field'],styles['error-field']].join(' ') : styles['input__field']}/>
      <span className={styles['error-text']}>{errMsg}</span>
    </div>
  );
};

export default Input;