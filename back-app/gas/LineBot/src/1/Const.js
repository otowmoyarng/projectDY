const Operation = {
    When: 'いつはしる？',
    Where: 'いまどこ？',
};

function IsNullOrEmpty(strings) {
    if (strings === undefined) {
        return true;
    }
    if (strings === null) {
        return true;
    }
    if (strings === '') {
        return true;
    }
    return false;
}

/**
 * プロジェクトのプロパティに登録されたテスト用のユーザーIDを取得する。
 * @returns テスト用ユーザーID
 */
function GetTestUserId() {
    const value = PropertiesService.getScriptProperties().getProperty(GASPropertiesKey.UserId);
    if (value === null) {
        console.error(`key[${key}]がプロパティに存在しません。`);
    }
    return value;
}