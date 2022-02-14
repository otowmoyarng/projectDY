/**
 * トリガー起動用関数
 */
function Main() {

    var table = sheetAccessor.GetCalender(DateUtil.GetCurrentYm());

    // テストモードでも本番モードで通知する
    const ModeReflesh = mode => {
        Sheet.Config.getRange(ConfigKey.Mode).setValue(mode);
        Sheet.Config.getRange(ConfigKey.Mode).getValue();
    };

    const mode = Sheet.Config.getRange(ConfigKey.Mode).getValue();
    let isTestMode = false;
    if (mode === ModeType.Test) {
        isTestMode = true;
        ModeReflesh(ModeType.Product);
    }

    for (var index = 0; index < table.length; index++) {

        var operate_Date = table[index][0];

        if (!IsToday(operate_Date)) {
            continue;
        }

        var operate_Train = table[index][1];
        var operate_Destination = table[index][2];

        var content = `今日は${operate_Train}${operate_Destination}の検測予定日です。`;
        LineApiDriver.BroadcastMessage(content);
        break;
    }

    // テストモードに戻す
    if (isTestMode) {
        ModeReflesh(ModeType.Test);
    }
}

/**
 * 運行日が本日かどうか
 * @param operate_Date 運行日
 * @returns true/false
 */
function IsToday(operate_Date) {

    var date = new Date(operate_Date);

    // operate_Dateが日付書式でない場合
    if (date.toDateString() === 'Invalid Date')
        return false;

    var today = new Date();

    return date.toDateString() === today.toDateString();
}
