function LineApiTest_generateOption() {
    const unittest = mode => {
        Sheet.Config.getRange(ConfigKey.Mode).setValue(mode);
        console.log(`mode:${Sheet.Config.getRange(ConfigKey.Mode).getValue()}`);
        console.log("option:", LineApiDriver.generateOption());
    };

    // 本番モードで検証
    unittest(ModeType.Product);

    // テストモードで検証
    unittest(ModeType.Test);
}

function LineApiTest_PushFlexMessage() {
    console.log("テキストメッセージ：プッシュ送信開始");
    LineApiDriver.PushFlexMessage(GetTestUserId(), calender.createCalender());
    console.log("テキストメッセージ：プッシュ送信完了");
}