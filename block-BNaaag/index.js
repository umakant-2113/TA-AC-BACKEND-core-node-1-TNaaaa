var {readFile,readFileSync}=require('fs');

readFile('./content.md','utf8',(err,content)=>{
    console.log(content)
})

let result =readFileSync('./content.md','utf8')
console.log(result);
var buff1=Buffer.alloc(10);
buff1.write("welcome to buffer")
console.log(buff1)
