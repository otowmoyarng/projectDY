/**
 * プロジェクトのプロパティに登録されたテスト用のユーザーIDを取得する。
 * @returns テスト用ユーザーID
 */
function GetTestUserId() {
    const value = PropertiesService.getScriptProperties().getProperty(GASPropertiesKey.LINEUserId);
    if (value === null) {
        console.error(`key[${key}]がプロパティに存在しません。`);
    }
    return value;
}