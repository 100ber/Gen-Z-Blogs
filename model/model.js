const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        required:true,
        type: String,
    },
    age:{
        required:true,
        type: Number
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type: String,
        min:8,
        max:255
    }
})

module.exports= mongoose.model('User',userSchema);