
// writeCode

// 1. require fs in a file(`index.js`) and use fs.readFile to read content of a file(content.md)

// - create file whenever required on your own.

// ```js
// // index.js
// fs.readFile('./content.md'// filepath, (err, file) => {
//   // handle error or content of the file
// })
// ```

// 2. Run sync code from fs module in the above file(`index.js`).
// 3. Run async code from fs module in same file.
// 4. create new buffer of fixed length 10 and store it in variable named buff1 and console the buff1.
// 5. write content(Welcome to Buffer) to buff1 variable.

let path=require("path");
let fs=require("fs");
let math=require("./math.js");
fs.readFile("./math.js",(err,content)=>{
    if(err!==null){
        console.log("some thing went worng")
    }else{
        console.log(content.toString())  
    }
})


let buff1=Buffer.alloc(10);
let value=buff1.write("Welcome to Buffer");
console.log(buff1.toString())

// sync code 

console.log("first");
function add(a,b){
return a+b
}
add(5,6)
console.log("second")
// async code 

console.log("first");

setTimeout(()=>{
    console.log("secons")
},1000)
console.log("third")



