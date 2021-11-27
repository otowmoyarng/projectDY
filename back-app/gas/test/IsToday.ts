import { Commons } from '../src/IsToday'

function TestIsToday() {
    var dateArray = [
        '2021/09/19',
        '',
        '2021/09/32',
        '2021/00/21',
        '0000/09/21',
        '20210919',
        '2021/0919',
        '202109/19',
    ];
    dateArray.forEach((dateStr) => {
        var date = new Date(dateStr);
        console.log("dateStr:" + dateStr + ", date:" + date.toDateString());
    });

    var date = '';
    console.log("date is empty");
    console.log("IsToday is", Commons.IsToday(date));

    date = '2021/09/17';
    console.log("date is yesterday");
    console.log("IsToday is", Commons.IsToday(date));

    date = '2021/09/18';
    console.log("date is today");
    console.log("IsToday is", Commons.IsToday(date));

    date = '2021/09/19';
    console.log("date is tomorrow");
    console.log("IsToday is", Commons.IsToday(date));
}