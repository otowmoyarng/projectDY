import axios from "axios";
import OperationSchedule from './type/OperationSchedule'
import TimeTable from './type/TimeTable'

export default class SSSApiAccessor {

    /**
     * 運行予定日を取得する
     */
    static async GetOperationSchedule(): Promise<OperationSchedule[]> {
        const url: string = "https://api.sssapi.app/XDVhDYbHLKe6nau6gYCIL";
        return await this.CallAxios<OperationSchedule>(url, true);
    }

    /**
     * 時刻表上りを取得する
     */
    static async GetUpTimeTable(): Promise<TimeTable[]> {
        const url: string = "https://api.sssapi.app/f92OLEFhetUYsm4USwJba";
        return await this.CallAxios<TimeTable>(url, true);
    }

    /**
     * 時刻表下りを取得する
     */
    static async GetDownTimeTable(): Promise<TimeTable[]> {
        const url: string = "https://api.sssapi.app/G1YJ2O1SX7dzE2aVm8_JY";
        return await this.CallAxios<TimeTable>(url, true);
    }

    static async CallAxios<T>(url: string, isDebug?: boolean) {
        return await axios.get<T[]>(url)
            .then(function (response) {
                if (isDebug) {
                    console.log("count:", response.data.length);
                    if (response.data.length > 0) {
                        response.data.forEach((item) => console.log("item", item));
                    }
                }
                return response.data;
            })
            .catch(function (error) {
                console.error(error);
                let emptyResult: T[] = [];
                return emptyResult;
            });
    }
}