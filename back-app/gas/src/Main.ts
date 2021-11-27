import { IsToday } from './IsToday'
import { SendLineNotify } from './SendLineNotify'
import { Key, getProperty } from './PropertiesAccesser'

function main() {
    console.time("main");
    console.info("run main");

    // スプレッドシートを取得する
    const spreadSheetID: string | null = getProperty(Key.SpreadSheetID);
    const sheetName: string | null = getProperty(Key.SheetName);
    if (spreadSheetID === null || sheetName === null) {
        return;
    }

    const sheet: GoogleAppsScript.Spreadsheet.Sheet | null = SpreadsheetApp.openById(spreadSheetID).getSheetByName(sheetName);
    if (sheet === null) {
        console.error(`スプレッドシートが取得できませんでした。スプレッドシートID:${spreadSheetID}、シート名:${sheetName}`);
        return;
    }

    // 日付と担当者の一覧表を二次元配列で取得する
    var table = sheet.getRange(2, 1, sheet.getLastRow(), 3).getValues();

    for (var index = 0; index < table.length; index++) {

        //console.log("index:", table[index]);
        var operate_Date = table[index][0];

        if (!IsToday(operate_Date)) {
            continue;
        }

        var operate_Train = table[index][1];
        var operate_Destination = table[index][2];

        var content = `今日は${operate_Train}${operate_Destination}の検測予定日です。`;
        //console.log(content);
        SendLineNotify(content);
        break;
    }

    console.info("run finish");
    console.timeEnd("main");
}