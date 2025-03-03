import {connectDB} from "../../utils/database"
import {addtocart} from "../../controllers/cart"
import { getcartitems } from "../../controllers/cart";
import { clearcartitems } from "../../controllers/cart";

//http://localhost:3000/api/cart
export async function POST(req){
    await connectDB();
    return addtocart(req);
}

//http://localhost:3000/api/cart

export async function GET(req){
    await connectDB();
    return getcartitems(req);
}

//http://localhost:3000/api/cart
export async function DELETE(req){
    await connectDB();
    return clearcartitems(req);
}

