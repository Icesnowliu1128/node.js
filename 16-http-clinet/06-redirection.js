#!/usr/bin/env node
const http=require('http'),
      url=require('url'),
      log=console.log,
      addr='http://www.sian.com/';

let opt=(addr)=>{
  let p=url.parse(addr);

  opt.method='GET';
  opt.headers={'USER-Agent':'curl/7.29.0'};
  return p;
};
get(addr);
function get(ad){
  http.get(opt(ad),(res)=>{
    log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    log(res.headers);
    log();

    if(res.statusCode >= 300 && res.statusCode < 400){
        get(opt(res.headers.location);
    }else{
      res.pipe(process.stdout);
    }
  });
}

get (opt(ad));
