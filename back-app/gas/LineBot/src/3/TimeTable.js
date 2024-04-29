
class TimeTable {

    /**
     * 時刻表を表示する
     * @param replyToken リプライトークン
     * @param text 送信メッセージ
     */
    Show(replyToken, text) {
        // TODO：text値に該当するシートから時刻表データを取得する
        // TODO：時刻表を生成する
        return LineApiDriver.ReplyTextMessage(replyToken, [`送信内容:${text}`]);
        // TODO：ReplyFlexMessageを送信する
        //return LineApiDriver.ReplyFlexMessage(replyToken, calender);
    }

    /**
     * 送信メッセージからのぞみ/こだまを判定する。
     * @param text 送信メッセージ
     * @returns 判定結果
     */
    getTrainType(text) {
        return text.startsWith(TrainType.Kodama) ? TrainType.Kodama : TrainType.Nozomi;
    }

    /**
     * 送信メッセージから上り/下りを判定する。
     * @param text 送信メッセージ
     * @returns 判定結果
     */
    getDestination(text) {
        return text.endsWith(Destination.Up) ? Destination.Up : Destination.Down;
    }

    /**
     * 時刻表を取得する
     * @param trainType のぞみ/こだま
     * @param destination 上り/下り
     * @returns 時刻表データ
     */
    get(trainType, destination) {
        let result;
        if (destination === Destination.Up) {
            result = sheetAccessor.GetUpTimeTable();
        } else {
            result = sheetAccessor.GetDownTimeTable();
        }

        const table = result.map(row => {
            let timeColumn = 0;
            if (trainType === TrainType.Kodama) {
                timeColumn = 2;
            }
            return {
                Station: row[0],
                ArrivalTime: row[1 + timeColumn],
                DepartureTime: row[2 + timeColumn],
            };
        });
        return table;
    }
}

const timeTable = new TimeTable();