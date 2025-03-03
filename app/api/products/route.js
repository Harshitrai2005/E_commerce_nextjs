import {connectDB} from "../../utils/database"
import {createProduct} from "../../controllers/product"
import { getproducts } from "../../controllers/product";

//http://localhost:3000/api/products
export async function POST(req){
    await connectDB();
    return createProduct(req);

}

//http://localhost:3000/api/products
export async function GET(req){
    await connectDB();
    return getproducts(req);
}




