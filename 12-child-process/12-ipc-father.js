#!/usr/bin/env node
const cp =require('child_process');

console.log(`I am father process :${process.pid}`);

//启动子进程
let son=cp.fork('./11-ipc-child.js'),
    dau=cp.fork('./11-ipc-child.js');

son.on('message',(data)=>{
  console.log(`I have baby:${data}`);
});

dau.on('message',(data)=>{
  console.log(`I have baby:${data}`);
});

//给子进程发消息
setTimeout(()=>{
  son.send('Good Good Study');
},2000);

setTimeout(()=>{
  dau.send('Day Day Up');
},3000);

setTimeout(()=>{
  son.kill('SIGINT');
  dau.kill('SIGINT');
},5000);

