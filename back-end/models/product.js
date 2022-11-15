const momgoose = require('mongoose')

const productSchema= new momgoose.Schema(

    {
        title:{type:String,require:true,unique:true},
        desc:{type:Array,require:true},
        img:{type:String,require:true,},
        categories:{type:Array},
        color:{type:Array},
        price:{type:Number,require:true},
        inStock:{type:Boolean, default:true}
    },{
        timestamps:true
    }
);

module.exports= momgoose.model("Product",productSchema)