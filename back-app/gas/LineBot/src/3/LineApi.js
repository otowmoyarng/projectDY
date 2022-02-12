const LineAPI_EntryPoint = {
    Broadcast: 'https://api.line.me/v2/bot/message/broadcast',
    Reply: 'https://api.line.me/v2/bot/message/reply',
    Push: 'https://api.line.me/v2/bot/message/push',
    MultiCast: 'https://api.line.me/v2/bot/message/multicast',
    Profile: 'https://api.line.me/v2/bot/profile/',
    RichMenu: 'https://api.line.me/v2/bot/richmenu',
    UploadRichMenu: 'https://api-data.line.me/v2/bot/richmenu',
    AttachRichMenu: 'https://api.line.me/v2/bot/user'
};
const ReplyMessageSendMaxCount = 5;
const ChannelAccessToken = GASProperties.GetProperty(GASPropertiesKey.ChannelAccessToken);
const OptionBase = {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + ChannelAccessToken,
    },
    payload: ''
};

class LineApi {

    /**
     * テキストメッセージをリプライ送信する
     * 
     * @param replyToken リプライトークン
     * @param replyMessages 返信するメッセージ配列
     */
    ReplyTextMessage(replyToken, replyMessages) {
        const messages = [];
        replyMessages.forEach((m) => {
            messages.push({
                type: 'text',
                text: m
            })
        })

        let options = Object.assign({}, OptionBase);
        options.payload = JSON.stringify({
            replyToken: replyToken,
            messages: messages
        });
        UrlFetchApp.fetch(LineAPI_EntryPoint.Reply, options);
    }

