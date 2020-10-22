#!/usr/bin/env node

const fs=require('fs'),
      dirName=process.argv[2],
      err=console.error;
try{
  fs.rmdirSync(dirName);
}catch(e){
  err(e.message);
  process.exit(1);
}
