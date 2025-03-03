import Cart from '../models/Cart';
import {NextResponse} from "next/server";

export const addtocart=async (req)=>{
    try {
        const body = await req.json();
        console.log("Received Data:", body);  // ✅ Log request data

        const newcart = await Cart.create(body);
        console.log("Inserted Data:", newcart);  // ✅ Log inserted data

        return NextResponse.json({
            message: "added to cart successfully",
            success: true,
            newcart,
        });
    } catch (error) {
        console.error("Insertion Error:", error);  // ❌ Catch MongoDB errors
        return NextResponse.json({ message: "Error adding to cart", error });
    }
};


export const getcartitems=async (req)=>{
    const cartItems=await Cart.find();

    return NextResponse.json({
        message:"Cart item fetched successfully",
        success:true,
        cartItems,
    });
};


export const clearcartitems=async (req)=>{
    await Cart.deleteMany({});

    return NextResponse.json({
        message:"cart item deleted successfully",
        success:true,

    });
};