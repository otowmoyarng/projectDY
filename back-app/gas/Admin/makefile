scriptId-test = 
scriptId-prod = 
rootDir = 
deployId-test = 
deployId-prod = 

default:
	C:\Windows\System32\cmd.exe /k "C:\Program Files\nodejs\nodevars.bat"

init:
	@make default
	echo exitと入力する
	npm i
	npm install @google/clasp
	npm install google-apps-script
	@make login

login:
	@make default
	echo exitと入力する
	clasp login

push-test:
	echo gas push test start
	clasp setting scriptId $(scriptId-test)
	clasp setting rootDir $(rootDir)
	clasp push
	echo gas push test finish

push-prod:
	echo gas push test start
	clasp setting scriptId $(scriptId-prod)
	clasp setting rootDir $(rootDir)
	clasp push
	echo gas push test finish

deploy-test:
	clasp-deploy.bat $(deployId-test) test
	clasp open $(scriptId-test)

deploy-prod:
	clasp-deploy.bat $(deployId-prod) prod
	clasp open $(scriptId-prod)
