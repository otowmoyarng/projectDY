import React from 'react';
//import useState from 'react'
import { Calendar, momentLocalizer, DateLocalizer } from 'react-big-calendar'
import moment from "moment";
import { DateUtils, OperationProps } from '../index'
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../../assets/css/Calendar.css'

moment.locale('ja-JP');
const localizer: DateLocalizer = momentLocalizer(moment);

export default function OperationCalender(props: OperationProps) {

    // 予定のstyle属性
    const eventStyle = {
        className: "eventStyle"
    };

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
                events={props.OperationList}
                startAccessor="start"
                endAccessor="end"
                views={["month"]}
                style={{ height: "100vh", margin: "10px" }}
                defaultDate={DateUtils.Now()}
                onNavigate={handleNavigation}
                eventPropGetter={(event, start, end, isSelected) => eventStyle}
            />
        </div>
    );
}
