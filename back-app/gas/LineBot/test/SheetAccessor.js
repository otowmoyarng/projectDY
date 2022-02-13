function SheetAccessorTest_GetCalenders() {
    console.log("GetCalenders:", sheetAccessor.GetCalenders());
}

function SheetAccessorTest_GetCalender() {
    const params = ["2022/01", "2022/02"];
    params.forEach(param => {
        console.log(`param:${param}, GetCalender:`, sheetAccessor.GetCalender(param));
    });
}