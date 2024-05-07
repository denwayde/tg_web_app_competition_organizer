import React from 'react';
//import { Button } from 'primereact/button';
import OrganizationOption from './OrganizationOption'
import GameOptions from './GameOptions';
import NameInput from './NameInput';

function MyForm() {
  //let tg = window.Telegram.WebApp
  
  return (
    <div className='container'>
      <NameInput/>
      <OrganizationOption/>
      <GameOptions/>
  </div>
  );
}

export default MyForm;