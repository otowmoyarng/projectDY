import { GASProperties } from '../src/GASProperties'

/**
 * GASProperties用テスト関数
 */
function TestGASProperties() {
    const keys: string[] = ['LINE_NOTIFY_TOKEN', 'SPREAD_SHEET_ID', 'SHEET_NAME'];

    keys.forEach(
        key => { console.log(`key:${key}, value:${GASProperties.getProperty(key)}`); }
    );
}