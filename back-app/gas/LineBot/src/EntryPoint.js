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

    // いまどこ？→時刻表を表示する
    // いつはしる？→運行予定カレンダー（当月）を表示する
    let messages = [`userid:${event.source.userId}`, `text:${event.message.text}`];
    if (event.message.text === Operation.When) {
        messages.push('カレンダーを表示します。');
    } else if (event.message.text === Operation.Where) {
        messages.push('時刻表を表示します。');
    } else {
        messages.push('この操作は対応しておりません。');
    }
    return LineApiDriver.ReplyTextMessage(event.replyToken, messages);
}