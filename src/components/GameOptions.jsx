
import React, { useEffect, useState } from "react";
//import { Dropdown } from 'primereact/dropdown';
//import { Checkbox } from "primereact/checkbox";
import { MultiSelect } from 'primereact/multiselect';
import { FloatLabel } from "primereact/floatlabel";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_GAMES } from "../store/gameChoiseReducer";

export default function GameOptions() {

    //const [selectedCities, setSelectedCities] = useState(null);
    const dispatcher = useDispatch()
    const selectedGames = useSelector(state => state.gameChoiseReducer.selectedGames)//tut u tebya massiv vida {"name": null, "id": null,"value": [{"name": "Рандом","code": "1","description": "Бот назначит дату игры и соперника рандомно"}]}
    //v value doljen bit massiv vida [{"name": "Rome","code": "RM"}]
    let gamesForValue = []
    useEffect(()=>{
        console.log(selectedGames)
        gamesForValue = selectedGames.map(el=>el?.value[0])
        //console.log(gamesForValue)
        
    }, [selectedGames])

    const [description, setDescription] = useState('Выберите режим игры')
    
    const cities = [
        { name: 'Рандом', code: '1', description: 'Бот назначит дату игры и соперника рандомно' },
        { name: 'Вызов', code: '2', description: 'В этом режиме вы назначаете дату игры и соперника самостоятельно' },
        { name: 'Чемпионат', code: '3', description: 'Режим чемпионат пока в разработке. Разработчик ищет лучший алгоритм' },
    ];
    // useEffect(()=>{
    //     if(selectedCities !== null){
    //         setDescription(selectedCities[selectedCities.length-1]?.description)
    //     }
        
    // }, [selectedCities])

    return (

        <div className="p-inputgroup mt-5">
            <FloatLabel>
                <MultiSelect value={gamesForValue} onChange={(e) => dispatcher({type: SELECT_GAMES, payload: e.target})} options={cities} optionLabel="name" className="w-full md:w-20rem" />
                <label htmlFor="ms-cities" className={selectedGames !== null ? 'greenLabel': ''}>{description}</label>
            </FloatLabel>
        </div>
    );
}
        