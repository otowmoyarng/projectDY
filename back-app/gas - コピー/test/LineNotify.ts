import { LineNotify } from '../src/LineNotify'

/**
 * LINE Notify動作確認用のテスト関数
 */
function TestSendLineNotify(): void {
    LineNotify.SendLineNotify("testSendLineNotifyよりテスト送信");
}