/**
 * GASProperties用テスト関数
 */
function TestGetProperty() {
    console.log(`key:${GASPropertiesKey.ChannelAccessToken},value:${GASProperties.GetProperty(GASPropertiesKey.ChannelAccessToken)}`);
}