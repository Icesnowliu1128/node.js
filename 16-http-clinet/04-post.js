#!/usr/bin/env node

const http=require('http'),
      log=console.log,
      url=require('url'),
      msg=process.argv[2]||'hello sever!',
      addr='http://localhost:8080';

let opt=url.parse(addr);
opt.method='POST';

let req=http.requst(opt,(res)=>{
  log(`HTTP/$(res.httpVersion)$(res.statusCode)$(res.statusMessage)`);
  log(res,headers);

  res.pipe(process.stdout);
});

req.end(msg);


