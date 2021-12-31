/**
 * プロパティキー名
 */
const GASPropertiesKey = {
    ChannelAccessToken: 'CHANNEL_ACCESS_TOKEN',
};

class GASProperties {

    /**
     * プロパティキーに該当するプロパティ値を取得する
     * @param key プロパティキー
     * @returns プロパティ値
     */
    static getProperty(key) {
        if (key === undefined || key === null || key === "") {
            console.error('keyが指定されていません。');
            return undefined;
        }

        const value = PropertiesService.getScriptProperties().getProperty(key);
        if (value === null) {
            console.error(`key[${key}]がプロパティに存在しません。`);
        }
        return value;
    }
}