
import React, { useEffect, useState } from "react";
//import { Dropdown } from 'primereact/dropdown';
//import { Checkbox } from "primereact/checkbox";
import { MultiSelect } from 'primereact/multiselect';
import { FloatLabel } from "primereact/floatlabel";

export default function GameOptions() {
    const [selectedCities, setSelectedCities] = useState(null);
    const [description, setDescription] = useState('Выберите режим игры')
    const cities = [
        { name: 'Рандом', code: '1', description: 'Бот назначит дату игры и соперника рандомно' },
        { name: 'Вызов', code: '2', description: 'В этом режиме вы назначаете дату игры и соперника самостоятельно' },
        { name: 'Чемпионат', code: '3', description: 'Режим чемпионат пока в разработке. Разработчик ищет лучший алгоритм' },
    ];
    useEffect(()=>{
        if(selectedCities !== null){
            setDescription(selectedCities[selectedCities.length-1]?.description)
        }
        
    }, [selectedCities])

    return (

        <div className="p-inputgroup mt-5">
            <FloatLabel>
                <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" className="w-full md:w-20rem" />
                <label htmlFor="ms-cities" className={selectedCities !== null ? 'greenLabel': ''}>{description}</label>
            </FloatLabel>
        </div>
    );
}
        