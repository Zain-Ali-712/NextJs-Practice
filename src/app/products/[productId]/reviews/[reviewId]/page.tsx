import Link from "next/link";

function getRandomInt(count:number){
    return Math.floor(Math.random()*count);
}

export default async function ReviewId({
    params,
}:{
    params: Promise<{productId:string, reviewId:string}>;
}) {
    const num =getRandomInt(2);
    if (num===1){
        throw new Error ("Error loading Review!");
    }
    const {productId, reviewId} = await params;
    return <h1><Link href={`/products/${productId}/reviews/${reviewId}`}>Review {reviewId} for Product {productId}</Link></h1>
    
}