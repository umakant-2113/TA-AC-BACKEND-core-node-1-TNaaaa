console.log('Welcome to Nodejs')


let os=require('os');
var free=os.freemem();
var cpus=os.cpus().length
var version=os.version()
var uptime=os.uptime()
console.log(free,cpus,version,uptime)
var {readFile,unlink}=require('fs')


let buff1=Buffer.alloc(12);
let value=buff1.write('hello umakant rajput');
console.log(buff1.toString())





let url=`https://airindia.com/fares/calculate?from=delhi&to=detroit`;
let path=require('url');
let parsedUrl=path.parse(url);
console.log(parsedUrl.query)
console.log(parsedUrl.pathname)
console.log(parsedUrl.protocol)
