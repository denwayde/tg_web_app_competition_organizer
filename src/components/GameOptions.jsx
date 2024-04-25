
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function GameOptions() {
    const categories = [
        { name: 'Рандом', key: 'A', disabled: false },
        { name: 'Вызов', key: 'M', disabled: false },
        { name: 'Чемпионат', key: 'P', disabled: true },
    ];
    const [selectedCategories, setSelectedCategories] = useState([]);

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
        