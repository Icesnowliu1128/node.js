#!/usr/bin/env node

const pi=require('./02-export-var'),
      chalk=require('chalk'),
      log=console.log,
      green=chalk.greenBright;

log(green('-----------'));
log(green('PI:${PI}'));
log(green('-----------'));

log(module);
