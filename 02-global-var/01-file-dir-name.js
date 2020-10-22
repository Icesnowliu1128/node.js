#!/usr/bin/node

const log=console.log;

log(`file name:${__filename}`);
log(`dir name:${__dirname}`);

let fileName=__dirname+'/view/view.html';

//方案2：不好，代码复杂，平台考虑不全面
switch(process.platform){
  case 'linux':
    fileName=__dirname+'/views/view.html';
    break;

  case 'win32':
    fileName=__dirname+'\\views\\view.html';
    break;

  default:
    fileName='something wrong';
}

log(`fileName:${fileName}`);

//方案三：最佳
const path=require('path');

fileName=path.jion(__dirname,'views','login.html');
log('fileName:',fileName);
