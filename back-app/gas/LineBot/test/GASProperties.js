/**
 * GASProperties用テスト関数
 */
function GetPropertyTest() {

    const properties = [
        GASPropertiesKey.ChannelAccessToken,
        GASPropertiesKey.UserId,
    ];
    properties.forEach(
        key => { console.log(`key:${key}`, `value:${GASProperties.GetProperty(key)}`); }
    );
}