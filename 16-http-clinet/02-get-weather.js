#!/usr/bin/env node

const http=require('https'),
      url=require('url'),
      log=console.log,
      addr='https://api.66mz8.com/api/weather.php?location='+process.argv[2];
     // addr='https%3a%2f%2fapi.66mz8.com%2fapi%2fweather.php%3flocation'+'%3d%e5%8c%97%e4%ba%ac';

log(addr);

log(global.encodeURI(addr));
process.exit();

let opt=url.parse(addr);
opt.headers={
  'user-agent':'curl/7.9.0'
};
http.get(addr,(res)=>{
  log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  log(res.headers);
  res.pipe(process.stdout);
});
