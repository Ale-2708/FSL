import { ProductDetail } from "./ProductDetail";

export class ProductInCart extends ProductDetail
{
    qta:number=1

    constructor(p:ProductDetail)
    {
        super()
        this.id = p.id
        this.images = p.images
        this.price = p.price
        this.reviews = p.reviews
        this.thumbnail = p.thumbnail
        this.title = p.title
    }

    addQuantity(q: number)
    {
        this.qta = Math.max(0, this.qta+q)
    }
}