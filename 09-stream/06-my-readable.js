#!/usr/bin/env node

const Readable=require('stream').Readable;

let  c='a'.charCodeAt(0);
  
class Myreadable extends Readable{
  constructor(){
    super();
  }
  _read(){
    rs.push(String.fromCharCode(c++));
    if(c>'z'.charCodeAt(0)) rs.push(null);
  }
}
let rs=new Myreadable();
rs.pipe(process.stdout);
