#!/usr/bin/env node

const sig=process.argv[2],
      pid=process.argv[3],
      err=console.error;

if(process.exit.argv.length<4){
  err('命令行参数少于两个！');
  process.exit(2);
}

if(isNaN(Number(pid))){
  err('pid应该是数值');
  process.exit(3);
}

process.kill(pid,sig);
