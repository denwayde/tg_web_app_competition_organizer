import './App.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
import MyForm from './components/MyForm';
import {useTelegram} from './hooks/useTelegram'
import { useEffect } from 'react';



function App() {
  const {tg} = useTelegram()
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
