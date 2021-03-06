#!/usr/bin/env node


function Dog(name,energy){
  let _listeners={
    // 'evnet1':[_listener1,_listener2,...],
    // event:事件名称；listener:回调函数
    // 'event2':[]
  };
  this.name=name,
  this.energy=energy;

  let timer=setInterval(()=>{
    if(energy>0){    
      emit('bark');
      this.energy--;
    }
    if(this.energy<0){
      clearInterval(timer);
    }

  },1000);

  this.on=(evt,fn)=>{
    if(typeof(_listeners[evt])==='undefined'){
      _listeners[evt]=[];
    }

    _listeners[evt].push(fn);
  };

  function emit(evt){
    if(typeof(_listeners[evt])==='undefined'){
      console.error('Error: %s not defined!');
      process.exit(1);      
    }

    _listeners[evt].forEach((fn)=>{
      fn.call(this.arg);
    });
  }
}

module.exports=Dog;
