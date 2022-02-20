
class TimeTable {

    /**
     * 時刻表を取得する
     * @param trainType のぞみ/こだま
     * @param destination 上り/下り
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