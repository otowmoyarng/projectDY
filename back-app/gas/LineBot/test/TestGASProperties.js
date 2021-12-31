/**
 * GASProperties用テスト関数
 */
function TestGASProperties() {
    const keys = ['CHANNEL_ACCESS_TOKEN', 'SPREAD_SHEET_ID', 'SHEET_NAME'];

    keys.forEach(
        key => { console.log(`key:${key}, value:${GASProperties.getProperty(key)}`); }
    );
}