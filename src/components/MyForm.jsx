import React, {useEffect} from 'react';
//import { Button } from 'primereact/button';
import OrganizationOption from './OrganizationOption'
import GameOptions from './GameOptions';
import NameInput from './NameInput';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function MyForm() {
  //let tg = window.Telegram.WebApp
  const nameInputValue = useSelector(state => state.inputNameReducer.value)//teper tut lejit znachenie iz name input!!!
  const organizationValue = useSelector(state => state.organOptionReducer.selectedCountry)
  const gameChoiseValue = useSelector(state => state.gameChoiseReducer.selectedGames)
  // ---------------- teper nujno poluchit znachenia dlya kajdogo komponenta!!!
  // ---------------- i vozmojno poluchat asinchronno dannie iz servaka
  
  useEffect(()=>{
    console.log(nameInputValue)
    console.log(organizationValue)
    console.log(gameChoiseValue)
  })
 
  return (
    <div className='container'>
      <NameInput />
      <OrganizationOption />
      <GameOptions />
      <div className='create_organization'>
        <small>Нет вашей организации? <Link to='/create_organization'>Создайте ее</Link></small>
      </div>
    </div>
  );
}

export default MyForm;