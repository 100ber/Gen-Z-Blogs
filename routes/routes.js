const express = require('express')
const router = express.Router()
const Model=require('../model/model')
const Model2=require('../model/model2')
const bcrypt=require('bcryptjs')
const joi=require('joi')
const jwt=require('jsonwebtoken')
const verify=require('../authVerify')

const registerSchema=joi.object({
    username: joi.string().required(),
    age: joi.number().required(),
    email: joi.string().required().email(),
    password: joi.string().min(8).required()
    
})

const postSchema=joi.object({
    title: joi.string().required(),
    img: joi.string().required(),
    content: joi.string().required(),
})


//post blog
router.post('/createPost',verify,async(req,res)=>{

   
    const r=await Model.findById(req.user);
    const newPost=new Model2({
        title:req.body.title,
        author:r.username,
        img:req.body.img,
        content:req.body.content,
        userid:r._id
    })
    
    try{
    const {error}=await postSchema.validateAsync(req.body)
    const result =await newPost.save();
    res.status(200).send("Posted Successfully")
    }
    catch(error){
        res.status(400).send(error)
    }
    
    })



//register User

router.post('/registerUser',async(req,res)=>{

const emailExists=await Model.findOne({email:req.body.email})
if(emailExists){
    res.status(400).send("email already exists")
    return
}


const salt= await bcrypt.genSalt(10);
const hashedPassword=await bcrypt.hash(req.body.password,salt);

const newUser=new Model({
    username:req.body.username,
    age:req.body.age,
    email:req.body.email,
    password:hashedPassword
})

try{
//const {error}=await registerSchema.validateAsync(req.body)
const result =await newUser.save();
res.status(200).send("User successfully registered")
}
catch(error){
    res.status(400).send(error)
}

})


router.get('/getAllData',verify,async (req,res)=>{
    
        try{
    const result = await Model2.find();
    res.status(200).json(result)
        }
        catch(error){
            res.status(500).json({message : error.message})
        }
        
})

router.get('/getMyPosts',verify,async (req,res)=>{
    
    try{
const result = await Model2.find({userid:req.user});
res.status(200).json(result)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
    
})



router.get('/getPost/:id',verify,async (req,res)=>{
    try{
        const id=req.params.id;
        const result=await Model2.findById(id);
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({message : error.message})    
    }
})


router.patch('/editPost/:id',verify,async (req,res)=>{
    const id=req.params.id;
    try{
        const data=await Model2.findById(id);
        if(data.userid==req.user._id || req.user._id =="63bfa6b77a898718394c733c"){
        const result= await Model2.findByIdAndUpdate(id,req.body);
        res.status(200).json(result)}
        else{
            res.status(400).json(req.user._id)
        }
    }
        catch(error){
            res.status(500).json({message : error.message})
        }
 
})

router.delete('/deletePost/:id',verify,async(req,res)=>{
    const id=req.params.id;
    try{
        const data=await Model2.findById(id);
        if(data.userid==req.user._id || req.user._id =="63bfa6b77a898718394c733c"){
        const result=await Model2.findByIdAndDelete(id);
        
        res.status(200).json(result)}
        else{
            res.status(400).json("Unauthorized access")
        }
    }
        catch(error){
            res.status(500).json({message : error.message})
        }
})







const loginSchema=joi.object({
    email: joi.string().required().email(),
    password: joi.string().min(8).required()
})

router.post('/login',async (req,res)=>{

try{
    const {error} =await loginSchema.validateAsync(req.body);
}
catch(error){
    res.status(400).send(error)
}

const user= await Model.findOne({email : req.body.email})

if(!user){
    res.status(400).send("incorrect email id")
}
else{
const validPassword= await bcrypt.compare(req.body.password,user.password)

if(validPassword){
    // res.status(200).send("Login Successful")

    const token=jwt.sign({_id:user._id},process.env.Token_Secret)
    res.header("auth-token",token).send(token)
}
else{
    res.status(400).send("Incorrect password")
}
}
})

module.exports= router;