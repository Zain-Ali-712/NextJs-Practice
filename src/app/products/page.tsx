import Link from "next/link";
export default async function Products({
    params,
}: {
    params :Promise<{productId:string}>;
}) {
    const productId = (await params).productId;
    return <>
        <h1>My Products</h1>
        <ul>
            <li><Link href={`/products/${productId}`}>Product1</Link></li>
            <li><Link href={`/products/${productId}`}>Product1</Link></li>
            <li><Link href={`/products/${productId}`}>Product1</Link></li>
            <li><Link href={`/products/${productId}`}>Product1</Link></li>
        </ul>
    </>
}