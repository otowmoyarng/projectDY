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