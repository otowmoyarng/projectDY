import { OperationCalender, OperationSchedule, OperationEvent, SSSApiAccessor, DateUtils } from '../index'

const OperationConverter = () => {
    let events: OperationEvent[] = [];

    // TODO GetOperationScheduleが3回実行される
    SSSApiAccessor.GetOperationSchedule().then(
        function (list: OperationSchedule[]) {
            if (list.length === 0) {
                return;
            }
            // OperationSchedule → OperationEvent
            for (var row of list) {

                // let dateParts: string[] = row.Date.split('/');
                // let operationDate = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2]), 0, 0, 0);
                let operationDate = DateUtils.toDate(row.Date, '/');
                let event: OperationEvent = {
                    title: row.Train + row.Destination,
                    allDay: true,
                    start: operationDate,
                    end: operationDate,
                }
                console.log(JSON.stringify(event));
                events.push(event);
            }
        }
    );
    return events;
};

export default function Schedule() {
    const eventList: OperationEvent[] = OperationConverter();

    return (
        <OperationCalender OperationList={eventList} />
    );
}