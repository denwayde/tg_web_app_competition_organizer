
import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { FloatLabel } from "primereact/floatlabel";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_COUNTRY } from "../store/organizationReducer";

export default function OrganizationOption() {
    
    const dispatch = useDispatch()
    const selectedCountry = useSelector(state => state.organOptionReducer.selectedCountry)

    //const [selectedCountry, setSelectedCountry] = useState(null);
    // useEffect(()=>{
    //     console.log(selectedCountry)
    //     console.log(selectedCountry?.value?.name)
    // })

    function setSelectedCountry(e){
        dispatch({
            type: SELECT_COUNTRY,
            payload: e.target
        })
    }

    const countries = [
        { name: 'РИЛИ', code: 'AU' },
        { name: 'УГНТУ', code: 'BR' },
    ];

    return (
        <div>
            <div className="p-inputgroup mt-5 mb-1">
            <FloatLabel>

                <Dropdown
                    value={selectedCountry?.value}
                    onChange={e => setSelectedCountry(e)}
                    options={countries}
                    optionLabel="name"
                    filter
                    className="w-full md:w-14rem"
                />

                <label htmlFor="ms-cities">Выберите вашу организацию</label>

            </FloatLabel>
            </div>
        </div>
    )
}
        