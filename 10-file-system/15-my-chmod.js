#!/usr/bin/env node

const fs=require('fs'),
      // err=console.error,
      src=process.argv[2],
      mod=process.argv[3];
      // log=console.log;

//./15-mod.js file mod

fs.chmodSync(src,mod);


//if(process.argv.length!==4){
//err('命令参数不正确！')；
//process.exit(1);
//}
//try{
//console.log(src,parseInt(mod,8));
//}catch(e){
//err(e.message);
//process.exit(2);
//}

