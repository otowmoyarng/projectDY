function CalenderTest_createCalender() {
    const params = [undefined, "2021/12/10", "2022/01/01"];
    params.forEach(param => {
        console.log(`param:${param}, result:`, JSON.stringify(calender.createCalender(param)));
    });
}

function CalenderTest_createHeader() {
    const params = [undefined, "2021/12/10", "2022/01/01"];
    params.forEach(param => {
        console.log(`param:${param}, result:`, calender.createHeader(param));
    });
}

function CalenderTest_createBodyHeader() {
    const result = calender.createBodyHeader();
    result.forEach(row => {
        console.log("row", row);
    });
}

function CalenderTest_createBody() {
    const params = [undefined, "2021/12", "2022/12"];
    params.forEach(param => {
        const result = calender.createBody(param);
        console.log(`param:${param}, count:`, result.length);
        result.forEach((rows, x) => {
            rows.forEach((row, y) => {
                console.log(`${x},${y}:`, row);
            });
        });
    });
}

function CalenderTest_createFooter() {
    const params = [undefined, "2021/11", "2022/03"];
    params.forEach(param => {
        const result = calender.createFooter(param);
        console.log(`param:${param}, count:`, result.length);
        result.forEach(row => {
            console.log("row", row);
        });
    });
}

function CalenderTest_calenders() {
    console.log("引数なし：", calender.calenders());
    const params = ["2022/01", "2022/02"];
    params.forEach(param => {
        console.log(`引数あり：param:${param},`, calender.calenders(param));
    });
}