"use strict";var express=require("express"),app=express(),port=process.env.PORT||3e3;app.use(express["static"]("app")),app.listen(port,function(){console.log("server available at http://localhost:"+port)}),app.get("/",function(e,p){p.sendFile("index.html")});