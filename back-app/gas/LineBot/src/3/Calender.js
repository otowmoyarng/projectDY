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
        // const bodyList = this.createBody(dateMonth);
        // bodyList.forEach(body => {
        //     insertContentsList(body);
        // });

        let calender = {
            type: "bubble",
            body: {
                type: "box",
                layout: "vertical",
                contents: contentsList
            },
            footer: {
                type: "box",
                layout: "vertical",
                contents: this.createFooter(dateMonth)
            },
            styles: {
                footer: {
                    separator: true
                }
            }
        }
        return calender;
    }

    createHeader(dateMonth = undefined) {

        const ym = DateUtil.Convert(dateMonth ? dateMonth : DateUtil.GetCurrentYm());

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
            text: "Now",
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
        weeks.forEach(week => {
            let cell = Object.assign({}, CalenderCell);
            cell.text = week;
            switch (week) {
                case '日':
                    cell.color = ColorCode.Red;
                    break;
                case '土':
                    cell.color = ColorCode.Blue;
                    break;
                default:
                    cell.color = ColorCode.Black;
                    break;
            }
            headers.push(cell);
            headers.push(Separator);
        });
        return headers;
    }

    createBody(dateMonth) {
        return null;
    }

    createFooter(dateMonth) {
        const ym = dateMonth ? dateMonth : DateUtil.GetCurrentYm();
        const result = this.calenders(ym);
        const footers = result.map(row => {
            let text = `${row.Date}：${row.Train}${row.Destination}`;
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

    getCalender() {
        let calenderHead = [{
            type: "button",
            action: {
                type: "message",
                label: "←",
                text: "2022/01"
            },
            position: "relative"
        },
        {
            type: "filler"
        },
        {
            type: "text",
            text: "Now",
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
                text: "2022/03"
            }
        }];
        let calender = {
            type: "bubble",
            body: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: calenderHead
                    },
                    Separator,
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                            {
                                type: "text",
                                text: "日",
                                align: "center",
                                gravity: "center",
                                color: "#ff0000"
                            },
                            Separator,
                            {
                                type: "text",
                                text: "月",
                                align: "center",
                                gravity: "center"
                            },
                            Separator,
                            {
                                type: "text",
                                text: "火",
                                align: "center",
                                gravity: "center"
                            },
                            Separator,
                            {
                                type: "text",
                                text: "水",
                                align: "center",
                                gravity: "center"
                            },
                            Separator,
                            {
                                type: "text",
                                text: "木",
                                align: "center",
                                gravity: "center"
                            },
                            Separator,
                            {
                                type: "text",
                                text: "金",
                                align: "center",
                                gravity: "center"
                            },
                            Separator,
                            {
                                type: "text",
                                text: "土",
                                align: "center",
                                gravity: "center",
                                color: "#0000ff"
                            },
                            Separator
                        ],
                        spacing: "md"
                    },
                    Separator,
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                            {
                                type: "text",
                                align: "center",
                                gravity: "center",
                                color: "#ff0000",
                                text: " "
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: " ",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "1",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "2",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "3",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "4",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "5",
                                align: "center",
                                gravity: "center",
                                color: "#0000ff"
                            },
                            {
                                type: "separator"
                            }
                        ],
                        spacing: "md"
                    },
                    {
                        type: "separator"
                    },
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                            {
                                type: "text",
                                text: "6",
                                align: "center",
                                gravity: "center",
                                color: "#ff0000"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "7",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "8",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "9",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "10",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "11",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "12",
                                align: "center",
                                gravity: "center",
                                color: "#0000ff"
                            },
                            {
                                type: "separator"
                            }
                        ],
                        spacing: "md"
                    },
                    {
                        type: "separator"
                    },
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                            {
                                type: "text",
                                text: "13",
                                align: "center",
                                gravity: "center",
                                color: "#ff0000"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "box",
                                layout: "vertical",
                                contents: [
                                    {
                                        type: "text",
                                        text: "14",
                                        align: "center",
                                        gravity: "center"
                                    }
                                ],
                                backgroundColor: "#ffdc00",
                                spacing: "none",
                                action: {
                                    type: "message",
                                    label: "14",
                                    text: "のぼり下り"
                                }
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "box",
                                layout: "vertical",
                                contents: [
                                    {
                                        type: "text",
                                        text: "15",
                                        align: "center",
                                        gravity: "center"
                                    }
                                ],
                                backgroundColor: "#ffdc00",
                                spacing: "none",
                                action: {
                                    type: "message",
                                    label: "14",
                                    text: "のぼり下り"
                                }
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "16",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "17",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "18",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "19",
                                align: "center",
                                gravity: "center",
                                color: "#0000ff"
                            },
                            {
                                type: "separator"
                            }
                        ],
                        spacing: "md"
                    },
                    {
                        type: "separator"
                    },
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                            {
                                type: "text",
                                text: "20",
                                align: "center",
                                gravity: "center",
                                color: "#ff0000"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "21",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "22",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "23",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "24",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "25",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "26",
                                align: "center",
                                gravity: "center",
                                color: "#0000ff"
                            },
                            {
                                type: "separator"
                            }
                        ],
                        spacing: "md"
                    },
                    {
                        type: "separator"
                    },
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                            {
                                type: "text",
                                text: "27",
                                align: "center",
                                gravity: "center",
                                color: "#ff0000"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: "28",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: " ",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: " ",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: " ",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: " ",
                                align: "center",
                                gravity: "center"
                            },
                            {
                                type: "separator"
                            },
                            {
                                type: "text",
                                text: " ",
                                align: "center",
                                gravity: "center",
                                color: "#0000ff"
                            },
                            {
                                type: "separator"
                            }
                        ],
                        spacing: "md"
                    },
                    {
                        type: "separator"
                    }
                ]
            },
            footer: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                            {
                                type: "text",
                                text: "　",
                                contents: [
                                    {
                                        type: "span",
                                        text: "2/14：のぞみくだり"
                                    }
                                ]
                            }
                        ],
                        justifyContent: "center"
                    },
                    {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                            {
                                type: "text",
                                text: "　",
                                contents: [
                                    {
                                        type: "span",
                                        text: "2/15：のぞみのぼり"
                                    }
                                ]
                            }
                        ],
                        justifyContent: "center"
                    }
                ]
            },
            styles: {
                footer: {
                    separator: true
                }
            }
        }
        return calender;
    }
}

const calender = new Calender();