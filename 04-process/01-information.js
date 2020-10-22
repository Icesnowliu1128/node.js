#!/usr/bin/env node
const log=console.log;

log(`architecture:${process.arch}`);
log(`platfrom:  ${process.platform}`);

log(`process:${process.pid}`);
log(`exePath:${process.execPath}`);

log(`node version:${process.version}`);
log(`user id:${process}.getuid`);
log(`group id:${process.getgid}`);
log(`ced:${process.cwd}\n`);

log(`rss:${process.memoryUsage().res}`);
log(`heapTotal:${process.memoryUsage().heapTotal}`);
log(`heapUsed:${process.memoryUsage().heapUsed}\n`);
log(`external:${process.memoryUsage().external}`);

log('env:');
log(process.env);
log(`host name:${process.env.HOSTNAME}`);
