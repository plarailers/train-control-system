type TrainState = {
    [key: string]: { mileage: number }
};

function trainLocation(trainState: TrainState): TrainState {
    for (let key in trainState) {
        if (trainState.hasOwnProperty(key)) {
            trainState[key].mileage = (trainState[key].mileage + 1) % 100;
        }
    }
    return trainState;
};

export { TrainState, trainLocation };
