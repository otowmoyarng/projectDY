const SpreadSheet = SpreadsheetApp.getActiveSpreadsheet();

const Sheet = {
    Calender: SpreadSheet.getSheetByName('運行予定日'),
    NozomiDownTimeTable: SpreadSheet.getSheetByName('時刻表・のぞみ下り'),
    NozomiUpTimeTable: SpreadSheet.getSheetByName('時刻表・のぞみ上り'),
    KodamaDownTimeTable: SpreadSheet.getSheetByName('時刻表・こだま下り'),
    KodamaUpTimeTable: SpreadSheet.getSheetByName('時刻表・こだま上り'),
    Station: SpreadSheet.getSheetByName('駅'),
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

    GetNozomiUpTimeTable() {
        const timeTable = Sheet.NozomiUpTimeTable.getDataRange().getValues();
        timeTable.shift();
        return timeTable;
    }

    GetNozomiDownTimeTable() {
        const timeTable = Sheet.NozomiDownTimeTable.getDataRange().getValues();
        timeTable.shift();
        return timeTable;
    }

    GetKodamaUpTimeTable() {
        const timeTable = Sheet.KodamaUpTimeTable.getDataRange().getValues();
        timeTable.shift();
        return timeTable;
    }

    GetKodamaDownTimeTable() {
        const timeTable = Sheet.KodamaDownTimeTable.getDataRange().getValues();
        timeTable.shift();
        return timeTable;
    }

    GetStations() {
        const stationAll = Sheet.Station.getDataRange().getValues();
        stationAll.shift();
        return stationAll;
    }

    IsDebug() {
        const debugMode = Sheet.Config.getRange(ConfigKey.Debug).getValue()
        return debugMode === DebugType.ON;
    }
}

const sheetAccessor = new SheetAccessor();