#!/usr/bin/env node
let count=0;

function Num(){}

Num.prototype.add=()=>count++;
Num.prototype.getCount=()=>count;

module.exports=Num;
