function UserSecectionTest_Show() {
    console.log("テキストメッセージ：プッシュ送信開始");
    const title = "えらんで";
    const question = "どの時刻表を表示する？";
    LineApiDriver.PushButtunMessage(GetTestUserId(), title, null, question, Choices);
    console.log("テキストメッセージ：プッシュ送信完了");
}