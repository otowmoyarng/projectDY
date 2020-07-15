@ECHO OFF

REM テスト実行ファイルの設定
SET testfile=%~dp0testcode.py
echo testfile=%testfile%

REM ユニットテストを実行する
python -m unittest -v %testfile%