    /**
     * フレックスメッセージをリプライ送信する
     * 
     * @param replyToken リプライトークン
     */
    ReplyFlexMessage(replyToken) {

        let template = {
            type: 'flex',   // flex
            altText: '今月の運行予定', // 代替テキスト
            contents: {
                type: "bubble",
                body: {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "button",
                                    action: {
                                        type: "message",
                                        label: "←",
                                        text: "2022/01"
                                    },
                                    position: "relative"
                                },
                                {
                                    type: "filler"
                                },
                                {
                                    type: "text",
                                    text: "Now",
                                    align: "center",
                                    gravity: "center",
                                    wrap: true
                                },
                                {
                                    type: "filler"
                                },
                                {
                                    type: "button",
                                    action: {
                                        type: "message",
                                        label: "→",
                                        text: "2022/03"
                                    }
                                }
                            ]
                        },
                        {
                            type: "separator"
                        },
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "text",
                                    text: "日",
                                    align: "center",
                                    gravity: "center",
                                    color: "#ff0000"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "月",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "火",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "水",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "木",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "金",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "土",
                                    align: "center",
                                    gravity: "center",
                                    color: "#0000ff"
                                },
                                {
                                    type: "separator"
                                }
                            ],
                            spacing: "md"
                        },
                        {
                            type: "separator"
                        },
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "text",
                                    align: "center",
                                    gravity: "center",
                                    color: "#ff0000",
                                    text: " "
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: " ",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "1",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "2",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "3",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "4",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "5",
                                    align: "center",
                                    gravity: "center",
                                    color: "#0000ff"
                                },
                                {
                                    type: "separator"
                                }
                            ],
                            spacing: "md"
                        },
                        {
                            type: "separator"
                        },
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "text",
                                    text: "6",
                                    align: "center",
                                    gravity: "center",
                                    color: "#ff0000"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "7",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "8",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "9",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "10",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "11",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "12",
                                    align: "center",
                                    gravity: "center",
                                    color: "#0000ff"
                                },
                                {
                                    type: "separator"
                                }
                            ],
                            spacing: "md"
                        },
                        {
                            type: "separator"
                        },
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "text",
                                    text: "13",
                                    align: "center",
                                    gravity: "center",
                                    color: "#ff0000"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
                                        {
                                            type: "text",
                                            text: "14",
                                            align: "center",
                                            gravity: "center"
                                        }
                                    ],
                                    backgroundColor: "#ffdc00",
                                    spacing: "none",
                                    action: {
                                        type: "message",
                                        label: "14",
                                        text: "のぼり下り"
                                    }
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
                                        {
                                            type: "text",
                                            text: "15",
                                            align: "center",
                                            gravity: "center"
                                        }
                                    ],
                                    backgroundColor: "#ffdc00",
                                    spacing: "none",
                                    action: {
                                        type: "message",
                                        label: "14",
                                        text: "のぼり下り"
                                    }
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "16",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "17",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "18",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "19",
                                    align: "center",
                                    gravity: "center",
                                    color: "#0000ff"
                                },
                                {
                                    type: "separator"
                                }
                            ],
                            spacing: "md"
                        },
                        {
                            type: "separator"
                        },
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "text",
                                    text: "20",
                                    align: "center",
                                    gravity: "center",
                                    color: "#ff0000"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "21",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "22",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "23",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "24",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "25",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "26",
                                    align: "center",
                                    gravity: "center",
                                    color: "#0000ff"
                                },
                                {
                                    type: "separator"
                                }
                            ],
                            spacing: "md"
                        },
                        {
                            type: "separator"
                        },
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "text",
                                    text: "27",
                                    align: "center",
                                    gravity: "center",
                                    color: "#ff0000"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: "28",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: " ",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: " ",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: " ",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: " ",
                                    align: "center",
                                    gravity: "center"
                                },
                                {
                                    type: "separator"
                                },
                                {
                                    type: "text",
                                    text: " ",
                                    align: "center",
                                    gravity: "center",
                                    color: "#0000ff"
                                },
                                {
                                    type: "separator"
                                }
                            ],
                            spacing: "md"
                        },
                        {
                            type: "separator"
                        }
                    ]
                }
            }
        };
        let options = Object.assign({}, OptionBase);
        options.payload = JSON.stringify({
            replyToken: replyToken,
            messages: [template]
        });
        UrlFetchApp.fetch(LineAPI_EntryPoint.Reply, options);
    }

    // /**
    //  * ボタン型テンプレートメッセージをリプライ送信する
    //  * 
    //  * @param replyToken リプライトークン
    //  * @param title title
    //  * @param imgSrc 画像URL
    //  * @param question 質問内容
    //  * @param choices 選択肢
    //  */
    // ReplyButtonMessage(replyToken, title, imgSrc, question, choices) {
    //     const actions = [];
    //     choices.split(',').forEach(choice => {
    //         actions.push({
    //             type: 'message',
    //             label: choice,
    //             text: choice
    //         });
    //     });

    //     let template = {
    //         type: 'template',   // template固定
    //         altText: 'altText', // 代替テキスト
    //         template: {
    //             type: 'buttons',                // button固定
    //             imageAspectRatio: 'rectangle',  // 画像のアスペクト rectangle/square
    //             imageSize: 'contain',           // 画像の表示形式 cover/contain
    //             title: title,                   // タイトル
    //             text: question,                 // メッセージテキスト
    //             actions: actions                // タップされたときのアクション
    //         }
    //     };
    //     if (!IsNullOrEmpty(imgSrc)) {
    //         template.template['thumbnailImageUrl'] = imgSrc;
    //     }
    //     let options = Object.assign({}, OptionBase);
    //     options.payload = JSON.stringify({
    //         replyToken: replyToken,
    //         messages: [template]
    //     });
    //     UrlFetchApp.fetch(LineAPI_EntryPoint.Reply, options);
    // }

    // /**
    //  * ブロードキャストメッセージを送る
    //  * @param   message 送信メッセージ
    //  */
    // BroadcastMessage(message) {
    //     const payload = {
    //         messages: [
    //             { type: 'text', text: message }
    //         ]
    //     };

    //     let options = Object.assign({}, OptionBase);
    //     options.payload = JSON.stringify(payload);
    //     UrlFetchApp.fetch(LineAPI_EntryPoint.Broadcast, options);
    // }

    /**
     * プッシュメッセージを送る
     * @param userId ユーザーID
     * @param pushmessage メッセージオブジェクト
     */
    PushTextMessage(userId, pushmessage) {
        const messages = [];
        pushmessage.forEach((m) => {
            messages.push({
                type: 'text',
                text: m
            })
        })

        let options = Object.assign({}, OptionBase);
        options.payload = JSON.stringify({
            to: userId,
            messages: messages
        });
        UrlFetchApp.fetch(LineAPI_EntryPoint.Push, options);
    }

    // /**
    //  * ボタンテンプレートメッセージをプッシュ送信する
    //  * 
    //  * @param userId ユーザーID
    //  * @param title title
    //  * @param imgSrc 画像URL
    //  * @param question 質問内容
    //  * @param choices 選択肢
    //  */
    // PushBottunMessage(userId, title, imgSrc, question, choices) {
    //     const actions = [];
    //     choices.split(',').forEach(choice => {
    //         actions.push({
    //             type: 'message',
    //             label: choice,
    //             text: choice
    //         });
    //     });

    //     let template = {
    //         type: 'template',   // template固定
    //         altText: 'altText', // 代替テキスト
    //         template: {
    //             type: 'buttons',                // button固定
    //             imageAspectRatio: 'rectangle',  // 画像のアスペクト rectangle/square
    //             imageSize: 'contain',           // 画像の表示形式 cover/contain
    //             title: title,                   // タイトル
    //             text: question,                 // メッセージテキスト
    //             actions: actions                // タップされたときのアクション
    //         }
    //     };
    //     if (!IsNullOrEmpty(imgSrc)) {
    //         template.template['thumbnailImageUrl'] = imgSrc;
    //     }
    //     let options = Object.assign({}, OptionBase);
    //     options.payload = JSON.stringify({
    //         to: userId,
    //         messages: [template]
    //     });
    //     UrlFetchApp.fetch(LineAPI_EntryPoint.Push, options);
    // }
}

const LineApiDriver = new LineApi();