import React from "react";
// import { Calendar} from 'primereact/calendar';
//import { InputText } from 'primereact/inputtext';
//import { Button } from 'primereact/button';
// import { addLocale } from 'primereact/api';
import ChallengeFindUser from "./ChallengeFindUser";
import ChallengeCalendar from "./ChallengeCalendar";

function ChallengeOpponent() {
    // const [date, setDate] = useState(null);
    // const[name, setName] = useState('')
    // let sdate = date?.toLocaleDateString('ru-RU')
    // let stime = date?.toLocaleTimeString('ru-RU')
     
    // useEffect(()=>{
    //     //console.log(sdate + ' ' + stime)
    //     console.log(typeof date)
    // }, [date])

    // addLocale('ru', {
    //     firstDayOfWeek: 1,
    //     showMonthAfterYear: true,
    //     dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    //     dayNamesShort: ['вск', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    //     dayNamesMin: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
    //     monthNames: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
    //     monthNamesShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'],
    //     today: 'Сегодня',
    //     clear: 'Очистить'
    // });
    
    return (
        <div className="container">
            <ChallengeFindUser/>
            <ChallengeCalendar/>
            {/* <div className="p-inputgroup mt-3">
                <InputText placeholder="Введите имя вызываемого" />
                <Button icon="pi pi-search" className="p-button-warning" />
            </div> */}
            {/* <div className="p-inputgroup mt-3">
                <Calendar placeholder="Введите дату игры" value={date} onChange={(e) => setDate(e.value)} showTime hourFormat="24" locale="ru" dateFormat="dd/mm/yy" showIcon={true} showWeek={false} minDate={new Date()} stepMinute={10}/>
            </div> */}
        </div>
    )
}

export default ChallengeOpponent;