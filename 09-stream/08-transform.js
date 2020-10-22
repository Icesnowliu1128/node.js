#!/usr/bin/env node

const stdin=process.stdin,
      stdout=process.stdout,
      Trans=require('stream').Transform;

stdin.setEncoding('utf-8');

let tf=new Trans();
  
tf._transform=function(chunk,encoding,callback){
  this.push(Buffer(chunk.toString('utf-8').toUpperCse()));
  callback;
};

stdin.pipe(tf).pipe(stdout);
