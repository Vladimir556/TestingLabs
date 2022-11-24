import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lab1 from './pages/lab1/Lab1';
import Lab2 from './pages/lab2/Lab2';
import Main from './pages/Main/Main';
import Page404 from './pages/Page404';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='lab1' element={<Lab1/>}/>
        <Route path='lab2' element={<Lab2/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;