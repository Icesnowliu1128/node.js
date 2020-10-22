#!/usr/bin/env node

const fs=require('fs'),
      fileName=process.argv[2];
//      log=console.log;

//let fid=fs.openSync(fileName,'r'),
//    buf;

//buf=fs.readFileSync(fid);

//log(buf.toString('utf8'));

//fs.closeSync(fid);

try{
  const fid=fs.openSync(fileName,'r');
  fs.writeSync(1,fs.readFileSync(fid).toString('utf8'));
  fs.closeSync(fid);
}catch(e){
  console.error(e.message);
  process.exit(1);
}
