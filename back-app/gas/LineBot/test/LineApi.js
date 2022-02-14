function LineApiTest_getChannelAccessToken() {

    const unittest = mode => {
        Sheet.Config.getRange(ConfigKey.Mode).setValue(mode);
        console.log(`mode:${Sheet.Config.getRange(ConfigKey.Mode).getValue()}`);
        console.log(`ChannelAccessToken:${getChannelAccessToken()}`);
    };

    // 本番モードで検証
    unittest(ModeType.Product);

    // テストモードで検証
    unittest(ModeType.Test);
}

function LineApiTest_generateOption() {
    console.log("option:", LineApiDriver.generateOption());
}

function LineApiTest_PushFlexMessage() {
    console.log("テキストメッセージ：プッシュ送信開始");
    LineApiDriver.PushFlexMessage(GetTestUserId(), calender.createCalender());
    console.log("テキストメッセージ：プッシュ送信完了");
}