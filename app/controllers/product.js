import Product from '../models/Product';
import {NextResponse} from "next/server";

export const createProduct=async (req)=>{
    const body=await req.json();
    const newProduct=await Product.create(body);

    return NextResponse.json({
        message:"product added suceesfully",
        newProduct,
    });
};


export const getproducts=async(req)=>{
    const product=await Product.find();

    return NextResponse.json({
        message:"product fetched successfully",
        success:true,
        product,
    });
};
