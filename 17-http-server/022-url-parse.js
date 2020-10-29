#!/usr/bin/env node

const url=require('url'),
      log=console.log,
      qs=require('querystring');

let addr='http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f';
//const 设置为常量

addr=url.parse(addr);

log(addr.protocol);
log(addr.auth);
log(addr.username);
log(addr.password);
log(addr.hostname);
log(addr.port);//hostname+port=host
log(addr.pathname);
log(addr.query);
log(addr.hash);
log(qs.parse(addr.query));

log(addr);
