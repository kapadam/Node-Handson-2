const express=require('express');
const fs=require("fs");
const server=express();
const port=7878;

server.get("/",(req,res)=>{
    res.send("I am the Home page.");
    res.end();
})

server.get("/api",(req,res)=>{
    res.send("Express.js is a free and open-source web application framework for Node.js. It is used for designing and building web applications quickly and easily. Web applications are web apps that you can run on web browser. Since Express.js only requires javascript, it becomes easier for programmers and developers to build web applications and API without any effort.");
    res.end();
})

server.get("/main",(req,res)=>{
    res.send("Express.js is a framework of Node.js which means that most of the code is already written for programmers to work with. You can build a single page, multi-page, or hybrid web applications using Express.js. Express.js is lightweight and helps to organize web applications on the server-side into a more organized MVC architecture.");
    res.end();
})

server.post("/submit",(req,res)=>{
//     const content="hello";
//     fs.appendFile(path.join(__dirname,"/message.text",content,function(err){
//         if(err){
//             console.log(err);
//             return;
//         }
//         res.send("Express.js is a free and open-source web application framework for Node.js. It is used for designing and building web applications quickly and easily. Web applications are web apps that you can run on web browser. Since Express.js only requires javascript, it becomes easier for programmers and developers to build web applications and API without any effort.");
//         res.end();
//     })
// )
res.send("POST worked..!!");
res.end();
    
})

server.listen(port,()=>{
    console.log("Application is running...!!!");
})