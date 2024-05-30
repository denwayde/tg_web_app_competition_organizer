import React, {useState} from "react";
import { Calendar } from "primereact/calendar";
import { addLocale } from 'primereact/api';
import { FloatLabel } from "primereact/floatlabel";

export default function ChallengeCalendar(){
    const [date, setDate] = useState(null);
    addLocale('ru', {
        firstDayOfWeek: 1,
        showMonthAfterYear: true,
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
        dayNamesMin: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
        monthNames: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
        monthNamesShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'],
        today: 'Сегодня',
        clear: 'Очистить'
    });
    return (
        <div className="p-inputgroup mt-5">
            <FloatLabel>
                <Calendar  value={date} onChange={(e) => setDate(e.value)} showTime hourFormat="24" locale="ru" dateFormat="dd/mm/yy" showIcon={true} showWeek={false} minDate={new Date()} stepMinute={10}/>
                <label htmlFor="username">Введите дату игры</label>
            </FloatLabel>
        </div>
    )
}