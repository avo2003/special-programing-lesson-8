const express = require ('express');
const router = new express.Router();
const Product = require('../db/models/Product');

router.post('/',async (req,res)=>{
    const product =new Product(req.body);
    try{
        await product.save();
        res.status(201).json(product);

    }catch(error){
        res.status(500).json({message:'Bad request'});
    }
});
router.get('/',async(req,res)=>{
    try{
        const product =await Product.find({});
        res.json(product);
    }catch(error){
        res.status(500).json({message:'Bad request'});
    }
});


module.exports=router;