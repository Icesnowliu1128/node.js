#!/usr/bin/env node

const fs=require('fs'),
      // err=console.error,
      lnkName=process.argv[2],
      log=console.log;

log(`${lnkName}->${fs.readlinkSync(lnkName)}`);
//打出的格式：lnk->src
//现在的格式：lnkName->readlinkSyc
//if(typeof(src)==='undefined'||process.argv.length!==3){
//err('命令参数不正确！')；
// process.exit(1);
//}
//try{
//console.log(src,'->',fs.readlinkSync(src));
//}catch(e){
//err(e.message);
//process.exit(2);
//}

