#!/usr/bin/env node

const log=console.log,
      usr=process.argv[2],
      pwd=process.argv[3];

if(process.argv.length!==4){
  console.log('命令行格式：cmd username password');
  process.exit(1);
}

log('user name: %s \n password: %s',user,pwd);

const buf=new Buffer(usr+':'+pwd);

log('Based64:',buf.toString('Base64'));

