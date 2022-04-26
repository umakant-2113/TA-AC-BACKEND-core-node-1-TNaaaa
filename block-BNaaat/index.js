let http=require('http');
let fs=require('fs');
let server=http.createServer(handleServer)
function handleServer(req,res){
if(req.method==='GET'&&req.url==='/'){
fs.readFile('./index.html',(err,content)=>{
if(err)console.log(err)
res.end(content)
})
}else if(req.method==='GET'&&req.url==='/about'){
    res.setHeader('content-type','text/html')
    fs.createReadStream('./index.html').pipe(res)
}
} 


server.listen(5555,()=>{
    console.log('we are using local host 5555')
})