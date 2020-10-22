#!/usr/bin/env node

const cp = require('child_process'),
      cmd = process.argv[2],
      args = process.argv.slice(3,process.argv.length);

console.log(cmd);
console.log(args);
process.exit();

cp.execFile(cmd,args,(err,stdout)=>{
  console.log(stdout.toString('utf-8'));
});
//cp.execFile('cat',['01-exec-file.js'],(err,stdout) =>{
//  console.log(stdout.toString('utf-8'));
//});

//./01-exec-file.js cmd args
