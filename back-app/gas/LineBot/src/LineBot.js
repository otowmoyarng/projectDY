const LINEAPI_PushMessage_Broadcast = 'https://api.line.me/v2/bot/message/broadcast';

class LineBot {

    /**
     * LineBotへテキストメッセージを送信する
     */
    static SendBroadcast(message) {
        const payload = {
            messages: [
                { type: 'text', text: message }
            ]
        };

        const options = {
            contentType: 'application/json',
            headers: {
                Authorization: 'Bearer ' + GASProperties.GetProperty(GASPropertiesKey.ChannelAccessToken)
            },
            payload: JSON.stringify(payload)
        };
        UrlFetchApp.fetch(LINEAPI_PushMessage_Broadcast, options);
    }
}