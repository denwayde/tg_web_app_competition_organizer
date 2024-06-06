import React, {useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from "primereact/floatlabel";

function NameInput(props){
    const {getInputValueForForm} = props
    
    const [value, setValue] = useState('')
    const [labelValue, setLabelValue] = useState('Введите ФИ')
    const [isInvalid, setIsInvalid] = useState(false)
    //let pattern = /^(?!-)(?!.*-$)[а-яА-Я]+$/
    
    useEffect(()=>{
        sendInputValueToForm(value)
    },[value])

    function sendInputValueToForm(v){
        getInputValueForForm(v)
    }

    function stateSetter(valid, label, value = undefined){
        if(value!==undefined){
            setValue(value)
        }
        setIsInvalid(valid)
        setLabelValue(label)
    }

    function validateInput(e){
        if(/^(?!-)(?!.*-$)[а-яА-Я\s-]+$/.test(e.target.value)){
            stateSetter(false, 'Введите ФИ', e.target.value)
        }
        else if(/^[a-zA-Z]+$/.test(e.target.value)){
            stateSetter(true, 'Нужно писать на русском')
        }
        else if(e.target.value === ''){
            stateSetter(false, 'Введите ФИ', e.target.value)
        }
        else {
            stateSetter(true, 'Не валидное значение')
        }
    }
    
    function focusOut(e){
        if(e.target.value!==''){
            setLabelValue('')
        }
    }
    return (
        
            <div className="p-inputgroup mt-6">
                {/* <InputText placeholder="Введите ФИ" keyfilter={/^(?!-)(?!.*-$)[а-яА-Я\s\-]+$/} validateOnly onInput={validateInput}/> */}
                <FloatLabel>
                    <InputText id="username" value={value} onChange={validateInput} className={isInvalid && 'invalidInput'} onBlur={focusOut}/>
                    <label htmlFor="username" className={isInvalid ? 'invalitLabel' : ''}>{labelValue}</label>
                </FloatLabel>
            </div>
            
    )
}

export default NameInput