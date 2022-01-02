/**
 * 管理用メッセージ送信画面を表示する
 * @returns 
 */
function doGet() {
    return generateHtml();
}

/**
 * LineBotへメッセージを送信する
 * @returns 
 */
function doPost(postdata) {

    var message = postdata.parameters.message.toString();
    LineBot.SendBroadcast(message);

    return generateHtml(message);
}

/**
 * html生成関数
 * @param message 送信メッセージ
 * @returns htmlTemplate.evaluate()
 */
function generateHtml(message = "") {
    const htmlTemplate = HtmlService.createTemplateFromFile('src/index');
    htmlTemplate.message = message;
    return htmlTemplate.evaluate();
}