#!/usr/bin/env node

const fs=require('fs'),
      src=process.argv[2], 
      //||__fileName,
      log=console.log;
log(fs.statSync(src));
//try{
//  console.log(fs.statSync(src));
//}catch{
//  console.error(e.message);
//  process.exit(1);
//}

//17-stat.js file
