import { Commons } from './IsToday'
import { LineNotify } from './LineNotify'
import { GASProperties } from './GASProperties'

export namespace UseCase {
    export function Main() {
        console.time("main");
        console.info("run main");

        // スプレッドシートを取得する
        const spreadSheetID: string | null = GASProperties.getProperty(GASProperties.Key.SpreadSheetID);
        const sheetName: string | null = GASProperties.getProperty(GASProperties.Key.SheetName);
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

            if (!Commons.IsToday(operate_Date)) {
                continue;
            }

            var operate_Train = table[index][1];
            var operate_Destination = table[index][2];

            var content = `今日は${operate_Train}${operate_Destination}の検測予定日です。`;
            //console.log(content);
            LineNotify.SendLineNotify(content);
            break;
        }

        console.info("run finish");
        console.timeEnd("main");
    }
}