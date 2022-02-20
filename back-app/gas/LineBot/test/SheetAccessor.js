function SheetAccessorTest_GetCalenders() {
    console.log("GetCalenders:", sheetAccessor.GetCalenders());
}

function SheetAccessorTest_GetCalender() {
    const params = ["2022/01", "2020/02"];
    params.forEach(param => {
        const result = sheetAccessor.GetCalender(param)
        console.log(`param:${param}, length:${result.length}, GetCalender:`, result);
    });
}

function SheetAccessorTest_GetUpTimeTable() {
    console.log("GetUpTimeTable:", sheetAccessor.GetUpTimeTable());
}

function SheetAccessorTest_GetDownTimeTable() {
    console.log("GetDownTimeTable:", sheetAccessor.GetDownTimeTable());
}
