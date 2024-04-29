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

function SheetAccessorTest_GetNozomiUpTimeTable() {
    console.log("GetNozomiUpTimeTable:", sheetAccessor.GetNozomiUpTimeTable());
}

function SheetAccessorTest_GetNozomiDownTimeTable() {
    console.log("GetNozomiDownTimeTable:", sheetAccessor.GetNozomiDownTimeTable());
}

function SheetAccessorTest_GetKodamaUpTimeTable() {
    console.log("GetKodamaUpTimeTable:", sheetAccessor.GetKodamaUpTimeTable());
}

function SheetAccessorTest_GetKodamaDownTimeTable() {
    console.log("GetKodamaDownTimeTable:", sheetAccessor.GetKodamaDownTimeTable());
}

function SheetAccessorTest_GetStations() {
    console.log("GetStations:", sheetAccessor.GetStations());
}

function SheetAccessorTest_IsDebug() {
    const unittest = mode => {
        Sheet.Config.getRange(ConfigKey.Debug).setValue(mode);
        console.log(`DebugMode:${Sheet.Config.getRange(ConfigKey.Debug).getValue()}`);
        console.log("IsDebug:", sheetAccessor.IsDebug());
    };

    unittest(DebugType.OFF);
    unittest(DebugType.ON);
}