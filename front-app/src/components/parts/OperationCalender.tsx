import { useState } from 'react'
import { Calendar, momentLocalizer, DateLocalizer, Event } from 'react-big-calendar'
import moment from "moment";
import { DateUtils, SSSApiAccessor } from '../index'
import "react-big-calendar/lib/css/react-big-calendar.css";

//moment.locale('ja-JP');
const localizer: DateLocalizer = momentLocalizer(moment);

export default function OperationCalender() {
    // const operationEvent: Event[] = {
    //     allDay?: boolean,
    //     title?: string,
    //     start?: Date,
    //     end?: Date,
    //     resource?: any
    // }
    const [operationList, setOperation] = useState([]);
    const myEventsList = [
        {
            title: "イベント",
            allDay: true,
            start: new Date("27 Sep 2021 00:00:00 +0000"),
            end: new Date("27 Sep 2021 10:00:00 +0000")
        }
    ];

    if (operationList.length === 0) {
        // TODO
        let list = SSSApiAccessor.GetOperationSchedule();
        //setOperation([]);
        //setOperation(myEventsList);
    }


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
                //events={operationList}
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
