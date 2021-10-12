import axios from "axios";
import { OperationSchedule, TimeTable } from './index'

const URL_ROOT: string = 'https://api.sssapi.app';
const enum SSSApiURL {
    OperationSchedule = 'XDVhDYbHLKe6nau6gYCIL',
    UpTimeTable = 'f92OLEFhetUYsm4USwJba',
    DownTimeTable = 'G1YJ2O1SX7dzE2aVm8_JY',
}

export default class SSSApiAccessor {

    /**
     * 運行予定日を取得する
     */
    static GetOperationSchedule(): Promise<OperationSchedule[]> {
        const url: string = `${URL_ROOT}/${SSSApiURL.OperationSchedule}`;
        return this.CallAxios<OperationSchedule>(url);
    }

    /**
     * 時刻表上りを取得する
     */
    static async GetUpTimeTable(): Promise<TimeTable[]> {
        const url: string = `${URL_ROOT}/${SSSApiURL.UpTimeTable}`;
        return await this.CallAxios<TimeTable>(url);
    }

    /**
     * 時刻表下りを取得する
     */
    static async GetDownTimeTable(): Promise<TimeTable[]> {
        const url: string = `${URL_ROOT}/${SSSApiURL.DownTimeTable}`;
        return await this.CallAxios<TimeTable>(url);
    }

    static async CallAxios<T>(url: string, isDebug?: boolean): Promise<T[]> {
        const resolve = (response: any, isDebug?: boolean) => {
            if (isDebug) {
                console.log("count:", response.data.length);
                if (response.data.length > 0) {
                    response.data.forEach((item: any) => console.log("item", item));
                }
            }
            return response.data;
        }
        const reject = (error: any) => {
            console.error(error);
            let emptyResult: T[] = [];
            return emptyResult;
        }
        return await axios.get<T[]>(url)
            .then(response => resolve(response, isDebug))
            .catch(error => reject(error))
    }
}