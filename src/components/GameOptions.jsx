
import React, { useState } from "react";
//import { Dropdown } from 'primereact/dropdown';
//import { Checkbox } from "primereact/checkbox";
import { MultiSelect } from 'primereact/multiselect';

export default function GameOptions() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'Рандом', code: '1' },
        { name: 'Вызов', code: '2' },
        { name: 'Чемпионат', code: '3' },
    ];

    return (
        <div className="p-inputgroup mt-3">
            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" placeholder="Выберите вашу организацию" className="w-full md:w-20rem" />
        </div>
    );
}
        