
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { FloatLabel } from "primereact/floatlabel";

export default function OrganizationOption() {
    
    const [selectedCountry, setSelectedCountry] = useState(null);
    
    const countries = [
        { name: 'РИЛИ', code: 'AU' },
        { name: 'УГНТУ', code: 'BR' },
    ];

    return (
        <div>
            <div className="p-inputgroup mt-5 mb-1">
            <FloatLabel>
                <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" filter  className="w-full md:w-14rem" />
                <label htmlFor="ms-cities">Выберите вашу организацию</label>
            </FloatLabel>
            </div>
        </div>
    )
}
        