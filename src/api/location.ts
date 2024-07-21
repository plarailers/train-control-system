import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
    let trainState: TrainState = { "t0": { mileage: 0.0 } };
    trainState = testTrainLocation(trainState);
    return c.json({ trainState });
})

type TrainState = {
    [key: string]: { mileage: number }
};

function testTrainLocation(trainState: TrainState): TrainState {
    for (let key in trainState) {
        if (trainState.hasOwnProperty(key)) {
            trainState[key].mileage = (trainState[key].mileage + 0.5) % 100;
        }
    }
    return trainState;
};

export { app, TrainState, testTrainLocation };
