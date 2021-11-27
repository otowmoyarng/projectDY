import { UseCase } from '../src/Main'

function run() {
    console.time("main");
    console.info("run start");
    UseCase.Main();
    console.info("run finish");
    console.timeEnd("main");
}