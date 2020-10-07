#!/usr/bin/env node

const Circlr=require('./04-export-object'),
      chalk=require('chalk'),
      log=console.log,
      green=chalk.greenBright;

var c=new Circle(20);

log(green('--------------------------'));
log(green('area:\t${c.area(20)}'));
log(green('diameter\t${c.diameter(20)}'));
log(green('circumfrenece\t${c.circumfrenece(20)}'));
log(green('------------------------------'));

log(module);
