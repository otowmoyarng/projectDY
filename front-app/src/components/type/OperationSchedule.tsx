/**
 * OperationSchedule
 * SSSApiAccessor.GetOperationSchedule()の実行結果を格納する型インターフェース
 */
export default interface OperationSchedule {
    Date: string;
    Train: string;
    Destination: string;
    Hit: string;
    Remarks: string;
}