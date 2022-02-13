const SpreadSheet = SpreadsheetApp.getActiveSpreadsheet();

const Sheet = {
    Calender: SpreadSheet.getSheetByName('運行予定日'),
    UpTimeTable: SpreadSheet.getSheetByName('時刻表（上り）'),
    DownTimeTable: SpreadSheet.getSheetByName('時刻表（下り）'),
    Config: SpreadSheet.getSheetByName('config'),
};

class SheetAccessor {

    GetCalenders() {
        const calenderAll = Sheet.Calender.getDataRange().getValues();
        calenderAll.shift();
        return calenderAll;
    }

    GetCalender(dateMonth) {
        const calenderAll = this.GetCalenders();
        let calenderList = calenderAll.filter(row => row[row.length - 1] === dateMonth);
        return calenderList;
    }

    // /**
    //  * ユーザーを取得する
    //  * @param userId ユーザーID
    //  * @returns 該当ユーザー行
    //  */
    // GetUser(userId) {
    //     const quizCount = this.GetAllQuizzes().length - 1;
    //     const result = Sheet.User.createTextFinder(userId).findAll();

    //     let userData;
    //     result.forEach(row => {
    //         // 縦：ユーザーIDの行のみ、横は先頭からquizシートの問題数まで
    //         userData = Sheet.User.getRange(row.getRow(), 1, 1, quizCount + UserColumnNo.CurrentQuizNo).getValues();
    //     });
    //     return userData;
    // }

    // /**
    //  * 該当ユーザーを更新する
    //  * @param userId ユーザーID
    //  * @param columnNo カラム
    //  * @param modifyValue 変更する値
    //  */
    // updateUser(userId, columnNo, modifyValue) {
    //     const result = Sheet.User.createTextFinder(userId).findAll();
    //     result.forEach(row => {
    //         Sheet.User.getRange(row.getRow(), columnNo).setValue(modifyValue);
    //     });
    // }

    // AddUser(userId) {
    //     const insertRow = [userId, State.Waiting, 0].concat(Array.from({ length: this.GetAllQuizzes().length - 1 }, () => ''));
    //     Sheet.User.appendRow(insertRow);
    // }

    // RemoveUser(userId) {
    //     const result = Sheet.User.createTextFinder(userId).findAll();
    //     result.forEach(row => {
    //         Sheet.User.deleteRow(row.getRow());
    //     });
    // }

    // GetAllUsers() {
    //     return Sheet.User.getDataRange().getValues();
    // }

    // GetStatus(userId) {
    //     const userData = this.GetUser(userId);
    //     return userData[0][UserColumnNo.State - 1];
    // }

    // SetStatus(userId, status = "") {
    //     this.updateUser(userId, UserColumnNo.State, status);
    // }

    // GetQuizNo(userId) {
    //     const userData = this.GetUser(userId);
    //     return userData[0][UserColumnNo.CurrentQuizNo - 1];
    // }

    // SetQuizNo(userId, quizNo = 0) {
    //     this.updateUser(userId, UserColumnNo.CurrentQuizNo, quizNo);
    // }

    // CountUpQuizNo(userId) {
    //     let currentQuizNo = this.GetQuizNo(userId);
    //     this.updateUser(userId, 3, ++currentQuizNo);
    // }

    // GetAllQuizzes() {
    //     return Sheet.Quiz.getDataRange().getValues();
    // }

    // GetAnswer(userId, answerNo) {
    //     const userData = this.GetUser(userId);
    //     return userData[0][(UserColumnNo.CurrentQuizNo - 1) + answerNo];
    // }

    // ClearAnswer(userId) {
    //     const questionCount = this.GetAllQuizzes().length - 1;
    //     for (let index = 1; index <= questionCount; index++) {
    //         this.updateUser(userId, UserColumnNo.CurrentQuizNo + index, undefined);
    //     }
    // }

    // SetAnswer(userId, answer) {
    //     let currentQuizNo = this.GetQuizNo(userId);
    //     this.updateUser(userId, UserColumnNo.CurrentQuizNo + currentQuizNo, answer);
    // }
}

const sheetAccessor = new SheetAccessor();