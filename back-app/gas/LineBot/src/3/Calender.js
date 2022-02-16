const Separator = { type: "separator" };
const BoxLayout = {
    type: "box",
    layout: "horizontal",
    contents: [],
    //    backgroundColor: ''
}
const CalenderCell = {
    type: "text",
    text: "",
    align: "center",
    gravity: "center",
    color: ""
}

class Calender {

    /**
      * 運行予定カレンダーを表示する
      * 
      * @param replyToken リプライトークン
      * @param dateMonth 対象年月yyyy/MM
      */
    Show(replyToken, dateMonth = undefined) {
        const calender = this.createCalender(dateMonth);
        return LineApiDriver.ReplyFlexMessage(replyToken, calender);
    }

    createCalender(dateMonth = undefined) {
        let contentsList = [];
        const insertContentsList = item => {
            let box = Object.assign({}, BoxLayout);
            box.contents = item;
            contentsList.push(box);
            contentsList.push(Separator);
        };

        insertContentsList(this.createHeader(dateMonth));
        insertContentsList(this.createBodyHeader());
        const bodyList = this.createBody(dateMonth);
        if (bodyList.length > 0) {
            bodyList.forEach(body => {
                insertContentsList(body);
            });
        }

        let calender = {
            type: "bubble",
            body: {
                type: "box",
                layout: "vertical",
                contents: contentsList
            },
            styles: {
                footer: {
                    separator: true
                }
            }
        }

        const fooderContens = this.createFooter(dateMonth);
        if (fooderContens.length > 0) {
            calender['footer'] = {
                type: "box",
                layout: "vertical",
                contents: fooderContens
            }
        }
        return calender;
    }

    createHeader(dateMonth = undefined) {

        const current = dateMonth ? dateMonth : DateUtil.GetCurrentYm();
        const ym = DateUtil.Convert(current);

        let calenderHead = [{
            type: "button",
            action: {
                type: "message",
                label: "←",
                text: DateUtil.GetCurrentYm(DateUtil.AddMonth(ym, -1))
            },
            position: "relative"
        },
        {
            type: "filler"
        },
        {
            type: "text",
            text: `${ym.getMonth() + 1}月`,
            align: "center",
            gravity: "center",
            wrap: true
        },
        {
            type: "filler"
        },
        {
            type: "button",
            action: {
                type: "message",
                label: "→",
                text: DateUtil.GetCurrentYm(DateUtil.AddMonth(ym, 1))
            }
        }];

        return calenderHead;
    }

    createBodyHeader() {
        const weeks = ['日', '月', '火', '水', '木', '金', '土'];
        let headers = [];
        for (let day = 0; day < 7; day++) {
            headers.push(this.generateCalenderCell(weeks[day], day));
            headers.push(Separator);
        }
        return headers;
    }

    createBody(dateMonth) {
        // CalenderCellの２次元配列を返す
        let bodyList = [];
        let rows = [];

        // 現在日時を取得する
        const ym = dateMonth ? dateMonth : DateUtil.GetCurrentYm();
        let targetDate = DateUtil.Convert(ym);
        const startDate = DateUtil.Convert(ym);
        const endDate = DateUtil.GetDateEndOfMonth(startDate);

        const calenderList = this.calenders(ym);

        // 日曜開始でなければ日曜開始の日付からスタート
        if (targetDate.getDay() !== 0) {
            targetDate.setDate(targetDate.getDate() - targetDate.getDay());
        }

        // 翌月までループ
        let canLoop = true;
        while (canLoop) {

            let text = (targetDate < startDate || targetDate > endDate) ? ` ` : String(targetDate.getDate());
            const cell = this.generateCalenderCell(text, targetDate.getDay());

            const matchList = calenderList.filter(row => row.Date === DateUtil.GetCurrentYmd(targetDate));
            if (matchList.length === 0) {
                rows.push(cell);
            } else {
                let box = Object.assign({}, BoxLayout);
                box['backgroundColor'] = ColorCode.DoctorYellow;
                box.contents = [cell];
                rows.push(box);
            }
            rows.push(Separator);

            // 7つ揃ったら次の行へ
            if (rows.length === 14) {
                bodyList.push(rows);
                rows = [];
            }

            targetDate.setDate(targetDate.getDate() + 1);

            // カレンダーが埋まったら終了
            if (bodyList.length == 5) {
                canLoop = false;
            }
        }
        return bodyList;
    }

    generateCalenderCell(text, day) {

        let cell = Object.assign({}, CalenderCell);
        cell.text = text;
        switch (day) {
            case 0: // 日曜
                cell.color = ColorCode.Red;
                break;
            case 6: // 土曜
                cell.color = ColorCode.Blue;
                break;
            default: // 平日
                cell.color = ColorCode.Black;
                break;
        }
        return cell;
    }

    createFooter(dateMonth) {
        const ym = dateMonth ? dateMonth : DateUtil.GetCurrentYm();
        const result = this.calenders(ym);
        const footers = result.map(row => {
            let text = `${DateUtil.Convert(row.Date).getDate()}日：${row.Train}${row.Destination}`;
            if (!IsNullOrEmpty(row.Remarks)) {
                text += `（${row.Remarks}）`
            }
            return {
                type: "text",
                text: "　",
                contents: [
                    {
                        type: "span",
                        text: text
                    }
                ]
            };
        });

        return footers;
    }

    calenders(dateMonth = undefined) {
        let result;
        if (dateMonth) {
            result = sheetAccessor.GetCalender(dateMonth);
        } else {
            result = sheetAccessor.GetCalenders();
        }

        const calenders = result.map(row => {
            return {
                Date: row[0],
                Train: row[1],
                Destination: row[2],
                Hit: row[3],
                Remarks: row[4],
                FetchYM: row[5],
            };
        });
        return calenders;
    }
}

const calender = new Calender();