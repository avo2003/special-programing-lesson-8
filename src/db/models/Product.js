const mongoose=require('mongoose');

const Product = mongoose.model('Product',{
    title:{
        type: String,
        required: true,
        trime: true,
    },
    price:{
        type:Number,
        required:true,
    }
});
module.exports=Product;