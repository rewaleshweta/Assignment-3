const http=require("http");
const fs=require("fs");

const name="Shweta";
const content= 
   `<h1> Hello World </h1>
    <p> This is ${name}... </p>`

const mydata=fs.writeFileSync("index.html",content ,err=>{
    console.log("your file is creted")
})

const server=http.createServer((req,res)=>{
    fs.readFile("index.html",(err,data)=>{
        if(err){
            res.writeHead(404,{"Content-Type":"text/html"})
            res.end( "page not found")
        }else{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end(data)

        }
    })
})

server.listen(5000,()=>{
    console.log("server run on port 5000")
})