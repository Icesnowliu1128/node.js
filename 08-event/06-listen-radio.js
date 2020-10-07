#!/usr/bin/env node

const Radio=require('./04-radio.js'),
      station={
        'freq':'106.7',
        'name':'music Radio'
      };

let radio=new Radio(station);
radio.on('open',(station)=>{
  console.log('%s FM %s is opened!',station.name,station.freq);
  console.log('lalala...');
});
radio.on('stop',(station)=>{
  console.log('"%s" FM  %s is closed!',station.name,station.freq);
});
