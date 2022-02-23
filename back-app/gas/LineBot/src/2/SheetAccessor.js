const SpreadSheet = SpreadsheetApp.getActiveSpreadsheet();

const Sheet = {
    Calender: SpreadSheet.getSheetByName('運行予定日'),
    UpTimeTable: SpreadSheet.getSheetByName('時刻表（上り）'),
    DownTimeTable: SpreadSheet.getSheetByName('時刻表（下り）'),
    Config: SpreadSheet.getSheetByName('config'),
    Logs: SpreadSheet.getSheetByName('logs'),
};

class SheetAccessor {

    GetCalenders() {
        const calenderAll = Sheet.Calender.getDataRange().getValues();
        calenderAll.shift();
        return calenderAll;
    }

    GetCalender(dateMonth) {
        const calenderAll = this.GetCalenders();
        let calenderList = calenderAll.filter(row => row[row.length - 1] === dateMonth);
        return calenderList;
    }

    GetUpTimeTable() {
        const timeTable = Sheet.UpTimeTable.getDataRange().getValues();
        timeTable.shift();
        return timeTable;
    }

    GetDownTimeTable() {
        const timeTable = Sheet.DownTimeTable.getDataRange().getValues();
        timeTable.shift();
        return timeTable;
    }

    IsDebug() {
        const debugMode = Sheet.Config.getRange(ConfigKey.Debug).getValue()
        return debugMode === DebugType.ON;
    }
}

const sheetAccessor = new SheetAccessor();