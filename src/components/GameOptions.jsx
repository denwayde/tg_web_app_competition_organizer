
import React, { useEffect, useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import { FloatLabel } from "primereact/floatlabel";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_GAMES } from "../store/gameChoiseReducer";

export default function GameOptions() {

    //const [selectedCities, setSelectedCities] = useState(null);
    const dispatcher = useDispatch()
    const selectedGames = useSelector(state => state.gameChoiseReducer.selectedGames)
    
    const [description, setDescription] = useState('Выберите режим игры')
    
    const cities = [
        { name: 'Рандом', code: '1', description: 'Бот назначит дату игры и соперника рандомно' },
        { name: 'Вызов', code: '2', description: 'В этом режиме вы назначаете дату игры и соперника самостоятельно' },
        { name: 'Чемпионат', code: '3', description: 'Режим чемпионат пока в разработке. Разработчик ищет лучший алгоритм' },
    ]

    useEffect(()=>{
        if(selectedGames !== null){
            setDescription(selectedGames[selectedGames.length-1]?.description)//---------------------------tut nujno prorabotat, esli ti vibiral kakoi libo obekt a zatem ubral vse viborki to pole ostaetsya pustim eto ne est horosho
        }
        
    }, [selectedGames])

    return (

        <div className="p-inputgroup mt-5">
            <FloatLabel>
                <MultiSelect value={selectedGames} onChange={(e) => dispatcher({type: SELECT_GAMES, payload: e.value})} options={cities} optionLabel="name" className="w-full md:w-20rem" />
                <label htmlFor="ms-cities" className={selectedGames !== null ? 'greenLabel': ''}>{description}</label>
            </FloatLabel>
        </div>
    );
}
        