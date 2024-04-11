
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function GameOptions() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Рандом', code: 'NY' },
        { name: 'Чемпионат', code: 'RM' },
        { name: 'Вызов соперника', code: 'LDN' }
    ];

    return (
        <div className="p-inputgroup mt-3">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Выберите режим игры" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />
        </div>
    )
}
        