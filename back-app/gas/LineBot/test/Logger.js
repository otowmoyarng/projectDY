function LoggerTest_WriteLog() {
    const texts = [Operation.TimeTable, Operation.When, Operation.Where, "その他"];
    for (let index = 0; index < texts.length; index++) {
        Logger.WriteLog(GetTestUserId(), texts[index]);
    }

    const logs = Sheet.Logs.getDataRange().getValues();
    logs.forEach((row, index) => {
        console.log(`index:${index}, row:`, row);
    });
}