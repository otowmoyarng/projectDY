/**
 * 運行日が本日かどうか
 * @param operate_Date 運行日
 * @returns true/false
 */
export function IsToday(operate_Date: string) {

    var date = new Date(operate_Date);
    //console.log("date:", [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.toDateString(), date]);

    // operate_Dateが日付書式でない場合
    if (date.toDateString() === 'Invalid Date')
        return false;

    var today = new Date();
    //console.log("now:", [today.getFullYear(), today.getMonth() + 1, today.getDate(), today.toDateString(), today]);

    return date.toDateString() === today.toDateString();
}