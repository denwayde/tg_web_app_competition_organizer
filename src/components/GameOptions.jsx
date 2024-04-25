
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from "primereact/checkbox";

export default function GameOptions() {
    // const [selectedCity, setSelectedCity] = useState(null);
    // const cities = [
    //     { name: 'Рандом', code: 'NY' },
    //     { name: 'Чемпионат', code: 'RM' },
    //     { name: 'Вызов соперника', code: 'LDN' }
    // ];

    // return (
    //     <div className="p-inputgroup mt-3">
    //         <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
    //             placeholder="Выберите режим игры" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />
    //     </div>
    // )
    const categories = [
        { name: 'Рандом', key: 'A', disabled: false },
        { name: 'Вызов', key: 'M', disabled: false },
        { name: 'Чемпионат', key: 'P', disabled: true },
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };

    return (
        <div className="m-3 ">
            <div className="flex justify-content-around gap-3 flex-wrap">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)}  disabled = {category.disabled}/>
                            <label htmlFor={category.key} className="ml-2">
                                {category.name}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
        