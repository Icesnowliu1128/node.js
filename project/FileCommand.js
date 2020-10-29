#!/usr/bin/env node

const fs=require('fs'),
      path=require('path'),
      cmd=process.argv[2],
      filename=process.argv[3];

if(cmd==='-list'){
  let arrList=fs.readdirSync('sysFile');
  let list=[];
  for(let i=0;i<arrList.length;i++){
    let obj={};
    let stat=fs.statSync('sysFile/'+arrList[i]);
    if(stat.isFile()){
      obj.fileName=arrList[i];
      obj.fileSize=stat.size;
      list.push(obj);
    }
  }
  list.sort((a,b)=>{
    return a.fileSize-b.fileSize;
  });
  console.log(JSON.stringify(list));
}

if(cmd==='-show'){
  try{
    let len=fs.statSync(filename).size,
        buf=Buffer.alloc(len),
        fid=fs.openSync(filename,'r');

    fs.readSync(fid,buf,0,len,0);
    console.log(buf.toString('utf-8'));
  }catch(e){
    console.error(e.message);
    process.exit(1);
  }
}
if(cmd=='-del'){
  const join=require('path').join;

  if(typeof(filename) === 'undefined') {
      console.error('请指定要删除的文件名或者目录名！');
        process.exit(1);

  }

  if(!fs.existsSync(filename)) {
      console.error('%s not exist!', filename);
        process.exit(2);

  }

  if(fs.statSync(filename).isFile()){
    fs.unlinkSync(filename);
    process.exit(3);
  }
  if(fs.statSync(filename).isDirectory()){ 
    deleteDir(filename);
    process.exit(4);
  }

  function deleteDir(folder) {
    let files = fs.readdirSync(folder);

    for(let i=0; i<files.length; i++) {
      let file = join(folder, files[i]);
      if(fs.statSync(file).isFile()) {
        fs.unlinkSync(file);
        continue;                              
      }
      if(fs.statSync(file).isDirectory()){ 
        deleteDir(file);
      }          
    }
    fs.rmdirSync(folder);
  }
}
