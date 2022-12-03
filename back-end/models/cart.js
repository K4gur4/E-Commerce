const momgoose = require('mongoose')

const cartSchema= new momgoose.Schema(

    {
        userId:{type:String,require:true},
        products:{type:Array},
        quantity:{type:Number,default:0}
    },{
        timestamps:true
    }
);

module.exports= momgoose.model("Cart",cartSchema)