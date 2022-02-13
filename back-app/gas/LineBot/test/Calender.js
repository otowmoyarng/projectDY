function CalenderTest_calenders() {
    console.log("引数なし：", calender.calenders());
    const params = ["2022/01", "2022/02"];
    params.forEach(param => {
        console.log(`引数あり：param:${param},`, calender.calenders(param));
    });
}