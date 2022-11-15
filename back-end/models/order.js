const momgoose = require('mongoose')

const orderSchema= new momgoose.Schema(

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
        amount:{type:Number, require:true},
        address:{type:Object, require:true},
        status: {type:String, default: "pending"}
    },{
        timestamps:true
    }
);

module.exports= momgoose.model("Order",orderSchema)