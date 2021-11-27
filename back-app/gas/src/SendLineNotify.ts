import { Key, getProperty } from './PropertiesAccesser'

const ENDPOINT = 'https://notify-api.line.me/api/notify'

/**
 * Line Notifyにメッセージを送信する
 * @param content メッセージ
 */
export function SendLineNotify(content: string) {
    const lineToken: string | null = getProperty(Key.LineToken);
    if (lineToken === null) {
        return;
    }
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions =
    {
        "method": "post",
        "headers": { "Authorization": `Bearer ${lineToken}` },
        "payload": { "message": content }
    };
    UrlFetchApp.fetch(ENDPOINT, options);
}