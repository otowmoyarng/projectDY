/**
 * LINEからのwebhookに対応するエントリポイント
 * @param request HTTPRequest
 */
function doPost(request) {

    try {
        // POSTリクエストをJSONデータにパース
        const receiveJSON = JSON.parse(request.postData.contents);
        const event = receiveJSON.events[0];

        routing(event);

    } catch (ex) {
        console.error("エラー発生", ex);
    }
}

function routing(event) {

    // いつはしる？（当月）→運行予定カレンダー（当月）を表示する
    if (event.message.text === Operation.When) {
        return calender.Show(event.replyToken);
        // いつはしる？（以外）→指定された運行予定カレンダーを表示する
    } else if (DateUtil.Convert(event.message.text) !== null) {
        return calender.Show(event.replyToken, event.message.text);
        // いまどこ？→選択肢を表示する
    } else if (event.message.text === Operation.TimeTable) {
        return userSecection.Show(event.replyToken);
        // 選んだ時刻表を表示する
    } else if (Choices.filter(choice => choice === event.message.text).length > 0) {
        return timeTable.Show(event.replyToken, event.message.text);
    } else {
        // let messages = [`userid:${event.source.userId}`, `text:${event.message.text}`];
        // messages.push('この操作は対応しておりません。');
        // return LineApiDriver.ReplyTextMessage(event.replyToken, messages);
        return LineApiDriver.ReplyTextMessage(event.replyToken, ['この操作は対応しておりません。']);
    }
}