const Operation = {
    TimeTable: 'じこくひょう',
    When: 'いつはしる？',
    Where: 'いまどこ？',
};

const ConfigKey = {
    TokenProduct: 'TokenProduct',
    TokenTest: 'TokenTest',
    Mode: 'Mode',
    Debug: 'Debug',
};

const ModeType = {
    Product: '本番',
    Test: 'テスト',
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