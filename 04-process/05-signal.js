#!/usr/bin/env node

const log= console.log;
log('PID:',process.pid);

process.stdin.resume();
process.on('SIGINT',()=>{
  log('You have processed Ctrl + C,Good bye!');
  process.exit();
});

process.on('SIGTSP',()=>{
  log('You have pressed Ctrl + Z.');
});
