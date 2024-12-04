import React from 'react'
import CounterApp from "./components/CounterApp";
import ImageApp from './components/imageApp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MainLayout from './components/MainLayout';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
      <Route path="/counterapp" element={<CounterApp/>}/>
      <Route path="/imageapp" element={<ImageApp/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;