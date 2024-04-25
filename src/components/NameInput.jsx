import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';


function NameInput(){
    const [prevValue, setPrevValue] = useState('')
    
    let pattern = /^(?!-)(?!.*-$)[а-яА-Я]+&/
    function validateInput(event, validatePattern){
        const target = event.target;
        //console.log(valpat)
        if (validatePattern) {
            if (target.value.length > 0) {
                setPrevValue(target.value);
            }

            // key was OK so do nothing
            return;
        }

        // key made the whole input not valid so block this key
        //  Compare current value with previous value
        if (target.value.length > 0) {
            // Set previous valid value
            target.value = prevValue;
        }
    }
    
    return (
        
            <div className="p-inputgroup mt-3">
                <InputText placeholder="Введите ФИ" keyfilter={/^(?!-)(?!.*-$)(?!\s)(?!.*\s$)[а-яА-Я\s\-]+$/} validateOnly onInput={validateInput}/>
            </div>
            
    )
}

export default NameInput