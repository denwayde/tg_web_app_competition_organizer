import './App.css';

import "primereact/resources/themes/lara-light-cyan/theme.css";

import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css'

import MyForm from './components/MyForm';
import { useEffect } from 'react';


const tg = window.Telegram.WebApp
function App() {
  
  useEffect(()=>{
    tg.ready()
  }, [])

  return (
    <div className="App">
      <MyForm/>
    </div>
  );
}

export default App;
