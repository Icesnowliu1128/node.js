#!/usr/bin/env node

const http=require('http'),
      log=console.log,
      url=require('url'),
      addr='https://ke.sifou.com/free';

http.get(addr,(res)=>{
  log(`HTTP/${res.httpVersion}${res.statusCode}${res.statusMessage}`);
  log(res,headers);

  res.pipe(process.stdout);
});

//http.get(addr,(res)=>{
//  let data='';

//  res.on('data',(chunk)=>{
//    data+=chunk;
//  });
//  res.on('end',()=>{
//    log(data);
//  });
  
  //res.pipe(process.stdout);
//});


