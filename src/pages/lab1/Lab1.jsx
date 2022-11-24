import React from 'react';
import Button from '../../components/controls/Button/Button';
import Input from '../../components/controls/Input/Input';
import Container from '../../components/layout/Container/Container';
import Grid from '../../components/layout/Grid/Grid';
import Layout from '../../components/layout/Layout/Layout';
import styles from './Lab1.module.scss'
import labImage from '../../assets/img/lab2img.png'
import { useForm } from 'react-hook-form';
import { Area, Bar, CartesianGrid, ComposedChart, Line, XAxis, YAxis } from 'recharts';
import { useState } from 'react';

const Lab1 = () => {
  
  const [data, setData] = useState({
    graph:[],
    result:null
  })

  const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm()
  
  
  const validateE = (value) => {
    if (value <= 1){
      return true
    } else {
      return "не должно быть больше 1"
    }
  }

  const validateValue = (value, limit) => {
    if (value > limit){
      return `Значение должно быть меньше ${limit}`
    } else {
      return true
    }

  }

  const InFunction = (x) => {
    const y = Math.sqrt(Math.pow(x,2)-0.36)/(x-2)
    return y
  }

  const calcIntegral = (a, b, n) =>  {
    //ОДЗ: (-inf : -0.6) : (0.6 : 2) : (2 : +inf)
    let result = 0
    let h = (b - a) / n;
    
    for(let i = 0; i < n; i++) {
      result += Math.abs(InFunction(a+h/2+i*h));
    }
    
    result *= h;
    if (isNaN(result)){
      return "Интеграл расходиться"
    }
    return result;
  }

  const generateData = (start, step, end) => {
    const arr = []
    const length = (end - start) / step + 1

    let value = start

    for (let i = 0; i < length; i++) {
      let x = Number(value.toFixed(1))
      let y = InFunction(x)

      if (y === 0){
        y = null
      }

      if (y === Infinity){
        y = null
      }

      arr.push({
        "x":x,
        "y":y
      })

      value += step
    }
    
    return arr
  }

  const onSubmit = (data) => {
    let start = Number(data.a)
    let end = Number(data.b)
    let step = Number(data.e)

    if(!start){
      return
    }
    
    if(!end){
      return
    }

    if(start > end){
      alert('Неверный интервал')
      return
    }


    let n = 0

    let resultData = generateData(start - 1, step, end + 1).map(elem => {
      if (elem.x >= start && elem.x <= end){
        const result = {
          "x":elem.x,
          "y":elem.y,
          "result": elem.y
        }
        n++
        return result
      }
      else{
        return elem
      }
    })

    setData({
      graph: resultData,
      result: calcIntegral(start,end,n)
    })

    setValue('n', n)
  }

  return (
    <Layout>
      <Container>
        <h2>Вариант №12</h2>
        <p>Вычислить значение определенного интеграла методом прямоугольника с точностью ε. Сделать графическую интерпретацию результата.</p>
        <img src={labImage} alt="integralImg" style={{margin:"0 auto", display:"block"}}/>
        <h3>ОДЗ:</h3>
        <h3>(-∞:-0.6) (0.6:2) (2:+∞)</h3>
      </Container>
      <Container>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Grid>
          <div>
            <h3>Исходные данные:</h3>
            <Input type="text" title="a" register={register('a', {required: "Обязательное поле.", validate: value => validateValue(value, 100)})} errMsg={errors?.a?.message}/>
            <Input type="text" title="b" register={register('b', {required: "Обязательное поле.", validate: value => validateValue(value, 100)})} errMsg={errors?.b?.message}/>
            <Input type="text" title="шаг" register={register('e', {required: "Обязательное поле.", pattern:{value:/([0-9]+)?([\.,][0-9]+)?/, message:'Не должно содержать буквы'}, validate: value => validateE(value)})} errMsg={errors?.e?.message}/>
          </div>
          <div style={{position:'relative'}}>
            <Button type="submit" title="Вычислить" style={{position:'absolute', right:0, bottom:0}}/>
          </div>
        </Grid>
        </form>
        {
          data.result &&
          <Container>
          <h2>Результат:</h2>
          <Grid>
            <div>
              <p>Колличество отрезков: {getValues('n')}</p>
              <p>Результат вычислений: {data.result}</p>
            </div>
            <div>
              <ComposedChart width={600} height={250} data={data.graph} barCategoryGap="0%">
                <XAxis dataKey="x" />
                <YAxis/>
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="result" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="result" fill="#413ea0" />
                <Line dot={false} type="monotone" dataKey="y" stroke="#ff7300" />
              </ComposedChart>
            </div>
          </Grid>
        </Container>
        }
      </Container>
    </Layout>
  );
};

export default Lab1;