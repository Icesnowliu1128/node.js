#!/usr/bin/env node

const fs=require('fs'),
      src=process.argv[2],
      err=console.error;
if(!fs.exitsSync(src)){
  err('%s not exist!',src);
  process.exit(1);
}

if(!fs.statSync(src).isFile()){
  err('%s is not file!',src);
  process.exit(2);
}
fs.unlinkSync(src);      
