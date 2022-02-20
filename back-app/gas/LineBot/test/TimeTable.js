function TimeTableTest_get() {
    Choices.forEach(choice => {
        const trainType = timeTable.getTrainType(choice);
        const destination = timeTable.getDestination(choice);
        console.log(`choice:${choice}, TrainType:${trainType}, Destination:${destination}`);
        console.log("result:", timeTable.get(trainType, destination));
    });
}