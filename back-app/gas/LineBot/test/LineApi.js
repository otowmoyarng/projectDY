function LineApiTest_generateOption() {
    console.log("option:", LineApiDriver.generateOption());
}

function LineApiTest_PushFlexMessage() {
    console.log("テキストメッセージ：プッシュ送信開始");
    LineApiDriver.PushFlexMessage(GetTestUserId(), calender.createCalender());
    console.log("テキストメッセージ：プッシュ送信完了");
}