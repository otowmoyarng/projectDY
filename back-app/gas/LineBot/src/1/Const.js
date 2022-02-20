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

const TrainType = {
    Nozomi: 'のぞみ',
    Kodama: 'こだま',
};

const Destination = {
    Up: '上り',
    Down: '下り',
};

const ColorCode = {
    Red: '#ff0000',
    Blue: '#0000ff',
    Black: '#000000',
    DoctorYellow: '#ffdc00',
}

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
    const value = PropertiesService.getScriptProperties().getProperty('LINE_UserId');
    if (value === null) {
        console.error(`key[${key}]がプロパティに存在しません。`);
    }
    return value;
}