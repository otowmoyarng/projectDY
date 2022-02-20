/**
 * プロジェクトのプロパティに登録されたテスト用のユーザーIDを取得する。
 * @returns テスト用ユーザーID
 */
function GetTestUserId() {
    const key = 'LINE_UserId_' + Sheet.Config.getRange(ConfigKey.Mode).getValue();
    const value = PropertiesService.getScriptProperties().getProperty(key);
    if (value === null) {
        console.error(`key[${key}]がプロパティに存在しません。`);
    }
    return value;
}