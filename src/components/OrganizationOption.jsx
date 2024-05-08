
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function OrganizationOption() {
    
    const [selectedCountry, setSelectedCountry] = useState(null);
    
    const countries = [
        { name: 'РИЛИ', code: 'AU' },
        { name: 'УГНТУ', code: 'BR' }
    ];

    return (
        <div className="p-inputgroup mt-3">
            <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Выберите вашу организацию" filter  className="w-full md:w-14rem" />
        </div>    
    )
}
        