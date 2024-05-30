import React, {useState} from "react";
import { Dropdown } from 'primereact/dropdown';
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";

function ChallengeFindUser(){
    const [selectedCountry, setSelectedCountry] = useState(null);
    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' }
    ];


    return (
        <div className="p-inputgroup mt-5">
            <FloatLabel>
                <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" filter className="w-full md:w-14rem" />
                <label htmlFor="username">Введите имя вызываемого</label>
            </FloatLabel>
            <Button icon="pi pi-search" className="p-button-warning" />
        </div>    
    )
}

export default ChallengeFindUser