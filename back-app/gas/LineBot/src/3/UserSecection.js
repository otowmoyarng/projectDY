
class UserSecection {

    /**
     * どの時刻表を表示するか、選択肢を作成する
     * @param replyToken リプライトークン
     */
    Show(replyToken) {
        const title = "えらんで";
        const question = "どの時刻表を表示する？";
        return LineApiDriver.ReplyButtonMessage(replyToken, title, null, question, Choices);
    }
}

const userSecection = new UserSecection();