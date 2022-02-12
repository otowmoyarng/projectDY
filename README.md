# 環境構築

実行するコマンド

```bash
npm init -y
npm install @google/clasp
npm install @types/google-apps-script
npm install typescript
npx tsc --init
```

Googleアカウントで認証する

```bash
clasp login --no-localhost
```

claspコマンドが認識されていない時は`Node.js command prompt`から実行する
または、`Node.js command prompt`のプロパティにあるコマンドをVSCodeのターミナル(コマンドプロンプト)で実行する

```cmd
C:\Windows\System32\cmd.exe /k "C:\Program Files\nodejs\nodevars.bat"
```

ターミナル上に出力されたURLへアクセスすると、ログインと権限の許可が求められるので、
ログインするGoogleアカウントを選択し、claspからのアクセスを許可する。
表示された認証コードをターミナルにコピペすると認証が完了する

# 実装編

`GoogleAppsScript`モジュールより型を指定する
隠蔽したい設定値はGASのプロジェクトプロパティから読み書き可能
GASのプロジェクトプロパティは以前のエディタに戻すとファイルメニューにて表示される。
`PropertiesService`クラスからプロパティ値にアクセスできる。

```bash
10:37:16 エラー 
ReferenceError: SendLineNotify_1 is not defined
TestSendLineNotify @ test/SendLineNotify.gs:10
```

１つのファイルから２つ名前付きエクスポートしてコーディングすると、gasにエンコードしたコードで参照できずにエラーが発生する

# 引用

* [claspを使ってGoogle Apps Scriptの開発環境を構築してみた](https://dev.classmethod.jp/articles/vscode-clasp-setting/)
* [GASをclasp（CLIツール）+ TypeScriptでローカルで開発する](https://panda-program.com/posts/clasp-typescript)
