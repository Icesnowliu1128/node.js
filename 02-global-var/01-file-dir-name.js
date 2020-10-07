#!/usr/bin/node

const log=console.log;

log(`file name:$(_filename)`);
log(`dir name:$(_dirname)`);

let fileName=_dirname+'/view/view.html';

//方案2：不好，代码复杂，平台考虑不全面
switch(process.platform){
  case 'linux':
    fileName=_dirname+'/views/view.html';
    break;

  case 'win32':
    fileName=_dirname+'\\views\\view.html';
    break;

  _dirnamefault:
    fileName='something wrong';
}

log(`fileName:${fileName}`);

//方案三：最佳
const path=require('path');

fileName=path.jion(_dirname,'views','login.html');
log('fileName:',fileName);
