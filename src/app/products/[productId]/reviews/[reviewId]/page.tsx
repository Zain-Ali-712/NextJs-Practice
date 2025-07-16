import Link from "next/link";
export default async function ReviewId({
    params,
}:{
    params: Promise<{productId:string, reviewId:string}>;
}) {
    const {productId, reviewId} = await params;
    return <h1><Link href={`/products/${productId}/reviews/${reviewId}`}>Review {reviewId} for Product {productId}</Link></h1>
    
}