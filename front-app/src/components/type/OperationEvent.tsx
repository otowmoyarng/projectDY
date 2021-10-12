/**
 * OperationEvent
 * 運行予定項目
 * Calendar.eventにセットする
 */
type OperationEvent = {
    allDay?: boolean,
    title?: string,
    start?: Date,
    end?: Date,
    resource?: any
}
export default OperationEvent;