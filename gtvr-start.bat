@ECHO OFF
start cmd.exe /K "cd ..\..\..\..\..\ && cd programming\python\web_dev\gtvr\gtvr\ && python manage.py runserver "
start cmd.exe /K "cd ..\..\..\..\..\ && cd programming\python\web_dev\gtvr\gtvr\ && npm run build "
start cmd.exe /K "cd ..\..\..\..\..\ && cd programming\python\web_dev\gtvr\gtvr\frontend\static\frontend && less-watch-compiler "
