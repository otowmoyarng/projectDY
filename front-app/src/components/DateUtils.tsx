export default class DateUtils {

    /**
     * 日本時間での現在日時を取得する
     * @returns 現在日時(日本時間)
     */
    static Now(): Date {
        const japanStandardTime = new Date().toLocaleString('UTC', { timeZone: 'Asia/Tokyo' });
        return new Date(japanStandardTime);
    }

    /**
     * 日付文字列からDateオブジェクトに変換する
     * @param   dateString 日付文字列
     * @param   delimiter  区切り文字
     */
    static toDate(dateString: string, delimiter: string): Date {
        let dateParts: string[] = dateString.split(delimiter);
        let convertedDate = new Date(
            Number(dateParts[0]),
            Number(dateParts[1]) - 1,
            Number(dateParts[2]),
            0,
            0,
            0
        );
        return convertedDate;
    }
}
