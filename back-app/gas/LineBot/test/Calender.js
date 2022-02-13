function CalenderTest_createCalenderHead() {
    const params = [undefined, "2021/12/10", "2022/01/01"];
    params.forEach(param => {
        console.log(`param:${param}, result:`, calender.createCalenderHead(param));
    });
}

function CalenderTest_createFooter() {
    const params = [undefined, "2022/01", "2022/03"];
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