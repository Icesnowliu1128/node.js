#!/usr/bin/env node

const fs=require('fs'),
      err=console.error,
      src=process.argv[2],
      dst=process.argv[3];
//let srcStream=fs.createReadStream(src),
//    dsrStream=fs.createWriteStream(dst);
//srcStream.pipe(dstStream);
//dstStream.on('close',()=>{
//  fs.chomdSync(dst,fs.statSync(src).mode);
//})
if(!fs.existsSync(src)){
  err('%s not exist!',src);
  process.exit(1);
}

if(!fs.statSync(src).isFile()){
  err('%s is not file!',src);
  process.exit(2);
}
if(typeof dst==='undefined'){
  err('dst is undefined');
  process.exit(3);
}

let stm=fs.createReadStream(src).pipe(fs.createWriteStream(dst));
//复制文件，cp命令连同权限一同复制
//+node 文件才可以执行

//复制文件权限
stm.on('close',()=>{
  fs.chmodSync(dst,fs.statSync(src).mode);
});
