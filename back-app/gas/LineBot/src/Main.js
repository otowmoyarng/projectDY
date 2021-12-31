/**
 * トリガー起動用関数
 */
function Main() {

    // スプレッドシートを取得する
    const spreadSheetID = GASProperties.GetProperty(GASPropertiesKey.SpreadSheetID);
    const sheetName = GASProperties.GetProperty(GASPropertiesKey.SheetName);
    if (spreadSheetID === null || sheetName === null) {
        return;
    }

    const sheet = SpreadsheetApp.openById(spreadSheetID).getSheetByName(sheetName);
    if (sheet === null) {
        console.error(`スプレッドシートが取得できませんでした。スプレッドシートID:${spreadSheetID}、シート名:${sheetName}`);
        return;
    }

    // 日付と担当者の一覧表を二次元配列で取得する
    var table = sheet.getRange(2, 1, sheet.getLastRow(), 3).getValues();

    for (var index = 0; index < table.length; index++) {

        var operate_Date = table[index][0];

        if (!IsToday(operate_Date)) {
            continue;
        }

        var operate_Train = table[index][1];
        var operate_Destination = table[index][2];

        var content = `今日は${operate_Train}${operate_Destination}の検測予定日です。`;
        LineBot.SendBroadcast(content);
        break;
    }
}

/**
 * 運行日が本日かどうか
 * @param operate_Date 運行日
 * @returns true/false
 */
function IsToday(operate_Date) {

    var date = new Date(operate_Date);
    //console.log("date:", date.getFullYear(), date.getMonth() + 1, date.getDate());

    // operate_Dateが日付書式でない場合
    if (date.toDateString() === 'Invalid Date')
        return false;

    var today = new Date();
    //console.log("now:", [today.getFullYear(), today.getMonth() + 1, today.getDate(), today.toDateString(), today]);

    return date.toDateString() === today.toDateString();
}
