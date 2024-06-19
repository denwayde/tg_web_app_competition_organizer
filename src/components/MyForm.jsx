import React, {useEffect} from 'react';
//import { Button } from 'primereact/button';
import OrganizationOption from './OrganizationOption'
import GameOptions from './GameOptions';
import NameInput from './NameInput';
import { Link } from "react-router-dom";

function MyForm() {
  //let tg = window.Telegram.WebApp
  
  return (
    <div className='container'>
      <NameInput getInputValueForForm/>
      <OrganizationOption />
      <GameOptions />
      <div className='create_organization'>
        <small>Нет вашей организации? <Link to='/create_organization'>Создайте ее</Link></small>
      </div>
    </div>
  );
}

export default MyForm;