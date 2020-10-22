#!/usr/bin/env node

const fs=require('fs');
//err=console.errror;
switch(process.argv.length){
  case 4:{//hard link node 13-ln.js src lmk
    let src=process.argv[2],
        lnk=process.argv[3];
    console.log(src);
    console.log(lnk);
    fs.linkSync(src,lnk);
    break;
  }
  case 5:{//soft +上面四个
    let //opt=process.argv[2],
        src=process.argv[3],
        lnk=process.argv[4];
    fs.symlinkSync(src,lnk);
    break;
  }
  default:{
    console.error('命令行参数不正确！');
    process.exit(1);
  }
}
      
//let opt={
//  '4':createhardLink,
//  '5':createSoftLink
//};

//function createSoftLink(){
//  let opt=process.argv[2],
//      src=process.argv[3],
//      lnk=process.argv[4];
//}
//  if(opt==='-s'){
//    try{
//      fs.symlinkSync(src,lnk);
//    }catch(e){
//      err(e.message);
//      process.exit(2);
//    }
// }else{
// err('命令行形参数不正确！');
// }
//}

//function createhardLink(){
//  let src=process.argv[2],
//  lnk=process.argv[3];

// try{
// fs.linkSync(src,lnk);
// }catch(e){
//    err(e.message);
//    process.exit(1);
// }
//}

//try{
//opt[process.argv.length]();
//}catch(e){
//err('命令行参数不正确！');
// process.exit(3);
//}
