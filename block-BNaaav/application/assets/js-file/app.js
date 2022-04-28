let http = require('http');
let fs = require('fs');
let server=http.createServer(handleServer);

function handleServer(req,res){
//reding html
if(req.method ==='GET' && req.url ==='/' ){
  fs.readFile('../../index.html',(err,content)=>{
  if(err) console.log(err)
res.setHeader('Content-Type','text/html');
//sending response
res.write(content)
res.end();
})
}

if(req.method==='GET'&&req.url==="/about"){
  fs.readFile('../../about.html',(err,content)=>{
    if(err)console.log(err);
    res.write(content)
    res.end()
  })
}
if(req.url.split(".").pop()==="css"){
  res.setHeader('Content-Type','text/css');
  //reding css
   fs.readFile('../stylesheet/' + req.url , (err,content)=>{
     if(err)return console.log(err)
     res.write(content)
     res.end();
   })
 }

 if(req.url.split(".").pop()==="jpg"){
  res.setHeader('Content-Type','image/jpg');
  //reding css
   fs.readFile('../image/' + req.url , (err,content)=>{
     if(err)return console.log(err)
     res.write(content)
     res.end();
   })
 }
}

server.listen(4000,()=>{
  console.log('we are using local host 4000')
})


