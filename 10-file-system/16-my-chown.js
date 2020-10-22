#!/usr/bin/env node

const fs=require('fs'),
      //err=console.error,
      uid=process.argv[2],
      gid=process.argv[3],
      src=process.argv[4];
      //log=console.log;

//16-chown.js uid:gid file

//if(process.argv.length!==5){
//  err('命令参数不正确！')；
//  process.exit(1);
//}
//try{
fs.chownSync(src,Number(uid),Number(gid));
//}catch(e){
//  err(e.message);
//  process.exit(2);
//}

