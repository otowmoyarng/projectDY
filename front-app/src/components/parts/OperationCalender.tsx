import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from 'react'
import { Calendar, momentLocalizer, DateLocalizer } from 'react-big-calendar'
import moment from "moment";
import { DateUtils } from '../index'

//moment.locale('ja-JP');
const localizer: DateLocalizer = momentLocalizer(moment);

export default function OperationCalender() {
    const [operationList, setOperation] = useState([]);
    const myEventsList = [
        {
            title: "イベント",
            allDay: true,
            start: new Date("27 Sep 2021 00:00:00 +0000"),
            end: new Date("27 Sep 2021 10:00:00 +0000")
        }
    ];

    // Back/Nextクリック時の関数
    const handleNavigation = (date: Date, view: string, action: string) => {
        console.log("date:", date);
        console.log("view:", view);
        console.log("action:", action);
    };

    return (
        <div className="OperationCalender">
            <Calendar
                localizer={localizer}
                //culture="ja-JP"
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                views={["month"]}
                style={{ height: "100vh", margin: "10px" }}
                defaultDate={DateUtils.Now()}
                onNavigate={handleNavigation}
            />
        </div>
    );
}
