import React, {useState } from "react";
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from "primereact/floatlabel";

function NameInput(){
    const [value, setValue] = useState('')
    const [labelValue, setLabelValue] = useState('Введите ФИ')
    const [isInvalid, setIsInvalid] = useState(false)
    //let pattern = /^(?!-)(?!.*-$)[а-яА-Я]+$/
    function validateInput(e){
        if(/^(?!-)(?!.*-$)[а-яА-Я\s-]+$/.test(e.target.value)){
            setValue(e.target.value)
            setIsInvalid(false)
            setLabelValue('Введите ФИ')
        }
        else if(/^[a-zA-Z]+$/.test(e.target.value)){
            setIsInvalid(true)
            setLabelValue('Нужно писать на русском')
        }
        else if(e.target.value === ''){
            setIsInvalid(false)
            setLabelValue('Введите ФИ')
            setValue(e.target.value)
        }
        else {
            setIsInvalid(true)
            setLabelValue('Не валидное значение')
            //console.log("невалид")
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
                    <label htmlFor="username" className={isInvalid && 'invalitLabel'}>{labelValue}</label>
                </FloatLabel>
            </div>
            
    )
}

export default NameInput