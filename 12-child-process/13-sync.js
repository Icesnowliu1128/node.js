#!/usr/bin/env node

const cp = require('child_process');

cp.spawnSync('./03-child.js',[],{stdio:['ignore',1,2]});

console.log(`I am a father process:${process.pid}`);
