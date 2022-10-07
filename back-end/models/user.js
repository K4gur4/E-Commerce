const momgoose = require('mongoose')

const userSchema= new momgoose.Schema(

    {
        username:{type:String,require:true,unique:true},
        email:{type:String,require:true,unique:true},
        password:{type:String,require:true},
        isAdmin:{
            type:Boolean,default:false
        }
    },{
        timestamps:true
    }
);

module.exports= momgoose.model("User",userSchema)