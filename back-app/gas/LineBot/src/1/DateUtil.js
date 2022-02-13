class DateUtil {

    /**
     * 現在日付をyyyy/MM/dd形式で取得する
     * @param date 日付
     * @returns 日付文字列
     */
    static GetCurrentYmd(date) {
        return Utilities.formatDate((date ? date : new Date()), 'Asia/Tokyo', 'yyyy/MM/dd');
    }

    /**
     * 現在日付をyyyy/MM形式で取得する
     * @param date 日付
     * @returns 日付文字列
     */
    static GetCurrentYm(date) {
        return Utilities.formatDate((date ? date : new Date()), 'Asia/Tokyo', 'yyyy/MM');
    }

    /**
     * 日付文字列からDateオブジェクトに変換する
     * @param dateStrings 日付文字列
     * @returns Dateオブジェクト
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

    /**
     * 指定日時の前月を返す。
     * @param date 日付
     * @returns Dateオブジェクト
     */
    static PreviewMonth(date) {
        if (date.getMonth() === 0) {
            return new Date(date.getFullYear() - 1, 11, date.getDate());
        } else {
            date.setMonth(date.getMonth() - 1);
            return date
        }
    }

    /**
     * 指定日時の翌月を返す。
     * @param date 日付
     * @returns Dateオブジェクト
     */
    static NextMonth(date) {
        if (date.getMonth() === 11) {
            return new Date(date.getFullYear() + 1, 0, date.getDate());
        } else {
            date.setMonth(date.getMonth() + 1);
            return date
        }
    }
}
