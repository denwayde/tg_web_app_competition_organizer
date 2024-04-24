import React from 'react';
import { InputText } from 'primereact/inputtext';
//import { Button } from 'primereact/button';
import OrganizationOption from './OrganizationOption'
import GameOptions from './GameOptions';


function MyForm() {
  //let tg = window.Telegram.WebApp
  
  return (
    <div>
      <div className="p-inputgroup mt-3">
        <InputText placeholder="Введите ваше ФИ" />
      </div>
      <GameOptions/>
      <OrganizationOption/>
  </div>
  );
}

export default MyForm;