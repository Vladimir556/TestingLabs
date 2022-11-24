import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/controls/Button/Button';
import Input from '../../components/controls/Input/Input';
import Container from '../../components/layout/Container/Container';
import Grid from '../../components/layout/Grid/Grid';
import Layout from '../../components/layout/Layout/Layout';
import styles from './Lab2.module.scss'

const Lab2 = () => {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [formValue, setFormValue] = useState()

  const dateValidateHandler = () => {
    if (watch('date').split('-')[0]){
      let date = new Date
      let age = date.getFullYear() - watch('date').split('-')[0]
      if(age > 14){
        return 'Возраст больше 14'
      }
      if(age < 3){
        return 'Возраст меньше 3'
      }
      return true
    }
  }
  
  return (
    <Layout>
      <Container>
        <h2>Вариант №12</h2>
        <p>Для приема ребенка в секцию фигурного катания необходимо ввести следующую информацию: фамилию, имя, число, месяц и год рождения, домашний адрес.</p>
      </Container>
      <Container>
        <h2>Заполните форму заявки для приема ребенка в секцию фигурного катания:</h2>
        <form onSubmit={handleSubmit((data) => {
          setFormValue(data)
          console.log(data)
        })}>
        <Grid>
          <div>
            <h3>Контактные данные:</h3>
            <Input title="Фамилия" register={register('surname', {required: "Обязательное поле.", pattern:{value:/([А-Я][а-я]+$)/, message:'Не должно содержать цифры'}})} errMsg={errors?.surname?.message}/>
            <Input title="Имя" register={register('name', {required: "Обязательное поле.", pattern:{value:/([А-Я][а-я]+$)/, message:'Не должно содержать цифры'} })} errMsg={errors?.name?.message}/>
            <Input title="Отчество" register={register('patronymic', {required: "Обязательное поле.", pattern:{value:/([А-Я][а-я]+$)/, message:'Не должно содержать цифры'}})} errMsg={errors?.patronymic?.message}/>
            <Input type="date" register={register('date', {required: "Обязательное поле.", validate: value => dateValidateHandler(value)})} title="Дата рождения" errMsg={errors?.date?.message}/>
            
          </div>
          <div style={{position:'relative'}}>
            <h3>Адрес:</h3>
            <Input title="Город" register={register('city', {required: "Обязательное поле.", pattern:{value:/([А-Я][а-я]+$)/, message:'Не должно содержать цифры'}})} errMsg={errors?.city?.message}/>
            <Input title="Улица" register={register('street', {required: "Обязательное поле."})} errMsg={errors?.street?.message}/>
            <Input title="Дом" register={register('house', {required: "Обязательное поле."})} errMsg={errors?.house?.message}/>
            <Button type='submit' title="Отправить" style={{position:'absolute', right:0, bottom:0}}/>
          </div>
        </Grid>
        </form>
      </Container>
      {
        formValue && 
        <Container>
          <h2>Заявка успешно отправлена:</h2>
          <Grid>
            <div>
              <p>ФИО: {formValue?.surname} {formValue?.name} {formValue?.patronymic}</p>
              <p>Дата рождения: {formValue?.date}</p>
            </div>
            <div>
              <p>Адрес: г. {formValue?.city} ул. {formValue?.street} д. {formValue?.house}</p>
            </div>
          </Grid>
        </Container>
      }
    </Layout>
  );
};

export default Lab2;