let urlString='https://blog.altcampus.io:80/students/register?name=altcampus&gender=male'
let url=require('url')
var parsUrl=url.parse(urlString)
console.log(parsUrl)
console.log(parsUrl.pathname)
console.log(parsUrl.query);
console.log(parsUrl.protocol)
console.log(parsUrl.hostname)





