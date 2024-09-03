const express = require("express");
const app = express();
const usermodel = require("./mongo");

app.get("/",(req,res)=>{
    res.send("hey");
});
app.get("/create", async(req,res)=>{
    let createduser =  await usermodel.create({
        name:"dhruba",
        username: "maity",
        email:"maitydhruba33@gmail.com"
    });
    res.send(createduser);
});
app.get("/update", async(req,res)=>{
   let updateduser = await usermodel.findOneAndUpdate({name:"dhruba"},{username:"maity"},{new : true});
   res.send(updateduser);
});
app.get("/read", async(req,res)=>{
    let readuser = await usermodel.find();
    res.send(readuser);
 });
 app.get("/delete", async (req, res)=>{
    let deleteduser = await usermodel.findOneAndDelete({name:"dhruba"});
    res.send("deleted sucessfully");
 });

app.listen(3000);