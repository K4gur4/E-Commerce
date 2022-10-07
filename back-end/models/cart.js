const momgoose = require('mongoose')

const cartSchema= new momgoose.Schema(

    {
        userId:{type:String,require:true},
        products:[
            {
                productId:{
                    type:String
                },
                quatity:{
                    type:Number,
                    default:1
                }
            }
        ],
    },{
        timestamps:true
    }
);

module.exports= momgoose.model("Cart",cartSchema)