function TimeTableTest_get() {
    const params = [
        {
            TrainType: TrainType.Nozomi,
            Destination: Destination.Down
        },
        {
            TrainType: TrainType.Nozomi,
            Destination: Destination.Up
        },
        {
            TrainType: TrainType.Kodama,
            Destination: Destination.Down
        },
        {
            TrainType: TrainType.Kodama,
            Destination: Destination.Up
        }
    ];
    params.forEach(param => {
        console.log(`param:${param.TrainType + param.Destination}, result:`, timeTable.get(param.TrainType, param.Destination));
    });
}