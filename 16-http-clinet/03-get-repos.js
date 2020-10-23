#!/usr/bin/env node
const https=require('https'),
      url=require('url'),
      log=console.log,
      name=process.argv[2];
let addr=`https://api.github.com/search/repositories?q=user:+${name}`;
let opt=url.parse(addr);
opt.headers={
  'USER-Agent':'curl/7.29.0'
}

https.get(addr,opt,(res)=>{
  log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  log(res.headers);
  let data='';
  res.on('data',(chunck)=>data+=chunck);
  res.on('end',()=>{
    let rs=[],num=1;
    data=JSON.parse(data).items;
    process.exit();
    data=items=forEach((item)=>rs.push({
      num:num++,
      name:item.name,
      //description:item.description
    }));
    console.table(rs);
  });
});
