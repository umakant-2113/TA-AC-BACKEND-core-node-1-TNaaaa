var http=require('http');
http.createServer((request,response)=>{
console.log(request)
response.end("welcome to node js")
}).listen(4000,'localhost')




