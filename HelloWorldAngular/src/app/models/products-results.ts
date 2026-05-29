import { Product } from "./Product"

export class ProductsResults
{
    total:number=0
    skip:number=0
    limit:number=0

    products: Product[]=[]
}