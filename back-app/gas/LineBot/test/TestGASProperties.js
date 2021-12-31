/**
 * GASProperties用テスト関数
 */
function TestGASProperties() {

    const properties = [
        GASPropertiesKey.ChannelAccessToken,
        GASPropertiesKey.SpreadSheetID,
        GASPropertiesKey.SheetName,
    ];
    properties.forEach(
        key => { console.log(`key:${key}`, `value:${GASProperties.GetProperty(key)}`); }
    );
}