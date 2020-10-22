#!/usr/bin/env node
const http=require('http'),
      log=console.log,
      fs=require('fs');
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  let fileName=__dirname+req.url;
  //    fileData=fs.createReadStream(fileName).pipe(res);

  //错误处理方式一：主动防御
  if(fs.exitsSync(fileName)){
    fs.createReadStream(fileName).pipe(res);
  }else{
    res.statusCode=404;
    res.end(req.url+'not exist!');
  }
/*错误处理方式二：error事件捕获
  let s =fs.createReadStream(file);
  s.on('error',(err)=>{
    console.log(err.message);
    res.statusCode=404;
    res.end(err.message);
  });
  s.pipe(res);
  */
}).listen(8080);
