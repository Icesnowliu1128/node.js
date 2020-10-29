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
  res.setHeader=('Content-Type','text/plain');
  res.end('<h1>Not Found</h1>');
  return;
  }else{
    res.writeHead(200,{
      ' Content-Type':'text/html',
      'Content-Length':Buffer.byteLength(html)
    });
  //res.statusCode=200;
  //res.getHeader('Content-Type','text/html');
  //res.setHeader('Content-Length',Buffer.byteLength(html));
    res.end(html);
  }
}).listen(8080);
