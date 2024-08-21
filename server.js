const express=require('express');
const mongoose=require("mongoose");
const app=express();
app.use(express.json())
// let todo=[];
// app.get("/",async(req,res)=>
// {
//     res.status(201).json({name:"Sridhar"});
// })
mongoose.connect("mongodb://localhost:27017/mern-app")
.then(()=>{
    console.log('DB Connected')
    })
    .catch((err)=>{
        console.log(err)
        
    })
    //creating schema
const todoSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String
    },
    description: String
})
//creating model
const todoModel = mongoose.model('todo',todoSchema);
//creating a new todo item
app.post('/todo',async(req,res) =>{
    // let data=await req.body
    // console.log(data);
    const{title,description}=req.body;
    // const newTodo={
    //     id:todo.length+1,
    //     title,
    //     description
    // };
    // todo.push(newTodo);
    // console.log(todo);
    // res.status(201).json(newTodo);
    // })
    try{
        const newTodo = new todoModel({title,description});

        let a =   await newTodo.save();
        console.log(a);
        
        res.status(201).json(newTodo);
    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
})
    app.get('/todo',async(req, res)=>{
        res.json(todo);
    })
    const port=3000;

    app.listen(port,()=>{
        console.log("server is listening to port "+port);})
