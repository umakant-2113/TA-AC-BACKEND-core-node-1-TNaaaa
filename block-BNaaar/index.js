// Create a basic http server which is listening on port 5k 

// 1. handle GET request on '/' and send 'Welcome to homepage' in response in plain text.
// 2. handle GET request on '/about' and send response 'this is all about NodeJS' uslet servering h2 tag in HTML.
// 3. handle POST request on '/about' and send json response `{message: this is a post request}`.

let http=require('http');
const { type } = require('os');

let server=http.createServer(handleServer);

function handleServer(req,res){
if(req.method==="GET"&&req.url=== "/"){
res.setHeader('content-type','text/plain') 
res.end("welcome to localhost umakant rajput")
}else if(req.method==='GET'&&req.url==="/about"){
res.setHeader('content-type','text/html')
res.end('<h2> welcome to node js </h2>')
}else if(req.method==="POST" &&req.url==="/about"){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"message": "hello umakant rajput"}));
}
}
server.listen(5000,()=>{
    console.log('we are using  localhost 5000 ')
})



