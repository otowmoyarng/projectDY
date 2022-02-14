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
     * 指定年月の加算／減算
     * @param date 日付
     * @param monthValue 加算／減算する月数
     * @returns Dateオブジェクト
     */
    static AddMonth(date, monthValue) {
        // 基準の年月日を取得
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();

        // 基準の年月からDateオブジェクトを生成
        var newDate = new Date(year, month);
        // 月の設定を変更
        newDate.setMonth(newDate.getMonth() + monthValue);
        // 末日を取得
        var lastDay = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate();
        // 元の日にちが該当月に無い場合はその月の末日を設定する
        if (lastDay < day) {
            newDate.setDate(lastDay);
        } else {
            newDate.setDate(day);
        }
        return newDate;
    }

    /**
     * 指定日の月末日付を返す
     * @param date 日付
     * @returns Dateオブジェクト
     */
    static GetDateEndOfMonth(date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
}
