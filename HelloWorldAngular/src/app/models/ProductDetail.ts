import { Product } from "./Product";
import { ProductReview } from "./ProductReview";

export class ProductDetail extends Product
{
    images: string[] = []
    reviews: ProductReview[] = []
}