import './App.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
import MyForm from './components/MyForm';
import {useTelegram} from './hooks/useTelegram'
import { useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'
import ChallengeOpponent from './components/ChallengeOpponent';


function App() {
  const {tg} = useTelegram()
  useEffect(()=>{
    tg.ready()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route index element={<MyForm/>}/>
        <Route path='challenge' element={<ChallengeOpponent/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
