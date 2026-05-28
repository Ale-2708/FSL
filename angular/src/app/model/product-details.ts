export class ProductDetails{
    id:number=0
    title:string=""
    price:number=0
    images:string[] = []
    reviews:Review[]=[]
}

export class Review {
    rating:number=0
    comment:string=""
    date:Date=new Date(2026, 11, 25)
    reviewerName:string=""
    reviewerEmail:string=""
} 