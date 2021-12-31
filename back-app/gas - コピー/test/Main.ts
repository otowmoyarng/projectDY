import { UseCase } from '../src/Main'

/**
 * E2E用テスト関数
 */
function TestMain() {
    console.time("test");
    console.info("run start");
    UseCase.Main();
    console.info("run finish");
    console.timeEnd("test");
}