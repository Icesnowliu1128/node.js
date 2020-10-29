#!/usr/bin/env node

const http=require('http');

http.createServer((req,res)=>{
  console.log(req.method);
  switch(req.method){
    case 'GET':
      res.end('get method');
      break;

    case 'POST':
      res.end('post method');
      break;

    case 'PUT':
      res.end('put method');
      break;
    case 'DELETE':
      res.end('delete methodt');
      break;

    default:
      res.end(`${req.method} method`);

  }
  res.end('hello world');

}).listen(8080);
