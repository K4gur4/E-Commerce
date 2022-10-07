const momgoose = require('mongoose')

const productSchema= new momgoose.Schema(

    {
        title:{type:String,require:true,unique:true},
        desc:{type:String,require:true},
        img:{type:String,require:true,},
        categories:{type:Array},
        color:{type:String},
        price:{type:Number,require:true},
    },{
        timestamps:true
    }
);

module.exports= momgoose.model("Product",productSchema)