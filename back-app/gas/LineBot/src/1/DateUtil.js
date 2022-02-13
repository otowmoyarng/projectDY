class DateUtil {

    /**
     * 現在日付をyyyy/MM/dd形式で取得する
     * @param date 日付
     * @returns 
     */
    static GetCurrentYmd(date) {
        return Utilities.formatDate((date ? date : new Date()), 'Asia/Tokyo', 'yyyy/MM/dd');
    }

    /**
     * 現在日付をyyyy/MM形式で取得する
     * @param date 日付
     * @returns 
     */
    static GetCurrentYm(date) {
        return Utilities.formatDate((date ? date : new Date()), 'Asia/Tokyo', 'yyyy/MM');
    }

    /**
     * 日付文字列からDateオブジェクトに変換する
     * @param dateStrings 日付文字列
     */
    static Convert(dateStrings) {

        // 異常値の場合は変換しない
        if (!dateStrings || dateStrings == null) {
            return null;
        }

        // /が含まれていない場合は変換しない
        if (dateStrings.indexOf('/') === -1) {
            return null;
        }

        let dateSplit = dateStrings.split("/");
        // 年部分や月部分の桁数が不正な場合は変換しない
        if (dateSplit[0].length !== 4 || dateSplit[1].length !== 2) {
            return null;
        }

        if (dateSplit.length == 2) {
            dateSplit.push(1);
        }
        return new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);
    }
}
