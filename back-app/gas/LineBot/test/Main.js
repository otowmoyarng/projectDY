/**
 * E2E用テスト関数
 */
function MainTest() {
    console.time("test");
    console.info("run start");
    Main();
    console.info("run finish");
    console.timeEnd("test");
}

/**
 * IsTodayテスト関数
 */
function MainTest_IsToday() {
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
    console.log("IsToday is", IsToday(date));

    var day = 17;
    date = '2021/09/' + day;
    console.log("date is yesterday");
    console.log("IsToday is", IsToday(date));

    day++;
    date = '2021/09/' + day;
    console.log("date is today");
    console.log("IsToday is", IsToday(date));

    day++;
    date = '2021/09/' + day;
    console.log("date is tomorrow");
    console.log("IsToday is", IsToday(date));
}