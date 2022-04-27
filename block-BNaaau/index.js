
// 1

let http=require('http');
let server=http.createServer(handleServer)
function handleServer(req,res){
console.log(req,res)
}

server.listen(5000,()=>{
    console.log('we are using local host 5000')
})

// 2
let http2 =require('http');
let server2=http2.createServer(handleServer)
function handleServer(req,res){
res.end('My first server in NodeJS')
}

server2.listen(5100,()=>{
    console.log('we are using local host 5100')
})



// 3
let http3=require('http');
let server3=http3.createServer(handleServer)
function handleServer(req,res){
console.log(JSON.stringify(req.headers));
res.end()
}


server3.listen(5555,()=>{
    console.log('we are using local host 5555 ')
})

// 4
let http4=require('http');
let server4=http4.createServer(handleServer)
function handleServer(req,res){
console.log(req.url)
console.log(req.method)
res.end()
}

server4.listen(5566,()=>{
    console.log('we are using local host server 5566')
})
// 5

let http5=require('http');
let server5=http5.createServer(handleServer);

function handleServer(req,res){
let header= JSON.stringify(req.headers);
res.end(header);
}
server5.listen(7000,()=>{
    console.log('we are using local hos 7000')
})
// 6

let http6=require('http');
let server6=http6.createServer(handleServer);
function handleServer(req,res){
    res.statusCode=202;
    res.end()
}
server6.listen(3333,()=>{
    console.log('we are using local host 3333 ')
})
 

let http7=require('http');
let server7=http7.createServer(handleServer);
function handleServer(req,res){
res.setHeader('content-type','text/html')
res.end(`<h3>Welcome to altcampus</h3>`)
}
server7.listen(8000,()=>{
    console.log(`we are using local host 8000`)
})


let http8=require('http');
let server8=http8.createServer(handleServer);

function handleServer(req,res){
res.setHeader('content-type','text/html')
res.writeHead(200, {'content-type':'text/html'})
res.end()
}
server8.listen(8300,()=>{
    console.log('we are using localhost 8003')
})


// 9
let http9=require('http');
let server9=http9.createServer(handleServer)

function handleServer(req,res){
res.setHeader('content-type','application/json')
res.end(JSON.stringify({
    success: true,
    message: 'Welcome to Nodejs'  
}))
}
server9.listen(8888,()=>{
    console.log('we are using local host 8888')
})


let http10=require('http');
let server10 =http10.createServer(handleServer)

function handleServer(req,res){
    if(req.method==='POST'){
        res.setHeader('content-type','text/html');
        res.end(`<h2>posted for first time</h2>`)
    }
}
server10.listen(5050,()=>{
    console.log('we are using local host 5050')
})


let http11=require('http');
let server11=http11.createServer(handleServer);

function handleServer(req,res){
if(req.url==='/'){
    res.setHeader('content-type','text/plain')
    res.end('hello umakant rajput')
}else if(req.url==='/about'){
    res.setHeader('content-type','text/html')
    res.end(`<h2>welcome to node js </h2>`)
}else{
    res.statusCode=404;
    res.end("page not found")
}

}
server11.listen(2345,()=>{
    console.log('we are using local host 2345')
})



let http12=require('http');
let server12=http12.createServer(handleServer);
function handleServer(req,res){
if(req.method==="GET"&&req.url==="/users"){
        res.setHeader('content-type','application/json')
        res.write(JSON.stringify({name: 'umakant'}))
        res.write(JSON.stringify({email: 'umakant@gmail.com'}))
        res.end() 
        }else if(req.method==="POST"){
            res.end(`Posted for the second time`)
        }
}
server12.listen(2235,()=>{
    console.log('we are using local host 2235')
})


// create a server and handle query params from the request on following 
// url i.e. `/users?email=nodeserver@gmail.com` from browser

//   - parse the  request url using parse method from url module
//   - console pathname from parsed url in above step
//   - grab url using `req.url`
//   - differentiate between `req.url` and `parsedUrl.pathname`
//   - grab the email from query params
//   - return json response with email from query params

let url=require('url');
let parsedUrl=url.parse(`/users?email=nodeserver@gmail.com`)
let pathName = parsedUrl.pathname
console.log(pathName)
let http13 =require('http');
let server13=http13.createServer(handleServer);
function handleServer(req,res){
console.log(req.url)
if(pathName==='/users'){
    res.write(JSON.stringify({email:'lodhiumakant800@gmail.com'}))
   res.end()
}
}

server13.listen(9000,()=>{
    console.log('we are using local host 9000 ')
})