#!/usr/bin/env node

const cp = require('child_process');
//      cmd = process.argv[2],
//      args = process.argv.slice(3,process.argv.length);

//console.log(cmd);
//console.log(args);
//process.exit();

//let child=cp.spawn(cmd,args,(err,stdout)=>{
//  console.log(stdout.toString('utf-8'));
//});

let child=cp.spawn('cat',['01-exec-file.js']);
//    ,(err,stdout) =>{
//  console.log(stdout.toString('utf-8'));
//});

child.stdout.pipe(process.stdout);

//./01-exec-file.js cmd args
