import React from 'react';
import styles from './Main.module.scss'
import Layout from '../../components/layout/Layout/Layout';
import Grid from '../../components/layout/Grid/Grid';
import Container from '../../components/layout/Container/Container';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <Layout>
      <div className={styles['main']}>
        <div className={styles['header']}>
          <h1>
            Смелов Владимир Михайлович
          </h1>
          <h3>
            Лабораторные работы по тестированию
          </h3>
          <h3>
            Вариант №12
          </h3>
        </div>
        <Grid style={{gridTemplateColumns:"repeat(3,1fr)", textAlign:"center"}}>
          <Container className={[styles['lab-container']]}>
            <Link to='lab1'>
              <h3>
                Лабораторная работа №1
              </h3>
            </Link>
          </Container>
          <Container className={[styles['lab-container']]}>
            <Link to='lab2'>
              <h3>
                Лабораторная работа №2
              </h3>
            </Link>
          </Container>
          <Container className={[styles['lab-container']]}>
            <Link to='lab3'>
              <h3>
                Лабораторная работа №3
              </h3>
            </Link>
          </Container>
        </Grid>
      </div>
    </Layout>
  );
};

export default Main;