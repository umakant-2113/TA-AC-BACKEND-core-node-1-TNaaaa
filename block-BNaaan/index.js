// 1. create a basic server and listen on port 3000
// 2. write code to console
//   - request headers
//   - request method and url
// 3. request from browser on `http://localhost:3000/about`

let http=require('http');
let server=http.createServer(handleServer)

function handleServer(req,res){
console.log(req.header)
console.log(req.method);
console.log(req.url)
res.end("welcome")
}
server.listen(3000,()=>{
    console.log("use use local host 3000")
})