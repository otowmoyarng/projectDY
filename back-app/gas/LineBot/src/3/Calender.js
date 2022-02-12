class Calender {

    /**
     * 今月の運行予定カレンダーを表示する
     * @param replyToken リプライトークン
     */
    ThisMonth(replyToken) {
        return LineApiDriver.ReplyFlexMessage(replyToken);
    }

    /**
     * 指定されたの運行予定カレンダーを表示する
     * @param replyToken リプライトークン
     * @param targetym 対象年月yyyy/MM
     */
    TargetMonth(replyToken, targetym) {

    }
}

const calender = new Calender();