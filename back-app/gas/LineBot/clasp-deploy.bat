@echo off
rem ==============
rem �p�����[�^
rem %1���deploymentId
rem %2�����������(test/prod)
rem ==============

if "%1" == "" (
    echo deploymentId���w�肳��Ă��Ȃ����ߏI������
    goto PARAM_ERROR
)
if "%2" == "" (
    echo �������񂪎w�肳��Ă��Ȃ����ߏI������
    goto PARAM_ERROR
)

echo gas deploy %2 start

echo ��������͂��܂�
set /p description="�����F"
clasp deploy --deploymentId %1 --description %description%

echo gas deploy %2 finish

:PARAM_ERROR
exit /B