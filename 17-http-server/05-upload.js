#!/usr/bin/env node

const http=require('http'),
      log=console.log;
const html=
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>登录页面</title>
</head>
<body>
<form action="">
  <lable>用户名</lable>
  <input type="test" name='username'/>
  <br/>
  <lable>密码</lable>
  <input type="password" name='password'/>
  <br/>
  <input type="button" value='login'/>
</form>
</body>
</html>`
http.createServer((req,res)=>{  
  if(req.url!=='/'){
    res.statusCode=404;
    res.setHeader=('Content-Type','text/html');
    res.end('<h1>Not Found</h1>');
    return;
  }
  req.pipe(process.stdout);

  res.end('ok');
}).listen(8080);
