/**
 * TimeTable
 * SSSApiAccessor.GetUpTimeTable()の実行結果を格納する型インターフェース
 */
export default interface TimeTable {
    Station: string;
    ArrivalTime_Nozomi: string;
    DepartureTime_Nozomi: string;
    ArrivalTime_Kodama: string;
    DepartureTime_Kodama: string;
}