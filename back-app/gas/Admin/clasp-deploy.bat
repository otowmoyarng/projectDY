@echo off
rem ==============
rem パラメータ
rem %1･･･deploymentId
rem %2･･･環境文字列(test/prod)
rem ==============

if "%1" == "" (
    echo deploymentIdが指定されていないため終了する
    goto PARAM_ERROR
)
if "%2" == "" (
    echo 環境文字列が指定されていないため終了する
    goto PARAM_ERROR
)

echo gas deploy %2 start

echo 説明を入力します
set /p description="説明："
clasp deploy --deploymentId %1 --description %description%

echo gas deploy %2 finish

:PARAM_ERROR
exit /B